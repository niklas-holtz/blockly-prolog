'use strict';

goog.provide('Blockly.Prolog');
goog.require('Blockly.Generator');

Blockly.PROLOG = new Blockly.Generator('PROLOG');

Blockly.PROLOG.ORDER_NONE = 99;

Blockly.PROLOG.INDENT = '';

Blockly.PROLOG.INFINITE_LOOP_TRAP = "\n";

Blockly.PROLOG.workspaceToCode = function(workspace) {
    if (!workspace) {
        // Backwards compatibility from before there could be multiple workspaces.
        console.warn('No workspace specified in workspaceToCode call.  Guessing.');
        workspace = Blockly.getMainWorkspace();
    }
    var code = [];
    this.init(workspace);
    var blocks = workspace.getTopBlocks(true);
    for (var i = 0, block; block = blocks[i]; i++) {
        var line = this.topLevelBlockToCode(block);
        if (Array.isArray(line)) {
            // Value blocks return tuples of code and operator order.
            // Top-level blocks don't care about operator order.
            line = line[0];
        }
        if (line) {
            if (block.outputConnection) {
                // This block is a naked value.  Ask the language's code generator if
                // it wants to append a semicolon, or something.
                line = this.scrubNakedValue(line);
                if (this.STATEMENT_PREFIX && !block.suppressPrefixSuffix) {
                    line = this.injectId(this.STATEMENT_PREFIX, block) + line;
                }
                if (this.STATEMENT_SUFFIX && !block.suppressPrefixSuffix) {
                    line = line + this.injectId(this.STATEMENT_SUFFIX, block);
                }
            }
            code.push(line);
        }
    }
    code = code.join('\n');  // Blank line between each section.
    code = this.finish(code);
    // Final scrubbing of whitespace.
    code = code.replace(/^\s+\n/, '');
    code = code.replace(/\n\s+$/, '\n');
    code = code.replace(/[ \t]+\n/g, '\n');
    return code;
};

Blockly.PROLOG.topLevelBlockToCode = function(block) {
    if(!block) return '';
    let func = this[block.type];
    let code = func.call(block, block);
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = Blockly.PROLOG.topLevelBlockToCode(nextBlock);
    if(nextBlock != null && nextCode !== '') code += '\n' + nextCode;
    return code;
};

Blockly.PROLOG.parseComment = function(comment) {
    let parsedComment = '';
    if(comment !== '') {
        let sArray = comment.split('\n');
        if(PrologParser.MULTILINE_COMMENTS ) {
            if(sArray.length === 1) {
                //Single line comment
                parsedComment = '/* ' + sArray[0] + ' */\n';
            } else {
                //Multi line comment
                sArray.forEach(function (element) {
                    if(element !== '') parsedComment += '/* '+element + ' */\n';
                });
            }
        } else {
            //Single line comment
            parsedComment = '/* ' + sArray[0] + ' */\n';
        }
    }
    return parsedComment;
};

Blockly.PROLOG.blockToCode = function(block, opt_sep) {
    if(!block) return '';
    let func = this[block.type];
    let code = func.call(block, block);
    if(Array.isArray(code)) {
        //Prädikate
        return [this.scrub_(block, code[0], opt_sep), code[1]];
    } else {
        //Konstanten und co
        return this.scrub_(block, code, opt_sep);
    }
};

Blockly.PROLOG.statementToCode = function(block, name, opt_sep) {
    let targetBlock = block.getInputTargetBlock(name);
    return this.blockToCode(targetBlock, opt_sep);
};

Blockly.PROLOG.scrub_ = function(block, code, opt_sep) {
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = Blockly.PROLOG.blockToCode(nextBlock, opt_sep);
    if(code.length < 1) return nextCode;
    let separator = '';
    let comment = this.parseComment(block.getCommentText());
    if(code.slice(-1) === '.') code = code.slice(0, -1);
    if(nextBlock != null && nextCode.length > 0) {
        if(opt_sep !== undefined && opt_sep !== null) separator = opt_sep;
        else separator = ', ';
    }
    return comment + code + separator + nextCode;
};

function appendBrackets(code) {
    return '('+code+').';
}

