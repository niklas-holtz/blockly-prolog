'use strict';

goog.provide('PrologParser.DynamicFieldTextInput');
goog.require('Blockly.FieldTextInput');

PrologParser.DynamicFieldTextInput = function(opt_value, type, block) {
    opt_value = this.doClassValidation_(opt_value);
    this.block = block;
    if(type === null || type === undefined) {
        this.type = 'Constant';
    } else {
        this.type = type;
    }
    if (opt_value === null) {
        opt_value = this.DEFAULT_VALUE;
    }
    this.addDisposeListener_(block);
    this.spellcheck_ = false;
    PrologParser.DynamicFieldTextInput.superClass_.constructor.call(this, opt_value, null);
};
goog.inherits(PrologParser.DynamicFieldTextInput, Blockly.FieldTextInput);

PrologParser.DynamicFieldTextInput.prototype.DEFAULT_VALUE = 'name';

PrologParser.DynamicFieldTextInput.prototype.validInput_ = false;

PrologParser.DynamicFieldTextInput.prototype.prevValue_ = '';

PrologParser.DynamicFieldTextInput.prototype.ERROR_MSG = [
    ['FIRST_CAPITAL_LETTER_ERROR', 'Der erste Buchstaben muss immer ein Kleinbuchstabe sein.'],
    ['MIXED_CONTENT_ERROR', 'Konstanten können nur Buchstaben (und Unterstriche) oder Zahlen enthalten. Konstanten können jedoch auch aus allen Sonderzeichen bestehen, solange sie nur diese enthalten. Sind Konstanten in Hochkommata eingeschlossen, können sie jedes Zeichen enthalten.'],
    ['WRONG_UNDERSCORE_ERROR', 'Unstriche dürfen nicht am Anfang der Konstante platziert werden.'],
    ['WHITE_SPACE_ERROR', 'Konstanten und Variablen dürfen keine Leerzeilen enthalten.'],
    ['WRONG_VARIABLE_BEGIN_ERROR', 'Variablen müssen mit einem Unterstrich oder einem Großbuchstaben beginnen.'],
    ['MISSING_APOSTROPHE', 'Konstanten, die mit einem Hochkomma beginnen, müssen auch mit einem enden. Sie dürfen außerdem innerhalb der Kommata alle Zeichen enthalten.'],
    ['SPECIAL_CHARACTERS_IN_VARIABLE_ERROR', 'Variablen dürfen keine Sonderzeichen außer einem Unterstrich enthalten.']

];

/**
 * Diese Methode erweitert die Dispose-Methode eines blocks. Dadurch wird ggf. eine Variable gelöscht.
 * @param {BlockSvg} block der block, dessen Methode erweitert wird.
 * @private
 */
PrologParser.DynamicFieldTextInput.prototype.addDisposeListener_ = function(block) {
    let self = this;
    block.dispose = function (healStack, animate) {
        if(self.validInput) {
            //Entferne die Konstante/Variable aus dem Speicher.
            if(self.type.toUpperCase() === 'CONSTANT') PrologParser.termController.removeConstant(self.text_);
            else if(self.type.toUpperCase() === 'VARIABLE') PrologParser.termController.removeVariable(self.text_);
        }
        Blockly.BlockSvg.prototype.dispose.call(block, healStack, animate);
    };
};

/**
 * Diese Methode validiert die aktuelle Eingabe des Users. Falls es sich um eine ungültige Eingabe
 * (gemäß der Syntax für Konstanten und Variablen) handelt, wird ein (oder mehrere) Ausrufungszeichen
 * neben dem Eingabefeld erzeugt, welches den User auf einen (oder mehrere) Fehler hinweisen soll.
 * @param newValue der aktuelle Wert des InputFields.
 * @returns {string} gibt den Wert zurück, der validiert wurde.
 * @private
 */
