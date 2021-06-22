'use strict';

goog.provide('PrologParser.TermController');

PrologParser.TermController = function () {
    this.constants_ = [];
    this.variables_ = ['_'];
    let self = this;
    PrologParser.workspace.addChangeListener(function (event) {
        if(event.type === 'delete') {
            self.constants_ = [];
            self.variables_ = ['_'];
            self.generateFromWorkspace();
        }
    });
};

PrologParser.TermController.prototype.enableSmartBlockValues = true;

PrologParser.TermController.prototype.setSmartBlockValues = function(enabled) {
    this.enableSmartBlockValues = enabled;
    console.log("SET ="+enabled);
};

PrologParser.TermController.prototype.removeFromArray_ = function(array, item) {
    for(let i in array){
        if(array[i] === item){
            array.splice(i,1);
            return true;
        }
    }
    return false;
};

PrologParser.TermController.prototype.setConstantBlock = function(field) {
    if(field === null || !this.enableSmartBlockValues) return;
    if(this.constants_.length > 0) {
        let lastElement = this.constants_[this.constants_.length - 1];
        field.setValue(lastElement);
    }
};

PrologParser.TermController.prototype.setVariableBlock = function(field) {
    if(field === null || !this.enableSmartBlockValues) return;
    if(this.variables_.length > 0) {
        let lastElement = this.variables_[this.variables_.length - 1];
        if(lastElement !== '_') field.setValue(lastElement);
    }
};

PrologParser.TermController.prototype.addConstant = function(name) {
    if(typeof name === 'string') {
        if(!this.hasConstant(name)) this.constants_.push(name);
    }
    console.log('Printing constants');
    console.table(this.constants_);
};

PrologParser.TermController.prototype.addVariable = function (name) {
    if(typeof name === 'string') {
        if(!this.hasVariable(name)) this.variables_.push(name);
    }
    console.log('Printing variables');
    console.table(this.variables_);
};

PrologParser.TermController.prototype.getConstants = function () {
    return this.constants_;
};

PrologParser.TermController.prototype.getVariables = function () {
    return this.variables_;
};

PrologParser.TermController.prototype.removeConstant = function (name) {
    if(typeof name === 'string') this.removeFromArray_(this.constants_,  name);
    console.table(this.constants_);
};

PrologParser.TermController.prototype.removeVariable = function (name) {
    if(typeof name === 'string') {
        if(name === '_') return;
        this.removeFromArray_(this.variables_,  name);
    }
    console.table(this.variables_);
};

PrologParser.TermController.prototype.hasConstant = function (name) {
    return this.constants_.includes(name);
};

PrologParser.TermController.prototype.hasVariable = function (name) {
    return this.variables_.includes(name);
};

/**
 * Diese Funktion lädt alle benutzten Konstanten und Variablen aus dem Workspace in
 * die entsprechenden Arrays, um die Autokorrektur zu ermöglichen.
 */
PrologParser.TermController.prototype.generateFromWorkspace = function () {
    let blocks = PrologParser.workspace.getAllBlocks();
    for(let i = 0, block; block = blocks[i]; i++) {
        let type = block.type;
        let field = null;
        if(type === 'prolog_predicate') {
            field = block.getField('PREDICATE_NAME');
            if(field.isValid()) this.addConstant(field.getValue());
        } else if(type === 'prolog_variable') {
            field = block.getField('VARIABLE_NAME');
            if(field.isValid()) this.addVariable(field.getValue());
        } else if(type  === 'prolog_constant') {
            field = block.getField('CONSTANT_NAME');
            if(field.isValid()) this.addConstant(field.getValue());
        }
    }
};