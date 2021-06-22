/**
 * Hier sind einige Mechaniken, die verhindern sollen, dass beispielsweise Regeln ineinander verschachtelt werden können.
 * Versucht der Nutzer dies trotzdem, wird ein UNDO ausgeführt und eine entsprechende Nachricht ausgegeben.
 */

function checkForNestedRules(block) {
    if(block == null || block === undefined) return false; //If there is no block found there is nothing to do.
    let type = block.type;
    let error_msg = PrologParser.ERRORS['RULE_ERROR'];
    let blockedNestingTypes =  ['prolog_rule', 'prolog_query'];
    if(blockedNestingTypes.indexOf(type) > -1) {
        //Falls man eine Regel an innerhalb eines Blocks erstellen möchte.
        if(block.getSurroundParent() != null) {
            PrologParser.outputController.addErrorOutput(error_msg);
            console.warn('Attempted to nest a rule or query. Undoing last action.');
            return true;
        }
    } else {
        //Falls man einen anderne Block bewegen möchte und der eine Regel als Next (irgendwo) hat.
        if(block.getSurroundParent() != null) {
            let next = block.getNextBlock();
            let foundNestedBlocking = false;
            while (next != null) {
                if(blockedNestingTypes.indexOf(next.type) > -1) {
                    foundNestedBlocking = true;
                }
                next = next.getNextBlock();
            }
            if (foundNestedBlocking) {
                PrologParser.outputController.addErrorOutput(error_msg);
                console.warn('Attempted to nest a block with an attached rule or query. Undoing last action.');
                return true;
            }
        }
    }
    return false;
}

function getMainParent(block) {
    let sBlock = block;
    while(sBlock.getSurroundParent() !== null) {
        sBlock = sBlock.getSurroundParent();
    }
    return sBlock;
}

function checkForValidCutFail(block) {
    if(block == null || block === undefined) return false;
    if(block.type !== 'prolog_cut_fail') return false;
    let sBlock = getMainParent(block);
    if(sBlock === this || sBlock === null || sBlock.type !== 'prolog_rule') {
        PrologParser.outputController.addErrorOutput(PrologParser.ERRORS['CUT_FAIL_ERROR']);
        console.warn('Attempted to nest cut/fail block.');
        return true;
    }
    return false;
}

function checkForValidConnector(block) {
    if(block == null || block === undefined) return false;
    if(block.type !== 'prolog_log_operation') return false;
    let sBlock = getMainParent(block);
    if(sBlock === this || sBlock === null || (sBlock.type !== 'prolog_rule' && sBlock.type !== 'prolog_query')) {
        PrologParser.outputController.addErrorOutput(PrologParser.ERRORS['CONNECTOR_ERROR']);
        console.warn('Attempted to nest connector block.');
        return true;
    }
    return false;
}

function undoLastAction(block) {
    block.workspace.getAudioManager().play('error');
    //Fire an undo event to remove the rule as its not on a valid spot.
    let event = new Blockly.Events.Undo(block);
    Blockly.Events.fire(event);
}

/**
 * Play some UI effects (sound, ripple) after a connection has been established.
 * @param {!Blockly.BlockSvg} block The block being connected.
 * @package
 */
Blockly.blockAnimations.connectionUiEffect = function(block) {
    let workspace = block.workspace;
    let scale = workspace.scale;
    // Determine the absolute coordinates of the inferior block.
    let xy = workspace.getSvgXY(block.getSvgRoot());
    // Offset the coordinates based on the two connection types, fix scale.
    if (block.outputConnection) {
        xy.x += (block.RTL ? 3 : -3) * scale;
        xy.y += 13 * scale;
    } else if (block.previousConnection) {
        xy.x += (block.RTL ? -23 : 23) * scale;
        xy.y += 3 * scale;
    }

    if (scale < 1) {
        return;  // Too small to care about visual effects.
    }
    if(checkForNestedRules(block) || checkForValidCutFail(block) || checkForValidConnector(block)) {
        //Animation
        let ripple = Blockly.utils.dom.createSvgElement('circle',
            {
                'cx': xy.x,
                'cy': xy.y,
                'r': 15,
                'fill': '#c23a2d',
                'stroke': '#888',
                'stroke-width': 10
            },
            workspace.getParentSvg());
        // Start the animation.
        Blockly.blockAnimations.connectionUiStep_(ripple, new Date, scale*2);
        undoLastAction(block);
        return;
    }

    workspace.getAudioManager().play('click');
    let ripple = Blockly.utils.dom.createSvgElement('circle',
        {
            'cx': xy.x,
            'cy': xy.y,
            'r': 0,
            'fill': 'none',
            'stroke': '#888',
            'stroke-width': 10
        },
        workspace.getParentSvg());
    Blockly.blockAnimations.connectionUiStep_(ripple, new Date, scale);
};

Blockly.Events.Undo = function(block) {
    if (!block) {
        return;
    }
    Blockly.Events.Undo.superClass_.constructor.call(this, block);
    this.type = "undo";
};
goog.inherits(Blockly.Events.Undo, Blockly.Events.BlockBase);