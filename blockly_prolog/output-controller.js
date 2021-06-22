'use strict';

goog.provide('PrologParser.OutputController');
goog.require('PrologParser');

PrologParser.OutputController = function () {
    this.init();
};

PrologParser.OutputController.prototype.TABS_ = ['Prolog', 'XML', 'DerivationTree'];

PrologParser.OutputController.prototype.selected_ = 'Prolog';

PrologParser.OutputController.prototype.code_ = '';

PrologParser.OutputController.prototype.query = '';

PrologParser.OutputController.prototype.lastOutput = '';

PrologParser.OutputController.prototype.addText = function(text, tab) {
  let array = text.split(/\r?\n/);
  let self = this;
  if(tab === 'Prolog') this.code = '';
  array.forEach(function(line) {
      if(tab === 'Prolog') {
          //Fange alle Abfragen ab und schreibe sie in das Input-Feld
          if(line.startsWith('?-')) {
              self.clearText('Input');
              self.addInput(line.substring(3));
              return;
          } else {
              self.code += line;
          }
      }
      self.addLine(line, tab)
  });
};

PrologParser.OutputController.prototype.clearText = function(tab) {
    let target = document.getElementById('content_'+tab);
    target.innerHTML = '';
};

PrologParser.OutputController.prototype.addLine = function(line, tab) {
    if(tab == null) tab = this.selected_;
    let codetag = document.createElement('code');
    let target = document.getElementById('content_'+tab);
    let time_prefix = '';
    if(tab === 'Output') {
        let date = new Date();
        time_prefix = date.toLocaleTimeString() + ': ';
    }
    codetag.innerText = time_prefix + line;
    codetag.className = (tab === 'Output' || tab === 'Input') ? 'prolog' : tab.toLowerCase();
    target.appendChild(codetag);
    hljs.highlightBlock(codetag);
};

PrologParser.OutputController.prototype.addOutput = function(line) {
    this.addText(line, 'Output');
    this.lastOutput = line;
    //Scroll to bottom of the container
    let container = document.getElementById('console-output');
    container.scrollTop = container.scrollHeight;
    PrologParser.tutorialController.checkForNextTutorial();
};

PrologParser.OutputController.prototype.addErrorOutput = function(line) {
    let tab = 'Output';
    let codetag = document.createElement('code');
    let target = document.getElementById('content_'+tab);
    codetag.innerText = line + "\n";
    codetag.className = 'error-code';
    target.appendChild(codetag);
};

PrologParser.OutputController.prototype.displayQueryInOutputConsole = function() {
    let target = document.getElementById('content_Output');
    let span = document.createElement('span');
    span.innerText = '?- '+this.query;
    span.className = 'prolog query-tag';
    target.appendChild(span);
    hljs.highlightBlock(span);
};

PrologParser.OutputController.prototype.addInput = function(line) {
    this.addText(line, 'Input');
    this.query = line;
};

PrologParser.OutputController.prototype.openTab = function(tabName) {
    //Deselect all tabs and hide their panes.
    for(let i = 0; i < this.TABS_.length; i++) {
        let tabName = this.TABS_[i];
        document.getElementById('tab_'+tabName).className = 'taboff';
        document.getElementById('content_' + tabName).className = 'contentoff';
    }
    //Select the clicked tab.
    this.selected_ = tabName;
    document.getElementById('tab_'+tabName).className = 'tabon';
    document.getElementById('content_'+tabName).className = 'contenton source-code';
};

PrologParser.OutputController.prototype.getLastOutput = function () {
    return this.lastOutput;
};

PrologParser.OutputController.prototype.generateCode = function (event, self) {
    if(self === undefined) self = this;
    /* Display the generated Prolog-Code. */
    if(event !== undefined && event.type !== Blockly.Events.UI)
        if(event.type !== Blockly.Events.MOVE && event.type !== Blockly.Events.DELETE && event.type !== Blockly.Events.CHANGE) return;
    self.clearText('Input');
    let code = Blockly.PROLOG.workspaceToCode(PrologParser.workspace);
    self.clearText('Prolog');
    self.addText(code, 'Prolog');
    /* Display the generated XML-Code. */
    self.clearText('XML');
    let xml = Blockly.Xml.workspaceToDom(PrologParser.workspace);
    let prettyText = Blockly.Xml.domToPrettyText(xml);
    self.addText(prettyText, 'XML');
};

PrologParser.OutputController.prototype.executeCode = function (self) {
    PrologParser.consoleInfo('Executing code ..');
    let script = document.getElementById('prolog-code.pl');
    //Filter comments
    self.code = self.code.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, '');
    script.innerText = self.code;
    //Draw the derivation tree
    let session = pl.create();
    session.consult('prolog-code.pl');
    session.query( self.query);
    session.draw( 10, "tree_canvas");
    //Output the answer to the console
    session = pl.create();
    session.consult('prolog-code.pl');
    session.query( self.query);
    self.displayQueryInOutputConsole();
    let stop = false;
    let first_tag = true;
    while(!stop) {
        let callback = function(answer) {
            let txt = pl.format_answer(answer);
            if(txt === 'false.' || txt === null) stop = true;
            if(stop && first_tag || !stop) self.addOutput(txt);
        };
        session.answer(callback);
        if(first_tag) first_tag = false;
    }
};

PrologParser.OutputController.prototype.init = function () {
    //Bind each tab button to the open tab function.
    let self = this;
    for (let i = 0; i < this.TABS_.length; i++) {
        let name = this.TABS_[i];
        PrologParser.bindClick('tab_' + name, function(name_) {return function() {self.openTab(name_);};}(name));
    }

    //Initialize Highlight.js
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });

    // Realtime Generation
    PrologParser.workspace.addChangeListener((event) => this.generateCode(event, this));

    // Execute Code
    PrologParser.bindClick('runButton', () => this.executeCode(self));
    PrologParser.bindClick('query-mark', () => this.executeCode(self));
};