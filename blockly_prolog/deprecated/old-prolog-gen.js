Blockly.PROLOG['prolog_math_operation'] = function (block) {
    let code = '', args;
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
    args = Blockly.PROLOG.statementToCode(block, 'ARGS', separator);
    if(args === '') return '';
    code += args;
    if(block.getSurroundParent() !== null) code = appendBrackets(code);
    return code;
};

Blockly.PROLOG['prolog_arithmetic'] = function (block) {
    let code = '', args;
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
            separator = '\u200F<';
            break;
        case "LTE":
            separator = '=<';
            break;
        case  "GT":
            separator = '\u200F>';
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
    args = Blockly.PROLOG.statementToCode(block, 'ARGS', separator);
    code += args;
    return code;
};


Blockly.Blocks['prolog_arithmetic'] = {
    init: function () {
        this.setColour('#a85277');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Vergleich')
            .appendField(new Blockly.FieldDropdown([
                ["=", "EQ"],
                ["\\=", "NEQ"],
                ["\u200F<", "LT"],
                ["=<", "LTE"],
                ["\u200F>", "GT"],
                [">=", "GTE"],
                ["==", "IDT"],
                ["\\==", "NIDT"],
                ["=:=", "NUMIDT"],
                ["=\\=", "NUMNIDT"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};


Blockly.Blocks['prolog_math_operation'] = {
    init: function () {
        this.setColour('#868da8');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Operator: ')
            .appendField(new Blockly.FieldDropdown([
                ["+", "PLUS"],
                ["-", "MINUS"],
                ["/", "DIV"],
                ["\u00D7", "MULTI"],
                ["mod", "MOD"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};


//Experimental
Blockly.Blocks['prolog_extended_rule'] = {
    init: function () {
        this.setColour('#0f97a3');
        this.setPreviousStatement(true, ['MainEditor']);
        this.setNextStatement(true, ['MainEditor']);
        this.appendDummyInput().appendField('Regel');
        //Blocks within the toolbox.
        this.innerXML = null;
        this.setMutator(new Blockly.Mutator(['prolog_fact', 'prolog_predicate', 'prolog_constant', 'prolog_variable', 'prolog_arithmetic',  'prolog_log_operation', 'prolog_math_operation', 'prolog_cut_fail', 'prolog_list']));
        this.appendDummyInput('HeadData').appendField('Es gilt:\t').appendField('true', 'HEADCODE');
        this.appendDummyInput('BodyData').appendField('Wenn erfüllt ist:').appendField('true', 'BODYCODE');
    },
    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        if(this.innerXML === null) return null;
        let container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('ruleData', Blockly.Xml.domToText(this.innerXML));
        // container.appendChild(this.innerXML);
        return container;
    },
    /**
     * Parse XML to restore the else-if and else inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.innerXML = Blockly.Xml.textToDom(xmlElement.getAttribute('ruleData'));
        // this.innerXML = xmlElement.childNodes[1];
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        let ruleBlockNode = Blockly.utils.xml.createElement('block');
        ruleBlockNode.setAttribute('type', 'prolog_rule');
        if(this.innerXML !== null) {
            /*

                //Head elements.
                let headConnector = Blockly.utils.xml.createElement('statement');
                headConnector.setAttribute('type', 'prolog_log_operation_inside_rule');
                headConnector.appendChild(this.innerXML.firstChild);
                ruleBlockNode.appendChild(headConnector);
                //Body elements.
                let bodyConnector = Blockly.utils.xml.createElement('statement');
                bodyConnector.setAttribute('type', 'prolog_log_operation_inside_rule');
                bodyConnector.appendChild(this.innerXML.lastChild);
                ruleBlockNode.appendChild(bodyConnector);

            //Head elements.
           // ruleBlockNode.appendChild(this.innerXML.firstChild);
            //Body elements.

            let headConnector = Blockly.utils.xml.createElement('block');
            headConnector.setAttribute('type', 'prolog_log_operation_inside_rule');

            let headStatement = this.innerXML.firstChild;
            headConnector.appendChild(headStatement.firstChild);

            let newHeadStatement = Blockly.utils.xml.createElement('statement');
            newHeadStatement.setAttribute('name', 'INPUT_HEAD');
            newHeadStatement.appendChild(headConnector);


            ruleBlockNode.appendChild(newHeadStatement);
*/

            ruleBlockNode.appendChild(this.innerXML.firstChild);
            ruleBlockNode.appendChild(this.innerXML.lastChild);
        } else {
            let headConnector = Blockly.utils.xml.createElement('block');
            headConnector.setAttribute('type', 'prolog_rule_head_con');
            let newHeadStatement = Blockly.utils.xml.createElement('statement');
            newHeadStatement.setAttribute('name', 'INPUT_HEAD');
            newHeadStatement.appendChild(headConnector);
            ruleBlockNode.appendChild(newHeadStatement);

            let bodyConnector = Blockly.utils.xml.createElement('block');
            bodyConnector.setAttribute('type', 'prolog_rule_body_con');
            let bodyStatement = Blockly.utils.xml.createElement('statement');
            bodyStatement.setAttribute('name', 'INPUT_BODY');
            bodyStatement.appendChild(bodyConnector);
            ruleBlockNode.appendChild(bodyStatement);
        }
        this.prologRule = Blockly.Xml.domToBlock(ruleBlockNode,  workspace);
        return this.prologRule;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        let xml = Blockly.Xml.blockToDom(containerBlock);
        this.innerXML = xml;
        this.updateShape_();
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @this Blockly.Block
     * @private
     */
    updateShape_: function() {
        /*
        //Delete everything.
        if(this.getInput('HeadData')) this.removeInput('HeadData');
        if(this.getInput('BodyData')) this.removeInput('BodyData');
        //Rebuild block.
        let code = Blockly.PROLOG.topLevelBlockToCode(this.prologRule);
        let head = code.split(':-')[0];
        let body = code.split(':-')[1];
        console.log(code);
        let headField = new Blockly.FieldTextInput(head);
       // headField.setEditable(false);
        let bodyField = new Blockly.FieldTextInput(body);
       // bodyField.setEditable(false);
        this.appendDummyInput('HeadData').appendField('Es gilt:\t').appendField(head);
        this.appendDummyInput('BodyData').appendField('Wenn erfüllt ist:').appendField(body);
        */
        //

        let code = Blockly.PROLOG.topLevelBlockToCode(this.prologRule);
        let head = code.split(':-')[0];
        let body = code.split(':-')[1];
        this.getField('HEADCODE').setValue(head);
        this.getField('BODYCODE').setValue(body);
    }
};