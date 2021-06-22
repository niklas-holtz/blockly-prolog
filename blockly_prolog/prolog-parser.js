'use strict';

goog.provide('PrologParser');

let PrologParser = {};

PrologParser.TUTORIAL_MODE = false;
PrologParser.MULTILINE_COMMENTS = true;
PrologParser.START_BLOCKS = false;
PrologParser.ERRORS = {};
PrologParser.ERRORS['RULE_ERROR'] = 'Regeln und Abfragen können nicht innerhalb anderer Blöcke platziert werden.';
PrologParser.ERRORS['CUT_FAIL_ERROR'] = 'Der Cut/Fail-Block darf nur innerhalb von Regeln platziert werden.';
PrologParser.ERRORS['CONNECTOR_ERROR'] = 'Der Konnektor-Block darf nur innerhalb von Regeln und Abfragen platziert werden.';

PrologParser.START_BLOCK_XML_TEXT = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_query\" id=\"g[cd1s_6vA7/#gWnRa4=\" deletable=\"false\" x=\"130\" y=\"790\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"rWyydkU^`5#hnCEa[kY_\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"j=kqx5)MN$]i.5eq5UDb\">\n" +
    "            <field name=\"TEXT\">Fakten, Konstanten, Vergleiche, Konnektoren, Operatoren und Listen ..</field>\n" +
    "          </shadow>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>";

PrologParser.consoleInfo = function (msg) {
    console.log('%c' + msg, 'background: #faf8ed; color: #222');
};

PrologParser.bindClick = function (el, func) {
    if (typeof el === 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};

/**
 * This function freezes all blocks of the workspace.
 */
PrologParser.freezeBlocks = function() {
    let blocks = PrologParser.workspace.getAllBlocks(false);
    for (let i = 0, block; block = blocks[i]; i++) {
        block.setMovable(false);
        block.setEditable(false);
        block.setDeletable(false);
    }
};

PrologParser.changeActiveQuery = function(queryBlock, value) {
    if(value) {
        this.consoleInfo("Changed active query!");
        let blocks = this.workspace.getBlocksByType('prolog_query', true);
        for (let i = 0, block; block = blocks[i]; i++) {
            if(block.id === queryBlock.id) continue;
            block.setFieldValue("FALSE", "QUERY_ACTIVE");
        }
        this.outputController.generateCode();
    }
};

PrologParser.discard = function(callback) {
    let count = PrologParser.workspace.getAllBlocks(false).length;
    function execute() {
        PrologParser.workspace.clear();
        PrologParser.initialzeStartBlock();
        callback();
    }
    if(count < 2) return execute();
    alertify.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count), execute).set({labels:{ok:'Löschen', cancel: 'Abbrechen'}, title:"Workspace leeren?"});
};

PrologParser.init = function() {
    //Init delete button
    PrologParser.bindClick('trashButton', () => PrologParser.discard(function () {
        //success
    }));
    //Initialize Split.js
    PrologParser.initSplitJS();
    //Initialize blockly
    PrologParser.initializeBlockly();
    //Main controller for the website.
    PrologParser.outputController = new PrologParser.OutputController();
    //Dynamic Categories
    PrologParser.termController = new PrologParser.TermController();
    //Import and Export
    PrologParser.ioHandler = new PrologParser.IOHandler();
    //Controller for the menu
    PrologParser.menuController = new PrologParser.MenuController();
    //Initialize listener for undo rule insertion
    PrologParser.initializeRuleListener();
    //Init custom sounds
    PrologParser.workspace.getAudioManager().load(['media/error.mp3'], 'error');
    //Init start blocks
    if(PrologParser.START_BLOCKS) PrologParser.initialzeStartBlock();
    //Init Tutorial Controller
    PrologParser.tutorialController = new PrologParser.TutorialController();
};

PrologParser.initializeRuleListener = function() {
    PrologParser.workspace.addChangeListener(function (event) {
        if(event.type === 'undo') {
            Blockly.mainWorkspace.undo(false);
        }
    });
};

PrologParser.initialzeStartBlock = function() {
    if(!PrologParser.START_BLOCKS) return;
    let xml = Blockly.Xml.textToDom(PrologParser.START_BLOCK_XML_TEXT);
    Blockly.Xml.domToWorkspace(xml, PrologParser.workspace);
};

PrologParser.initializeBlockly = function() {
    //Initialize Blockly.
    PrologParser.toolbox = document.getElementById('toolbox');
    let div = document.getElementById('blocklyDiv');
    PrologParser.workspace = Blockly.inject(div, {
        toolbox: PrologParser.toolbox,
        grid: {
            spacing: 20,
            length: 5,
            colour: '#eaeaea',
            snap: true
        },
        zoom: {
            wheel: true,
            controls: true,
            minScale: 0.6,
            maxScale: 1.2
        },
    move:{
        scrollbars: true,
            drag: true,
            wheel: false},

        collapse: true,
        trashcan: true
    });
    //Initialize the resizing of blockly
    window.addEventListener('resize', PrologParser.resizeWorkspace, false);
    PrologParser.resizeWorkspace();
    Blockly.svgResize(PrologParser.workspace);
    PrologParser.consoleInfo("Blockly initialized.");
};

PrologParser.resizeWorkspace = function() {
    let blocklyDiv = document.getElementById('blocklyDiv');
    let element = document.getElementById('layout-left');
    let x = element.offsetLeft;
    let y = element.offsetTop;
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = element.offsetWidth + 'px';
    blocklyDiv.style.height = element.offsetHeight + 'px';
    Blockly.svgResize(PrologParser.workspace);
};

PrologParser.initSplitJS = function() {
    Split(['#layout-left', '#layout-right'], {
        sizes: [60, 40],
        gutterSize: 5,
        onDrag: function () {
            //To resize the blockly workspace if the user drags the gutter
            PrologParser.resizeWorkspace();
        }
    });
    Split(['#tableRight', '#console-input', '#console-output'], {
        sizes: [55, 10, 30],
        gutterSize: 5,
        direction: 'vertical',
        gutter: function (i, gutterDirection) {
            //Custom Gutter (Eingabe)
            let gut = document.createElement('div');
            gut.id = (i === 1) ? 'input-tag' : 'output-tag';
            gut.innerText = (i === 1) ? 'Abfrage' : 'Ausgabe';
            gut.className = `gutter gutter-${gutterDirection}`;
            return gut
        },
        onDragStart: function () {
            let table = document.getElementById('tableRight');
            console.log(table.style.height);
        }
    });
    PrologParser.consoleInfo("Split.JS initialized.");
};

window.addEventListener('load', PrologParser.init);