goog.provide('PrologParser.MenuController');
goog.require('PrologParser');

PrologParser.MenuController = function () {
    this.init();
};

PrologParser.MenuController.prototype.collapsed = true;

PrologParser.MenuController.prototype.more_examples_counter = 0;

PrologParser.MenuController.prototype.init = function () {
    let self = this;
    PrologParser.bindClick('menu-button', function () {
        if(self.collapsed) self.openSidebar(); else self.closeSidebar();
    });
    this.initExpandButtons();
    this.initExamples();
    this.initTutorials();
    PrologParser.bindClick('sidebar-blur', function ()  {
        if(!self.collapsed) self.closeSidebar();
    })
};

PrologParser.MenuController.prototype.openSidebar = function () {
    let button = document.getElementById('menu-button');
    button.className = 'expanded-menu-button';
    button.innerText = 'Zurück';
    let sidenav = document.getElementById('sidebar');
    if(sidenav.className === 'sidebar sidebar-collapsed') this.collapsed = false;
    sidenav.className = 'sidebar sidebar-expanded';
    document.getElementById('menu-button').style.marginLeft = "325px";
    let blur = document.getElementById('sidebar-blur');
    blur.style.visibility = 'visible';
    blur.style.opacity = '1';
};

PrologParser.MenuController.prototype.closeSidebar = function () {
    let button = document.getElementById('menu-button');
    button.className = 'collapsed-menu-button';
    button.innerText = 'Menü';
    let sidenav = document.getElementById('sidebar');
    if(sidenav.className !== 'sidebar sidebar-collapsed') this.collapsed = true;
    sidenav.className = 'sidebar sidebar-collapsed';
    document.getElementById('menu-button').style.marginLeft = "5px";
    let blur = document.getElementById('sidebar-blur');
    blur.style.visibility = 'hidden';
    blur.style.opacity = '0';
};

PrologParser.MenuController.prototype.initExpandButtons = function () {
    let expandButtons = document.getElementsByClassName('expand-button');
    let self = this;
    Array.prototype.forEach.call(expandButtons, function(button) {
        PrologParser.bindClick(button, function () {
            let content = button.nextElementSibling;
            if(button.classList.contains('upturned')) {
                button.classList.remove('expand-button');
                button.classList.add('expanded-button-expanded');
                content = button.previousElementSibling;
            }
            let parent = button.parentElement;
            if(content.className.includes('collapsed')) {
                content.className = 'expanded-content';
                parent.className = 'collapsible-menu-expanded';
                if(button.classList.contains('upturned')) {
                    button.classList.remove('expand-button');
                    button.classList.add('expanded-button-expanded');
                    button.innerHTML = 'Weniger anzeigen';
                }
            } else {
                content.className = 'collapsed-content';
                parent.className = 'collapsible-menu-collapsed';
                if(button.classList.contains('upturned')) {
                    button.classList.add('expand-button');
                    button.classList.remove('expanded-button-expanded');
                    expandButtons[0].innerHTML = 'Weitere (' + self.more_examples_counter + ') anzeigen';
                }
            }
        })
    });
};

PrologParser.MenuController.prototype.initExamples = function () {
    let self = this;
    let examples = PrologParser.EXAMPLES;
    let counter = 1;
    let count_max = 4;
    let using_second_container = false;
    for(let example in examples) {
        if(counter > count_max)  using_second_container = true;
        let cname = 'example-list'+((using_second_container) ? '2' : '1');
        let container = document.getElementById(cname);
        let ref = document.createElement('a');
        let node = document.createTextNode(example);
        ref.className ='xmlFile';
        ref.href = '#';
        ref.appendChild(node);
        container.appendChild(ref);
        PrologParser.bindClick(ref, function () {
            let name = ref.innerText;
            let code = PrologParser.EXAMPLES[name];
            PrologParser.discard(function () {
                PrologParser.consoleInfo('Loading example: \''+name+'\'');
                PrologParser.tutorialController.killTutorialMode();
                PrologParser.ioHandler.loadXML(code);
                self.closeSidebar();
            });
        });
        counter++;
    }
    this.more_examples_counter = counter - count_max - 1;
    let expandButtons = document.getElementsByClassName('upturned');
    if(!using_second_container) {
        let expandButtons = document.getElementsByClassName('upturned');
        expandButtons[0].style.display = 'none';
    } else {
        expandButtons[0].innerHTML = 'Weitere (' + this.more_examples_counter + ') anzeigen';
    }
};

PrologParser.MenuController.prototype.initTutorials = function () {
    let self = this;
    let tutorials = PrologParser.TUTORIALS;
    for(let tutorial in tutorials) {
        let container = document.getElementById("tutorial-container-"+tutorials[tutorial].container_id);
        let ref = document.createElement('a');
        let node = document.createTextNode(tutorial);
        ref.className ='xmlFile';
        ref.href = '#';
        ref.appendChild(node);
        container.appendChild(ref);
        PrologParser.bindClick(ref, function () {
            let name = ref.innerText;
            alertify.confirm("Soll das Tutorial '"+name+"' wirklich geladen werden? <br> Es werden alle Blöcke gelöscht!", function() {
                //Success
                PrologParser.tutorialController.loadTutorialByName(name);
            }).set({labels:{ok:'Laden', cancel: 'Abbrechen'}, title:"Tutorial laden?"});
        });
    }
};