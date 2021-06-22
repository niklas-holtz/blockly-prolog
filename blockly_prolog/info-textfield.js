'use strict';

goog.provide('PrologParser.InfoTextField');
goog.require('Blockly.FieldLabel');

PrologParser.InfoTextField = function(value, opt_color) {
    if(opt_color === undefined) this.opt_color = this.DEFAULT_COLOR;
    else this.opt_color = opt_color;
    this.size_ = new goog.math.Size(0, Blockly.BlockSvg.MIN_BLOCK_Y);
    this.setValue(value);
    this.maxDisplayLength = 25;
    this.SERIALIZABLE = true;

    PrologParser.InfoTextField.superClass_.constructor.call(this, value, null);
};
goog.inherits(PrologParser.InfoTextField, Blockly.FieldLabel);

PrologParser.InfoTextField.prototype.DEFAULT_COLOR = '#4a4a4a';

PrologParser.InfoTextField.prototype.doClassValidation_ = function (text) {
    if(text === null || text === undefined) return null;
    return text;
};

PrologParser.InfoTextField.prototype.getDisplayText_ = function() {
    let text = this.text_;
    return text;
};

PrologParser.InfoTextField.prototype.createTextElement_ = function() {
    let styleString = 'font: italic 13px Arial, sans-serif; fill: '+this.opt_color+';';
    this.textElement_ = Blockly.utils.dom.createSvgElement('text',
        {
            'style': styleString,
            'y': this.size_.height - 12.5
        }, this.fieldGroup_);
    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
};
