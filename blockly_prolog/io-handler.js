goog.provide('PrologParser.IOHandler');
goog.require('PrologParser');

PrologParser.IOHandler = function () {
    this.init();
};

PrologParser.IOHandler.prototype.DEFAULT_NAME = 'blockly-prolog';

PrologParser.IOHandler.prototype.init = function () {
    PrologParser.bindClick('save-button', () => this.saveFile());
    PrologParser.bindClick('load-button', () => this.loadFile());
    document.getElementById('file-input').onchange = event => this.provideUpload_(event);
};

PrologParser.IOHandler.prototype.loadFile = function () {
    PrologParser.consoleInfo('Loading XML .. ');
    document.getElementById('file-input').click();
};

PrologParser.IOHandler.prototype.provideUpload_ = function (evt) {
    let file = evt.target.files[0];
    if(file === null || file === undefined) return;
    if (!file.type.match('text/xml')) {
        //Error
        alert('Fehler!\nEs sind nur XML-Datein zum Upload zugelassen.');
        return;
    }
    let self = this;
    let reader = new FileReader();
    reader.onload = (function() {
        return function(e) {
            let txt = e.target.result;
            self.loadXML(txt);}
        ;}
        )(file);
    //Lade den Titel des Dokuments in das NameField (abzüglich der .xml-Endung)
    let nameField = document.getElementById('program-name');
    nameField.value = file.name.substring(0, file.name.length-4);
    reader.readAsText(file);
};

PrologParser.IOHandler.prototype.loadXML = function (txt) {
  //  PrologParser.termController.setSmartBlockValues(false); // Um zu verhindern, dass die Namen dynamischs angepasst werden.
    let xml = Blockly.Xml.textToDom(txt);
    PrologParser.workspace.clear();
    PrologParser.tutorialController.killTutorialMode();
    Blockly.Xml.domToWorkspace(xml, PrologParser.workspace);
    //Lade Konstanten und Variablen aus dem neuen Workspace.
    PrologParser.termController.generateFromWorkspace();
};

PrologParser.IOHandler.prototype.saveFile = function () {
    PrologParser.consoleInfo('Saving XML .. ');
    let name = document.getElementById('program-name').value;
    if(name === '') name = this.DEFAULT_NAME;
    let xml = Blockly.Xml.workspaceToDom(PrologParser.workspace);
    let xmlText = Blockly.Xml.domToPrettyText(xml);
    this.provideDownload_(name+'.xml', xmlText);
};

PrologParser.IOHandler.prototype.provideDownload_ = function (filename, content) {
    let download = document.createElement('a');
    download.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    download.setAttribute('download', filename);

    if (document.createEvent) {
        let event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        download.dispatchEvent(event);
    } else {
        download.click();
    }
};