PrologParser.DynamicFieldTextInput.prototype.doClassValidation_ = function(newValue) {
    if(newValue === null || newValue === undefined) return null;
    if(newValue === this.DEFAULT_VALUE) return newValue;
    /* Validierung */
    if(this.type !== null && this.type !== undefined && (this.type === 'Constant' || this.type === 'Variable')) {
        //Call the valid function by name
        let errors = PrologParser.DynamicFieldTextInput.prototype['checkForValid'+this.type](newValue);
        let self = this;
        //Lösche zunächst alle Errors, die behoben worden sind.
        this.ERROR_MSG.forEach(function (error) {
            if(!errors.includes(error[0])) {
                let field = self.block.getField(error[0]);
                //Lösche das Feld, welches nicht mehr benötigt wird (da Error behoben).
                if(field !== null) {self.block.getInput('DUMMY_INPUT').removeField(error[0]); }
            }
        });
        //Mindestens ein Fehler!
        if(errors.length > 0) {
            //Erstelle für jeden neuen Error eine eigene Mitteilung
            errors.forEach(function(error) {
                let field = self.block.getField(error);
                if(field === null) {
                    let msg = self.ERROR_MSG.find(function (elem) { return elem[0] === error;});
                    let errorImg = new Blockly.FieldImage('media/warning.png', 16, 16);
                    errorImg.setTooltip(msg[1]);
                    self.block.getInput('DUMMY_INPUT').appendField(errorImg, error);
                }
            });
        }
        this.validInput_ = (errors.length <= 0);
    }
    return newValue;
};

PrologParser.DynamicFieldTextInput.prototype.saveTermIfValid = function() {
    //Speichere Variable, wenn valide.
    if(this.validInput_) {
        if(this.type.toUpperCase() === 'CONSTANT') {
            if(this.prevValue_ !== '') PrologParser.termController.removeConstant(this.prevValue_);
            PrologParser.termController.addConstant(this.text_);
            this.prevValue_ = this.text_;
        } else if (this.type.toUpperCase() === 'VARIABLE') {
            if(this.prevValue_ !== '') PrologParser.termController.removeVariable(this.prevValue_);
            PrologParser.termController.addVariable(this.text_);
            this.prevValue_ = this.text_;
        }
    }
};

PrologParser.DynamicFieldTextInput.prototype.checkForValidConstant = function (text) {
    /* Konstanten können entweder Nummern sein oder Werte sein, die mit einem kleinen
     * Buchstaben beginnen. Zudem kann ein _ enthalten sein, darf aber nicht am Anfang sein.
     */
    let errors = [];
    //Falls es sich um eine gültige Nummer handelt, gebe leere Error-Liste zurück.
    if(!isNaN(text)) return errors;

    //Falls der Text in Hochkommata eingeschlossen ist, ist er valide, egal was er noch für Zeichen enthält.

    if(text.charAt(0) === "'") {
        if(text.slice(-1) === "'" && text.length > 1) {
            return errors;
        } else {
            errors.push('MISSING_APOSTROPHE');
        }
    }

    function checkForValidCharacters(s) {
        let onlyCharacters = true;
        let onlySpecialCharacters = true;
        for (let i = s.length - 1; i >= 0; i--) {
            const d = s.charCodeAt(i);
            if(d < 65 || (d > 90 && d < 97) || d > 122) {
                // Falls der aktuelle Char KEIN Buchstabe ist ...
                if (d !== 95) {
                    // Ausnahme: Falls es sich nicht um einen Underscore handelt -> Fehler.
                    onlyCharacters = false;
                }
                if(d >= 48 && d <= 57) {
                    //Falls der aktuelle Char eine Zahl ist.
                    onlySpecialCharacters = false;
                }
            } else {
                //Der String entählt mindestens einen Buchstaben.
                onlySpecialCharacters = false;
            }
            if(!onlyCharacters && !onlySpecialCharacters) break;
        }
        return onlyCharacters || onlySpecialCharacters;
    }
    //Überprüfen ob Leerzeilen enthalten sind.
    if(text.includes(' ')) errors.push('WHITE_SPACE_ERROR');
    //Überprüfen ob nur Buchstaben enthalten sind.
    if(!checkForValidCharacters(text))  errors.push('MIXED_CONTENT_ERROR');
    //Überprüfen, ob das erste Zeichen _ ist.
    if(text.charCodeAt(0) === 95) errors.push('WRONG_UNDERSCORE_ERROR');
    //Überprüfen ob der erste Buchstabe groß ist.
    if(text.charAt(0) ===  text.charAt(0).toUpperCase() && text.charAt(0).match(/[A-Z|a-z]/i)) errors.push('FIRST_CAPITAL_LETTER_ERROR');

    return errors;
};

