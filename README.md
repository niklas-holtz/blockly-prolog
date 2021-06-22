# Blockly-Prolog

With this web application, Prolog programmes can be implemented using the graphical programming language "Google Blockly". The aim of this application is to bring the somewhat outdated programming language Prolog closer to younger generations and to teach them how to use it. 

It is possible to display simpler rules of Prolog with the blocks of Google Blockly. More complicated rules are also technically possible, but in practice they make it more difficult to keep track. The latter are therefore not recommended.

![screenshot_grandfather_rule](https://github.com/niklas-holtz/blockly-prolog/blob/main/screenshots/prolog_blockly_grandfather.png?raw=true)

This application uses TauProlog to execute the generated Prolog code. In order to better understand the exact functioning, it is possible to display a derivation tree for the corresponding request.

![screenshot_derivation_tree](https://github.com/niklas-holtz/blockly-prolog/blob/main/screenshots/prolog_blockly_derivation_tree.png?raw=true)

In addition, to make learning Prolog syntax and semantics as easy as possible, a tutorial system was implemented in which the chapters "Facts and Queries", "Rules", "Arithmetic" and "Lists" can be learned in text-based instructions. The aim of each chapter is always to produce a specific output, while constantly introducing the user to the concepts of Prolog. The side menu can also be used to load some examples that use well-known Prolog queries, such as the grandfather rule or the powerset function.

![screenshot_menu](https://github.com/niklas-holtz/blockly-prolog/blob/main/screenshots/prolog_blockly_menu.png?raw=true)

The komlpette editor is currently only available in German.
