goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['prolog_fact'] = {
    init: function () {
        this.setColour('#648bb1');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setTooltip('Ein einfacher Fakt, welcher aus einem Funktor und mehreren Termen besteht.');
        this.setInputsInline(true);
        this.appendDummyInput().appendField('Fakt');
        this.appendValueInput('PREDICATE');
        this.appendStatementInput('FACT_ARGS').setCheck('BlockedNesting');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
    }
};

Blockly.Blocks['prolog_constant_input'] = {
    init: function () {
        this.setColour('#54a833');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setOutput(true, null);
        this.setTooltip('Konstanten beginnen stets mit einem Kleinbuchstaben und dürfen einen Unterstrich enthalten (jedoch nicht am Anfang). Sie können bei Bedarf auch nur aus Zahlen bestehen.');
        let textInput = new PrologParser.DynamicFieldTextInput('konstante', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField(textInput, 'CONSTANT_NAME');
    }
};

Blockly.Blocks['prolog_variable_input'] = {
    init: function () {
        this.setColour('#c54717');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setOutput(true, null);
        this.setTooltip('Variablen dürfen nur mit einem Großbuchstaben oder einem Unterstrich beginnen.');
        let textInput = new PrologParser.DynamicFieldTextInput('Variable', 'Variable', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField(textInput, 'VARIABLE_NAME');
    }
};

Blockly.Blocks['prolog_operation'] = {
    init: function () {
        this.setColour('#767e9b');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Der Operationsblock ist Grundlage für jede mathematische Operation.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setInputsInline(false);
        this.appendValueInput('OP_ARGS').appendField('Operation').setCheck('MathOperation');
    }
};

Blockly.Blocks['prolog_math_operation'] = {
    init: function () {
        this.setColour('#868da8');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Zum Berechnen von mathematischen Operationen.');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["+", "PLUS"],
                ["-", "MINUS"],
                ["/", "DIV"],
                ["\u00D7", "MULTI"],
                ["mod", "MOD"]
            ]), 'OPERATOR');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_arithmetic_operation'] = {
    init: function () {
        this.setColour('#868da8');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Mit diesem Block können Vergleiche ausgeführt werden.');
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["=", "EQ"],
                ["\\=", "NEQ"],
                ["<", "LT"],
                ["=<", "LTE"],
                [">", "GT"],
                [">=", "GTE"],
                ["==", "IDT"],
                ["\\==", "NIDT"],
                ["=:=", "NUMIDT"],
                ["=\\=", "NUMNIDT"]
            ]), 'OPERATOR');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_is_operation']= {
    init: function () {
        this.setColour('#868da8');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Der is-Operator wertet den rechten Ausdruck aus und weist ihn der linken Zuweisungsvariablen zu.');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput().appendField('is');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_constant'] = {
    init: function () {
        this.setColour('#54a833');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setTooltip('Konstanten beginnen stets mit einem Kleinbuchstaben und dürfen einen Unterstrich enthalten (jedoch nicht am Anfang). Sie können bei Bedarf auch nur aus Zahlen bestehen.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        let textInput = new PrologParser.DynamicFieldTextInput('name', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Konstante')
            .appendField(textInput, 'CONSTANT_NAME');
    }
};