PrologParser.DynamicFieldTextInput.prototype.checkForValidVariable = function (text) {
    /* Variablen können gemischt sein, müssen aber mit einem Unterstrich oder einem
     * Großbuchstaben anfangen. Sie dürfen keine Sonderzeichen außer einem Unterstrich enthalten.
     */
    let errors = [];
    if(text.length <= 0) return errors;
    //Überprüfen ob Leerzeilen enthalten sind.
    if(text.includes(' ')) errors.push('WHITE_SPACE_ERROR');
    //Überprüfe ob der erste Buchstaben _ oder Großbuchstabe ist.
    if(text.charCodeAt(0) !== 95 && !(text.charAt(0) ===  text.charAt(0).toUpperCase() && text.charAt(0).match(/[A-Z|a-z]/i))) errors.push('WRONG_VARIABLE_BEGIN_ERROR');

    function checkForSpecialCharacters(s) {
        for (let i = s.length - 1; i >= 0; i--) {
            const d = s.charCodeAt(i);
            if(d < 65 || (d > 90 && d < 97) || d > 122) {
                // Falls der aktuelle Char KEIN Buchstabe ist ...
                if(d === 95) continue; // Ausnahme für Unterstriche
                if(!(d >= 48 && d <= 57)) {
                    // Und der Char auch keine Zahl ist ..
                    return false;
                }
            }
        }
        return true;
    }

    if(!checkForSpecialCharacters(text)) errors.push('SPECIAL_CHARACTERS_IN_VARIABLE_ERROR');

    return errors;
};

/**
 * Diese Methode überschreibt die Methode von FieldTextInput, um ein Dropdown-Menü zu erzeugen,
 * welches alle bekannten Variablen/Konstanten vorschlägt.
 * @return {!HTMLInputElement} Das InputField, welches erzeugt wurde.
 * @private
 */
PrologParser.DynamicFieldTextInput.prototype.widgetCreate_ = function() {
    let inputField = Blockly.FieldTextInput.prototype.widgetCreate_.call(this);
    //inputField.value = "";
    let div = Blockly.WidgetDiv.DIV;
    inputField.setAttribute('list', 'term_datalist');
    let self = this;
    inputField.addEventListener('blur', function () {
        //Event Listener, falls der User außerhalb des Feldes klickt.
       self.saveTermIfValid();
    });

    //Erstelle Datalist-Objekt und fülle es mit bereits vorhandenen Konstanten/Variablen.
    let datalist = document.createElement('datalist');
    datalist.setAttribute('id',  'term_datalist');
    let options_array = [];
    if(this.type.toUpperCase() === 'CONSTANT') {
        options_array = PrologParser.termController.getConstants();
    } else if(this.type.toUpperCase() === 'VARIABLE') {
        options_array = PrologParser.termController.getVariables();
    }
    options_array.forEach(function(term) {
        let option = document.createElement('option');
        option.setAttribute('value', term);
        datalist.appendChild(option);
    });
    div.appendChild(datalist);
    return inputField;
};

PrologParser.DynamicFieldTextInput.prototype.isValid = function () {
    return this.validInput_;
};