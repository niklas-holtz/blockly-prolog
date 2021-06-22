'use strict';

goog.provide('PrologParser.TutorialController');
goog.require('PrologParser');

PrologParser.TutorialController = function () {
    this.init();
};

PrologParser.TutorialController.prototype.hints = [];

PrologParser.TutorialController.prototype.query = "";

PrologParser.TutorialController.prototype.tutorialID = 0;

PrologParser.TutorialController.prototype.currentHint = 0;

PrologParser.TutorialController.prototype.init = function () {
    this.endTutorialButton = document.getElementById('endTutorialButton');
    this.nextTutorialButton = document.getElementById('nextTutorialButton');
    this.tutorialBox = document.getElementById('tutorial-window');
    this.tutorialText =  document.getElementById('tutorial-text');
    this.nextButton = document.getElementById('nextHint');
    this.prevButton = document.getElementById('prevHint');
    PrologParser.bindClick('nextHint', () => this.nextHint());
    PrologParser.bindClick('prevHint', () => this.previousHint());
    PrologParser.bindClick('endTutorialButton', () => this.stopTutorialMode());
    PrologParser.bindClick('nextTutorialButton', () => this.loadNextTutorial());
    if(PrologParser.TUTORIAL_MODE) this.activateTutorialMode();
};

PrologParser.TutorialController.prototype.stopTutorialMode = function () {
    let self = this;
    alertify.confirm("Tutorial wirklich beenden? <br> Es werden alle Blöcke gelöscht!", function () {
        //succes
        self.killTutorialMode(self);
    }).set({labels:{ok:'Beenden', cancel: 'Abbrechen'}, title:"Tutorial beenden?"});
};

PrologParser.TutorialController.prototype.killTutorialMode = function (self) {
    if(self === undefined) self = this;
    PrologParser.TUTORIAL_MODE = false;
    self.nextTutorialButton.style.display = 'none';
    self.endTutorialButton.style.display = 'none';
    self.tutorialBox.style.display = 'none';
    PrologParser.workspace.clear();
    PrologParser.initialzeStartBlock();
};

PrologParser.TutorialController.prototype.activateTutorialMode = function () {
    PrologParser.TUTORIAL_MODE = true;
    this.nextTutorialButton.style.display = 'inherit';
    this.endTutorialButton.style.display = 'inherit';
    this.nextTutorialButton.disabled = true;
    this.tutorialBox.style.display = 'flex';
    this.tutorialText.innerText = this.hints[this.currentHint];
    this.prevButton.disabled = true;
    this.nextButton.disabled = false;
};

PrologParser.TutorialController.prototype.nextHint = function () {
    console.log('Showing next hint.');
    if(this.currentHint+1 === this.hints.length) {
        //last hint
        this.nextButton.disabled = true;
        return;
    }
    this.currentHint++;
    this.tutorialText.innerHTML = this.hints[this.currentHint];
    if(this.currentHint === this.hints.length-1) this.nextButton.disabled = true;
    if(this.prevButton.disabled) this.prevButton.disabled = false;
};

PrologParser.TutorialController.prototype.previousHint = function () {
    console.log('Showing previous hint.');
    if(this.currentHint === 0) {
        this.prevButton.disabled = true;
        return;
    }
    this.currentHint--;
    this.tutorialText.innerHTML = this.hints[this.currentHint];
    if(this.currentHint === 0) this.prevButton.disabled = true;
    if(this.nextButton.disabled) this.nextButton.disabled = false;
};


PrologParser.TutorialController.prototype.appendTutorial = function (id, hints, expected_query) {
    this.currentHint = 0;
    this.tutorialID = id;
    hints.push("Erreiche folgende Ausgabe, um dieses Tutorial abzuschließen:<br><span class='expected_query'>"+expected_query+"</span>");
    this.hints = hints;
    this.query = expected_query;
};

PrologParser.TutorialController.prototype.checkForNextTutorial = function () {
    if(!PrologParser.TUTORIAL_MODE) return;
    let line = PrologParser.outputController.getLastOutput();
    if(line === this.query) {
        //Success!
        this.nextTutorialButton.disabled = false;
        console.log("Tutorial done!");
        alertify.alert("Tutorial geschafft!", "Du hast die richtige Ausgabe erzeugt und damit das Tutorial abgeschlossen. <br> Durch das Klicken auf den 'Nächstes Tutorial'-Button kannst du das nächste Tutorial laden.", function () {
            //succes
        });
    }
};

PrologParser.TutorialController.prototype.loadNextTutorial = function () {
    console.log('Loading next Tutorial ...');
    let nextTutorial = this.getTutorialById(this.tutorialID+1);
    let self = this;
    if(nextTutorial ===  null || nextTutorial === undefined) {
        alertify.confirm("Du hast alle Tutorial durchlaufen!", function () {
        }).set({labels:{ok:'Ok', cancel: 'Abbrechen'}, title:"Alle Tutorials beendet"});
        return;
    }
    alertify.confirm("Das nächste Tutorial hat den Titel '"+nextTutorial+"'. <br> Soll es wirklich geladen werden? Alle Blöcke werden gelöscht!", function() {
        //Success
        self.loadTutorialByName(nextTutorial);
    }).set({labels:{ok:'Laden', cancel: 'Abbrechen'}, title:"Tutorial laden?"});
};

PrologParser.TutorialController.prototype.loadTutorialByName = function (name, conf_window) {
    let tutorial = PrologParser.TUTORIALS[name];
    let code = tutorial.xml;
    PrologParser.workspace.clear();
    PrologParser.consoleInfo('Loading tutorial: \''+name+'\'');
    PrologParser.ioHandler.loadXML(code);
    PrologParser.menuController.closeSidebar();
    PrologParser.tutorialController.appendTutorial(tutorial.id, tutorial.hints, tutorial.expected_query);
    PrologParser.tutorialController.activateTutorialMode();
    PrologParser.freezeBlocks();
};

PrologParser.TutorialController.prototype.getTutorialById = function (id) {
    let tutorials = PrologParser.TUTORIALS;
    for(let tutorial in tutorials) {
        if(tutorials[tutorial].id === id) return tutorial;
    }
    return null;
};