Blockly.Blocks['prolog_predicate'] = {
    init: function () {
        this.setColour('#54a833');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setTooltip('Funktoren beginnen stets mit einem Kleinbuchstaben und dürfen einen Unterstrich enthalten (jedoch nicht am Anfang).');
        this.setOutput(true, null);
        let textInput = new PrologParser.DynamicFieldTextInput('name', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Funktor')
            .appendField(textInput, 'PREDICATE_NAME');
    }
};

Blockly.Blocks['prolog_variable'] = {
    init: function () {
        this.setColour('#c54717');
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setTooltip('Variablen dürfen nur mit einem Großbuchstaben oder einem Unterstrich beginnen.');
        let textInput = new PrologParser.DynamicFieldTextInput('Name', 'Variable', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Variable')
            .appendField(textInput, 'VARIABLE_NAME');
    }
};

Blockly.Blocks['prolog_list'] = {
    init: function() {
        this.setHelpUrl("http://www.tinohempel.de/info/info/prolog/index.htm");
        this.setTooltip('Eine Liste kann alle anderen Terme enthalten. Der Separator trennt das erste Element explizit vom Rest der Liste.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setColour('#be6b1b');
        this.appendDummyInput()
            .appendField('Liste');
        this.appendDummyInput()
            .appendField(new PrologParser.InfoTextField('Separator', '#FFF'))
            .appendField(new Blockly.FieldCheckbox(false), 'VERTICAL_BAR');
        this.appendStatementInput('LIST_ARG')
            .setCheck('BlockedNesting');
        this.setTooltip('');
    }
};


Blockly.Blocks['prolog_log_operation'] = {
    init: function () {
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Konnektor: ')
            .appendField(new Blockly.FieldDropdown([
                ["and", "AND"],
                ["or", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_rule_head_fact'] = {
    init: function () {
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true);
        this.setTooltip('Ein einfacher Fakt, welches aus einer Relation und einem oder mehreren Termen besteht.');
        this.setInputsInline(true);
        this.appendDummyInput().appendField('Fakt');
        this.appendValueInput('PREDICATE');
        this.appendStatementInput('FACT_ARGS').setCheck('BlockedNesting');
        this.setDeletable(false);
        this.setMovable(false);
    }
};

Blockly.Blocks['prolog_rule_body_con'] = {
    init: function () {
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true);
        this.setDeletable(false);
        this.setMovable(false);
        this.appendDummyInput()
            .appendField('Rumpf: ')
            .appendField(new Blockly.FieldDropdown([
                ["and", "AND"],
                ["or", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_query_body'] = {
    init: function () {
        this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_I.htm");
        this.setColour(240);
        this.setPreviousStatement(true);
        this.setDeletable(false);
        this.setMovable(false);
        this.appendDummyInput()
            .appendField('Was soll geprüft werden?')
            .appendField(new Blockly.FieldDropdown([
                ["and", "AND"],
                ["or", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_rule'] = {
    init: function() {
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setTooltip('Regeln definieren bedingte Beziehungen zwischen Fakten.');
        this.setPreviousStatement(true, ['MainEditor']);
        this.setNextStatement(true, ['MainEditor']);
        this.setCommentText('Describe this rule...');
        this.appendDummyInput()
            .appendField('Regel');
        this.appendStatementInput('INPUT_HEAD')
            .setCheck("prolog_fact");

        this.appendStatementInput('INPUT_BODY')
            .setCheck("prolog_fact");

        this.setColour('#0f97a3');
        this.setInputsInline(false);
        this.setTooltip('Ein einfaches Faktum, welches aus einer Relation und einem oder mehreren Termen besteht.');
    }
};

Blockly.Blocks['prolog_query'] = {
    init: function() {
        this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_I.htm");
        this.appendDummyInput("QUERY_DATA")
            .appendField('Abfrage');
        let block = this;
        let checkbox = new Blockly.FieldCheckbox(false, function (newValue) {
            if(PrologParser.workspace.isDragging()) return;
            this.value_ = this.convertValueToBool_(newValue);
            if (this.textElement_) this.textElement_.style.display = this.value_ ? 'block' : 'none';
            PrologParser.changeActiveQuery(block, this.value_);
        });
        this.appendDummyInput().appendField("| Aktiv: ")
            .appendField(checkbox, 'QUERY_ACTIVE');
        this.appendStatementInput('INPUT');
        this.setColour(240);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ['MainEditor']);
        this.setNextStatement(true, ['MainEditor']);
        this.setTooltip('Ein einfaches Faktum, welches aus einer Relation und einem oder mehreren Termen besteht.');
        this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=319');
    },
    onchange: function (e) {
        //Make this block editable if its placed in the main workspace.
        if(e.type === 'move') {
            if(this.workspace.id === PrologParser.workspace.id) {
                if(!this.isEditable()) this.setEditable(true);
            }
        }
    }
};


Blockly.Blocks['prolog_cut_fail'] = {
    init: function () {
        this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/cut.htm");
        this.setColour('#48887a');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Operator: ')
            .appendField(new Blockly.FieldDropdown([
                ["Cut", "CUT"],
                ["Fail", "FAIL"]
            ]), 'OPERATOR');
    },
    onchange: function(e) {
        if(e.type === 'move') {
            if(this.workspace.id !== PrologParser.workspace.id) {
                return;
            }
            if (!PrologParser.workspace.isDragging || PrologParser.workspace.isDragging()) {
                return;  // Don't change state at the start of a drag.
            }
            if(this.getSurroundParent() !== null) {
                this.setEnabled(true);
                this.setWarningText(null);
            } else {
                if(this.isCollapsed()) return;
                this.setEnabled(false);
                this.setWarningText(PrologParser.ERRORS['CUT_FAIL_ERROR']);
            }
        }
    }
};

Blockly.Blocks['info_block_input'] = {
    init: function () {
        this.setEnabled(true);
        this.setColour('#8e904d');
        this.setOutput(true, null);
        this.appendDummyInput('DUMMY_INPUT').appendField(new PrologParser.InfoTextField(''), 'TEXT');
    }
};

Blockly.Blocks['info_block_statement'] = {
    init: function () {
        this.setEnabled(true);
        this.setColour('#8e904d');
        this.setPreviousStatement(true);
        this.setNextStatement(false);
        this.appendDummyInput('DUMMY_INPUT').appendField(new PrologParser.InfoTextField(''), 'TEXT');
    }
};