Blockly.PROLOG['prolog_fact'] = function (block) {
    let code = '', predicateCode, argumentCode;
    predicateCode = Blockly.PROLOG.valueToCode(block, 'PREDICATE', Blockly.PROLOG.ORDER_NONE);
    if(predicateCode === '') return '';
    code += predicateCode;
    code += '(';
    //Argumente
    argumentCode = Blockly.PROLOG.statementToCode(block, 'FACT_ARGS');
    code += argumentCode;
    //Ende
    code += ').';
    return code;
};

Blockly.PROLOG['prolog_constant'] = function (block) {
    let dynTextFeld = block.getField("CONSTANT_NAME");
    if(!dynTextFeld.isValid()) return "";
    let code = block.getFieldValue('CONSTANT_NAME');
    return code;
};

Blockly.PROLOG['prolog_predicate'] = function (block) {
    let dynTextFeld = block.getField("PREDICATE_NAME");
    if(!dynTextFeld.isValid()) return "";
    let code = block.getFieldValue('PREDICATE_NAME');
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_variable'] = function (block) {
    let dynTextFeld = block.getField("VARIABLE_NAME");
    if(!dynTextFeld.isValid()) return "";
    let code = block.getFieldValue('VARIABLE_NAME');
    return code;
};

Blockly.PROLOG['prolog_rule'] = function (block) {
    let comment = Blockly.PROLOG.parseComment(block.getCommentText());
    let code = comment, headCode, bodyCode, functorCode;
    headCode = Blockly.PROLOG.statementToCode(block, 'INPUT_HEAD');
    if(headCode === '') return '';
    code += headCode + ' :- ';
    bodyCode = Blockly.PROLOG.statementToCode(block, 'INPUT_BODY');
    if(bodyCode == '') bodyCode = 'true';
    code += bodyCode;
    code += '.';
    return code;
};

Blockly.PROLOG['prolog_list'] = function (block) {
    let code = '', content;
    content = Blockly.PROLOG.statementToCode(block, 'LIST_ARG');
    let useBar = (this.getFieldValue('VERTICAL_BAR') === 'TRUE');
    if(content !== '') {
        if(useBar) {
            let split = content.split(', ');
            content = split[0];
            if (split.length > 1) {
                content += '|';
                split.shift();
                content += split.join(', ');
            }
        }
        code = '[' + content + ']';
    } else {
        code = '[]';
    }
    return code;
};

Blockly.PROLOG['prolog_log_operation'] = function (block) {
    let code = '', args;
    let operator = this.getFieldValue('OPERATOR');
    let separator = '';
    switch(operator) {
        case "AND":
            separator = ', ';
            break;
        case 'OR':
            separator = '; ';
            break;
        default:
            separator = ', '
    }
    args = Blockly.PROLOG.statementToCode(block, 'ARGS', separator);
    if(args === '') return '';
    if(!args.includes(separator.trim())) return args + ".";
    code += args;
    let parent = block.getSurroundParent();
    if(parent !== null) {
        if(parent.type !== 'prolog_rule' && parent.type !== 'prolog_query') code = appendBrackets(code);
    }
    if(code[code.length-1] !== '.') code += '.';
    return code;
};

Blockly.PROLOG['prolog_operation'] = function (block) {
    let code = Blockly.PROLOG.valueToCode(block, 'OP_ARGS', Blockly.PROLOG.ORDER_NONE);
    if(code !== "") return code + ".";
    return "";
};

