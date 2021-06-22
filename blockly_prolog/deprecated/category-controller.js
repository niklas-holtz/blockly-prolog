/* UNUSED  */

'use strict';

PrologParser.CategoryController = function () {
    PrologParser.Controller.call(this, 'CategoryController');
    //Array für alle Konstanten (z.B. deutschland, berlin, lebt_in etc.)
    this.constants_ = [];
    //Array für alle Prädikate (z.B. land, hauptstadt, etc.)
    this.predicates_ = [];
    this.init();
};

PrologParser.CategoryController.prototype.init = function () {
    //Init dynamic categories
    let self = this;
    PrologParser.workspace.registerButtonCallback('NEW_CONSTANT_BUTTON', function () {
        return self.newConstantButton(self);
    });
    PrologParser.workspace.registerButtonCallback('NEW_PREDICATE_BUTTON', function () {
        return self.newPredicateButton(self);
    });
    PrologParser.workspace.registerToolboxCategoryCallback('CONSTANTS_CATEGORY', function () {
        return self.constantsCategoryCallback(self);
    });
};

/**
 * Diese Funktion aktualisiert die Toolbox, wenn eine neue Variable/Prädikat hinzugefügt wurde.
 * @param category Der Name der Kategorie, die ausgeklappt sein soll.
 */
PrologParser.CategoryController.prototype.selectCategory = function (category) {
    let categories = document.getElementsByTagName('category');
    //Calle das Kategorie-Array um forEach nutzen zu können.
    categories = Array.prototype.slice.call(categories);
    categories.forEach(function (ctg) {
        let bool = 'false';
        if(ctg.getAttribute('name') === category) bool = 'true';
        ctg.setAttribute('expanded', bool)
    });
    PrologParser.workspace.updateToolbox(PrologParser.toolbox);
};

/* Konstanten und Prädikate */

/**
 * Gibt eine XML-Liste zurück. Wird aufgerufen, sobald man auf die Kategorie 'Konstanten' klickt.
 */
PrologParser.CategoryController.prototype.constantsCategoryCallback = function(self) {
    let xmlList = [];
    /* Konstanten */
    let constantButton = document.createElement('button');
    constantButton.setAttribute('text', 'Neue Konstante');
    constantButton.setAttribute('callbackKey', 'NEW_CONSTANT_BUTTON');
    xmlList.push(constantButton);
    xmlList = xmlList.concat(self.collectBlocks(self.getConstants(), 'prolog_constant'));
    /* Seperator */
    xmlList.push(document.createElement('sep'));
    /* Prädikate */
    let predicateButton = document.createElement('button');
    predicateButton.setAttribute('text', 'Neues Prädikat');
    predicateButton.setAttribute('callbackKey', 'NEW_PREDICATE_BUTTON');
    xmlList.push(predicateButton);
    xmlList = xmlList.concat(self.collectBlocks(self.getPredicates(), 'prolog_predicate'));
    return xmlList;
};

PrologParser.CategoryController.prototype.collectBlocks = function(values, name) {
    let xmlList = [];
    values.forEach(function (obj) {
        let block = Blockly.utils.xml.createElement('block');
        block.setAttribute('type', name);
        xmlList.push(block);
    });
    return xmlList;
};

/**
 * Callback für den Button
 */
PrologParser.CategoryController.prototype.newConstantButton = function(self) {
    let name = '';
    while(name == null || name == ''  || (name[0] == name[0].toUpperCase()) || self.hasConstant(name)) {
        let msg = "Bitte gib einen Namen für die Konstante ein. \nHinweis: Konstanten beginnen immer mit einem Kleinbuchstaben.";
        name = prompt(msg, 'Konstante');
    }
    PrologParser.consoleInfo('New constant "'+name+'"');
    self.addConstant(name);
    self.selectCategory('Konstanten');
};

PrologParser.CategoryController.prototype.newPredicateButton = function(self) {
    let name = '';
    while(name == null || name == ''  || (name[0] == name[0].toUpperCase()) || self.hasPredicate(name)) {
        let msg = "Bitte gib einen Namen für das Prädikat ein. \nHinweis: Prädikate beginnen (genau wie Konstanten) immer mit einem Kleinbuchstaben.";
        name = prompt(msg, 'Prädikat');
    }
    PrologParser.consoleInfo('New predicate "'+name+'"');
    self.addPredicate(name);
    self.selectCategory('Konstanten');
};

PrologParser.CategoryController.prototype.hasConstant = function (name) {
    return this.constants_.includes(name);
};

PrologParser.CategoryController.prototype.addConstant = function (name) {
    this.constants_.push(name);
};

PrologParser.CategoryController.prototype.getConstants = function () {
    return this.constants_;
};

PrologParser.CategoryController.prototype.hasPredicate = function (name) {
    return this.predicates_.includes(name);
};

PrologParser.CategoryController.prototype.addPredicate = function (name) {
    this.predicates_.push(name);
};

PrologParser.CategoryController.prototype.getPredicates = function () {
    return this.predicates_;
};


/* Variablen
PrologParser.CategoryController.prototype.predicateCategoryCallback = function (self) {
    let xmlList = [];
    let button = document.createElement('button');
    button.setAttribute('text', 'Neues Prädikat');
    button.setAttribute('callbackKey', 'NEW_PREDICATE_BUTTON');
    xmlList.push(button);
    xmlList = xmlList.concat(self.collectPredicates());
    return xmlList;
};

PrologParser.CategoryController.prototype.collectPredicates = function () {
    let xmlList = [];
    let variables = this.getPredicates();
    variables.forEach(function (predicate) {
        let block = Blockly.utils.xml.createElement('block');
        block.setAttribute('type', 'prolog_predicate');
        xmlList.push(block);
    });
    return xmlList;
};

PrologParser.CategoryController.prototype.newPredicateButton = function(self) {
    let name = '';
    while(name == null || name == ''  || (name[0] == name[0].toUpperCase()) || self.hasPredicate(name)) {
        let msg = "Bitte gib einen Namen für das Prädikat ein. \nHinweis: Prädikate beginnen immer mit einem Kleinbuchstaben.";
        name = prompt(msg, 'Variable');
    }
    PrologParser.consoleInfo('New predicate "'+name+'"');
    self.addPredicate(name);
    self.selectCategory('Prädikate');
};


PrologParser.CategoryController.prototype.hasPredicate = function (name) {
  return this.predicates_.includes(name);
};

PrologParser.CategoryController.prototype.addPredicate = function (name) {
    this.predicates_.push(name);
};

PrologParser.CategoryController.prototype.getPredicates = function () {
    return this.predicates_;
};
*/