Blockly.PROLOG['prolog_is_operation'] = function (block) {
    let code, firstArg, secondArg;
    firstArg = Blockly.PROLOG.valueToCode(block, 'FIRST_ARG', Blockly.PROLOG.ORDER_NONE);
    secondArg = Blockly.PROLOG.valueToCode(block, 'SECOND_ARG', Blockly.PROLOG.ORDER_NONE);
    if(firstArg === '' || secondArg === '') return '';
    code = firstArg + ' is ' + secondArg;
    if(block.getSurroundParent() !== null) {
        //If the surrounded block is not the operation block we have to append brackets
        if(block.getSurroundParent().type !== 'prolog_operation') code = appendBrackets(code);
    }
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_arithmetic_operation']  = function (block) {
    let code, firstArg, secondArg;
    let operator = this.getFieldValue('OPERATOR');
    let separator = '';
    switch (operator) {
        case "EQ":
            separator = '=';
            break;
        case "NEQ":
            separator = '\\=';
            break;
        case "LT":
            separator = '<';
            break;
        case "LTE":
            separator = '=<';
            break;
        case  "GT":
            separator = '>';
            break;
        case  "GTE":
            separator = '>=';
            break;
        case  "IDT":
            separator = '==';
            break;
        case  "NIDT":
            separator = '\\==';
            break;
        case  "NUMIDT":
            separator = '=:=';
            break;
        case  "NUMNIDT":
            separator = '=\\=';
            break;
        default:
            separator = ',';
    }
    separator = ' '+separator+' ';

    firstArg = Blockly.PROLOG.valueToCode(block, 'FIRST_ARG', Blockly.PROLOG.ORDER_NONE);
    secondArg = Blockly.PROLOG.valueToCode(block, 'SECOND_ARG', Blockly.PROLOG.ORDER_NONE);
    if(firstArg === '' || secondArg === '') return '';
    code = firstArg + separator + secondArg;
    if(block.getSurroundParent() !== null) {
        //If the surrounded block is not the operation block we have to append brackets
        if(block.getSurroundParent().type !== 'prolog_operation') code = appendBrackets(code);
    }
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_math_operation'] = function (block) {
    let code, firstArg, secondArg;
    let operator = this.getFieldValue('OPERATOR');
    let separator = '';
    switch (operator) {
        case "PLUS":
            separator = '+';
            break;
        case "MINUS":
            separator = '-';
            break;
        case "DIV":
            separator = '/';
            break;
        case "MULTI":
            separator = '*';
            break;
        case  "MOD":
            separator = 'mod';
            break;
        default:
            separator = ',';
    }
    separator = ' '+separator+' ';

    firstArg = Blockly.PROLOG.valueToCode(block, 'FIRST_ARG', Blockly.PROLOG.ORDER_NONE);
    secondArg = Blockly.PROLOG.valueToCode(block, 'SECOND_ARG', Blockly.PROLOG.ORDER_NONE);
    if(firstArg === '' || secondArg === '') return '';
    code = firstArg + separator + secondArg;
    if(block.getSurroundParent() !== null) {
        //If the surrounded block is not the operation block we have to append brackets
        if(block.getSurroundParent().type !== 'prolog_operation') code = appendBrackets(code);
    }
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_cut_fail']  = function (block) {
    let code = '';

    let operator = this.getFieldValue('OPERATOR');
    switch (operator) {
        case "CUT":
            code = '!';
            break;
        case "FAIL":
            code = 'fail';
            break;
        default:
            code = '!';
    }
    return code;
};

Blockly.PROLOG['prolog_query'] = function (block) {
    let activeBox = block.getField("QUERY_ACTIVE");
    if(!activeBox.getValueBoolean()) return "";
    let code = '?- ', argumentCode;
    argumentCode = Blockly.PROLOG.statementToCode(block, 'INPUT');
    code += argumentCode;
    if(argumentCode !== '') code += '.';
    return code;
};

Blockly.PROLOG['prolog_constant_input'] = function (block) {
    let dynTextFeld = block.getField("CONSTANT_NAME");
    if(!dynTextFeld.isValid()) return "";
    let code = block.getFieldValue('CONSTANT_NAME');
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_variable_input'] = function (block) {
    let dynTextFeld = block.getField("VARIABLE_NAME");
    if(!dynTextFeld.isValid()) return "";
    let code = block.getFieldValue('VARIABLE_NAME');
    return [code, Blockly.PROLOG.ORDER_NONE];
};

Blockly.PROLOG['prolog_rule_body_con'] = Blockly.PROLOG['prolog_log_operation'];

Blockly.PROLOG['prolog_rule_head_fact'] = Blockly.PROLOG['prolog_fact'];

Blockly.PROLOG['prolog_query_body'] = Blockly.PROLOG['prolog_log_operation'];

Blockly.PROLOG['info_block_input'] = function (block) {
    return '';
};

Blockly.PROLOG['info_block_statement'] = function (block) {
    return '';
};
