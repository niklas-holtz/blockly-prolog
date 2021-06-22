'use strict';
/**
 * Dieser Provider stellt alle relevanten Informationen für die Tutorials zur Verfügung.
 * Ein Tutorial hat dabei ein Array aus Hinweisen, die in der Tutorial-Box angezeigt werden, eine eindeutige ID und einer Container_ID für den richtigen Container.
 * Expected-Query stellt die erwartete Ausgabe als String dar.
 * XML ist der XML-Code, der beim Starten in den Workspace geladen wird.
 */

goog.provide('PrologParser.TUTORIALS');

PrologParser.TUTORIALS = [];

PrologParser.TUTORIALS["Fakten und Konstanten"] = {
    hints: ["Dieses Tutorial soll den Umgang mit Fakten, Konstanten und Abfragen vermitteln. Durch die sog. Fakten können Beziehungen zwischen mehreren Entitäten oder die Eigenschaften einer Entität beschrieben werden.",
        "In diesem Tutorial gibt es bereits die Fakten 'vater(karl)' und 'mutter(anna)'. Die Namen innerhalb der Fakten werden dabei durch die sog. Konstanten repräsentiert. Diese beginnen in Prolog stets mit einem Kleinbuchstaben oder bestehen nur aus Zahlen.",
        "Konstanten können zusätzlich auch einen Unterstrich enthalten, um eine bessere Lesbarkeit zu erreichen. Auch können sie aus allen anderen Sonderzeichen bestehen, dürfen dann aber auch nur eben diese enthalten.",
        "Valide Konstanten sind daher 'karl' und 'anna', jedoch auch die sog. Funktoren der Fakten 'vater' und 'mutter', für die die gleichen Konventionen gelten. Konstanten und Fakten können wie alle Blöcke aus der Toolbox direkt in den Workspace verschoben werden.",
    "Es ist außerdem eine Abfrage gegeben, die es nun zu vervollständigen gilt. Es wird geprüft ob der Fakt 'vater()' gilt. Dieser gilt nur dann, wenn die sog. Argumente des Faktes (innerhalb der Klammern) gültig sind. Hier fehlen diese jedoch noch.",
    "Um nun eine valide Ausgabe zu erhalten, muss eine Konstante 'vater' erzeugt und innerhalb des Faktes der Abfrage platziert werden. Sobald das erledigt wurde, kann das Programm durch einen Klick auf 'Ausführen' ausgeführt werden und die Ausgabe wird im entsprechenden Fenster angezeigt."],   // Hinweise in der Tutorial-Box
    expected_query: "true ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 0,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 0,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"/=t@(OYa7V}@SLMD/7%_\" x=\"110\" y=\"170\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"en*f#T/yDyVTQMr$3U2|\">\n" +
    "        <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"IU`g22$O5SJ+q6T+L?hY\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\"[+4W/?D|Ln-YG0y+[e%s\">\n" +
    "        <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"h9^MAjX5[C3xHlycX5Gh\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"zIwNRXD?iMlw:0b_(;Og\">\n" +
    "            <field name=\"PREDICATE_NAME\">mutter</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"2[OCt^{s`+z@%WYV?DKw\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_constant\" id=\"tO$Fm|1#@)1f^AQPF*z6\">\n" +
    "            <field name=\"CONSTANT_NAME\">anna</field>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_query\" id=\"${f/wZt.lekBLXQV;2k9\">\n" +
    "            <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "            <statement name=\"INPUT\">\n" +
    "              <block type=\"prolog_query_body\" id=\"e{7`1!G$y*I`;@0I2,P`\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <block type=\"prolog_fact\" id=\"q0.G%]hr:XOp[QJ]oJUI\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\")*Bj~F4;ZD`I8(9nXf`k\">\n" +
    "                        <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"NPcDJsI!2bl:hWz:KDKw\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Variablen"] = {
    hints: ["Dieses Tutorial besteht wieder aus den Fakten 'vater' und 'mutter', soll aber nun den Umgang mit den sog. Variablen von Prolog vermitteln. Im Gegensatz zu Konstanten beginnen Variablen stets mit einem Großbuchstaben oder einem Unterstrich.",
        "Variablen dienen dazu Objekte zu deklarieren, für die bisher noch keine Namensgebung möglich ist. Ist eine Variable innerhalb einer Abfrage noch unbestimmt, versucht das System einen Variablenwert zu ermitteln, sodass eine wahre Aussage entsteht.",
        "In diesem Tutorial sollen die Fakten mittels Konstanten so erweitert werden, dass die geforderte Ausgabe entsteht."],   // Hinweise in der Tutorial-Box
    expected_query: "X = anna, Y = karl ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 1,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 0,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"]mxmZ%[;DHGnTPkDhjV=\" x=\"-70\" y=\"70\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"-uZ7-].Oz]5iKxSQ#RnV\">\n" +
    "        <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"g|QpG]2A~ps_Dx{arsQ^\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"|K-rz?q}ZOI6h([!w6$[\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"]T^p3YOiQr8Q})q*LEfX\">\n" +
    "            <field name=\"PREDICATE_NAME\">mutter</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"f(VxNo%g}fKpJbv.=6`T\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_query\" id=\"rXt+mQgytck_E.RWt?lk\">\n" +
    "            <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "            <statement name=\"INPUT\">\n" +
    "              <block type=\"prolog_query_body\" id=\"0/})W1MD~r{r6PP-y]`r\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <block type=\"prolog_fact\" id=\"8T*Z?Ht|{l~UZVj$bSed\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"p^[*)JDH5N@+y,`Z0.Zt\">\n" +
    "                        <field name=\"PREDICATE_NAME\">mutter</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"V]AhONHl*0r}?!w4}Dp=\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable\" id=\"[iz/|UBfX{Z_9bax*Y2v\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_fact\" id=\"54%HL0/Sb,RBvQir#x-)\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"n.T%8]iIYI@8D++2t^]@\">\n" +
    "                            <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable\" id=\"57HNWaV%mzhb+./-1I+v\">\n" +
    "                            <field name=\"VARIABLE_NAME\">Y</field>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Anonyme Variablen"] = {
    hints: ["In diesem Tutorial wird die sog. anonyme Variable vorgestellt, die aus einem einzelnen Unterstrich besteht. Man benutzt sie, wenn man eine neue Variable erstellen müsste, die jedoch im weiteren Verlauf des Programmes gar nicht mehr genutzt wird.",
    "Ist die anonyme Variable innerhalb einer Abfrage platziert, wird sie bei der Ausführung nicht ermittelt, sondern schlicht ignoriert. In diesem Tutorial sollen Informationen über das Buch von 'max mustermann' ausgegeben werden.",
    "Dazu soll der 'book'-Fakt mit Konstanten so erweitertert werden, dass die gesuchte Ausgabe entsteht. Die Konstanten 'max' und 'mustermann' werden wegen der anonymen Variablen nicht mit ausgegeben."],   // Hinweise in der Tutorial-Box
    expected_query: "X = book(moby_dick, melville, 1851) ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 2,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 0,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"^OYMEvkB3Yl{C=/kl1iN\" x=\"-110\" y=\"-109\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"!}hq4ORXdIO~ZjZ/[kr5\">\n" +
    "        <field name=\"PREDICATE_NAME\">owns</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\"Hw1)bKI1#6~J$3(rF[nb\">\n" +
    "        <field name=\"CONSTANT_NAME\">max</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_constant\" id=\"jhcj@3e~0i!D;a./}^hQ\">\n" +
    "            <field name=\"CONSTANT_NAME\">mustermann</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_fact\" id=\"IJl~avkt:(Es;{ZF~nAd\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"6KO8}L=M7)b$mKoR;snO\">\n" +
    "                    <field name=\"PREDICATE_NAME\">book</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"k$Ba0pkkw]GE$SFu/B9M\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_query\" id=\"rXt+mQgytck_E.RWt?lk\">\n" +
    "        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "        <statement name=\"INPUT\">\n" +
    "          <block type=\"prolog_query_body\" id=\"0/})W1MD~r{r6PP-y]`r\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <block type=\"prolog_fact\" id=\".].=Gd(}b^X6Fiprz1PU\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"j0T?:dO^O6SHmiU[E~DB\">\n" +
    "                    <field name=\"PREDICATE_NAME\">owns</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"uQp,:Gz?m33EvLIWSj25\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"{{VZVyBqu#3ez$p0_H0*\">\n" +
    "                    <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"Uh`~WkbsLzi7$=LS7pb{\">\n" +
    "                        <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"!FBE,Yu5ebBN}t.vWNM.\">\n" +
    "                            <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Einfache Regeln"] = {
    hints: ["Regeln sind ein wichtigtes Grundelement von Prolog. Durch sie können bedingte Beziehungen zwischen mehreren Fakten definiert werden. Sie bestehen aus einem Regelkopf, der in diesem Editor stets einen Fakt enthält und einem Rumpf.",
    "Der Fakt im Regelkopf gilt, sobald die Bedingungen im Rumpf wahr sind.  Letztere können auf Wunsch durch Kommata, wenn alle Bedingungen gelten müssen, oder durch Semikolons, falls nur mindestens eine Bedingung wahr sein muss, getrennt werden.",
    "In diesem Tutorial soll eine Regel vervollständigt werden, die aussagen soll, dass jemand der Musik hört auch gute Laune hat. Dadurch muss in diesm Fall eine Variable eingeführt werden, damit dies sowohl für Anna, als auch für Christina gilt."],   // Hinweise in der Tutorial-Box
    expected_query: "true ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 3,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 2,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"8$v[wa2P8lo%l=P7JK/4\" x=\"150\" y=\"50\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"z|Nn{br9dcJZ)+bc9:E3\">\n" +
    "        <field name=\"PREDICATE_NAME\">frau</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\",1vZs;6k`!Yf+xyh5%@#\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\"#`eiY}*OcDpL0I~q|PT*\">\n" +
    "        <field name=\"CONSTANT_NAME\">anna</field>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"fmC-Ukut7R1W$CTBG0${\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"G6GGCVsjy5T~6x,XVoLd\">\n" +
    "            <field name=\"PREDICATE_NAME\">frau</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_constant\" id=\"n1QcxB$rHL8pHC@+^c!4\">\n" +
    "            <field name=\"CONSTANT_NAME\">christina</field>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_fact\" id=\"iiLFbYR@[h.,%U{aQr):\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"[u*s1ag=R~itztUrIPhr\">\n" +
    "                <field name=\"PREDICATE_NAME\">hoertMusik</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_constant\" id=\".:*rp{N/T#ttYLr{H^4i\">\n" +
    "                <field name=\"CONSTANT_NAME\">christina</field>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_fact\" id=\"c/ME;_X,qrKSST=~|94[\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"3Fd(#1!hrttOemFCsU_l\">\n" +
    "                    <field name=\"PREDICATE_NAME\">hoertMusik</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_constant\" id=\"TE_Snq7NXL:ZEyE?Ht;3\">\n" +
    "                    <field name=\"CONSTANT_NAME\">anna</field>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_rule\" id=\"a#|B)#PZO)L66kXd7?tD\">\n" +
    "                    <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "                    <statement name=\"INPUT_HEAD\">\n" +
    "                      <block type=\"prolog_rule_head_fact\" id=\"`84uySTe8Zd^o6qMDId}\" deletable=\"false\" movable=\"false\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"W]~b8)I+{#pjjK_lowF0\">\n" +
    "                            <field name=\"PREDICATE_NAME\">guteLaune</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"OV3=fd*6SA3?st;7n4l.\">\n" +
    "                            <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                          </shadow>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <statement name=\"INPUT_BODY\">\n" +
    "                      <block type=\"prolog_rule_body_con\" id=\"w_/RL5FgO939|#?A,s#z\" deletable=\"false\" movable=\"false\">\n" +
    "                        <field name=\"OPERATOR\">AND</field>\n" +
    "                        <statement name=\"ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"(|vr1Vv4@*U95lS{Q`FN\">\n" +
    "                            <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_fact\" id=\"+?%;P_y,F$$Unfcic+:i\">\n" +
    "                            <value name=\"PREDICATE\">\n" +
    "                              <block type=\"prolog_predicate\" id=\"sY(T9-cL#$3#FS|{b#N8\">\n" +
    "                                <field name=\"PREDICATE_NAME\">hoertMusik</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <statement name=\"FACT_ARGS\">\n" +
    "                              <shadow type=\"info_block_statement\" id=\"[T)1M@wQtT12OfsO_eTB\">\n" +
    "                                <field name=\"TEXT\">Terme ..</field>\n" +
    "                              </shadow>\n" +
    "                            </statement>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_query\" id=\"j#bNhM,$lF,9qNbBuq$*\">\n" +
    "                        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                        <statement name=\"INPUT\">\n" +
    "                          <block type=\"prolog_query_body\" id=\"`@HLzuDL=Cd*UUeXw[vD\" deletable=\"false\" movable=\"false\">\n" +
    "                            <field name=\"OPERATOR\">AND</field>\n" +
    "                            <statement name=\"ARGS\">\n" +
    "                              <block type=\"prolog_fact\" id=\"d8LppF#qwZ/%=}c1?Z}P\">\n" +
    "                                <value name=\"PREDICATE\">\n" +
    "                                  <block type=\"prolog_predicate\" id=\"gIZIMn)=GgIh1LhnH9~`\">\n" +
    "                                    <field name=\"PREDICATE_NAME\">guteLaune</field>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                                <statement name=\"FACT_ARGS\">\n" +
    "                                  <shadow type=\"info_block_statement\">\n" +
    "                                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_constant\" id=\"*i0H$uQ.(RG[e)J/g_xk\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">christina</field>\n" +
    "                                  </block>\n" +
    "                                </statement>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_fact\" id=\"oTo~2#fA_{;b~O@DSA/F\">\n" +
    "                                    <value name=\"PREDICATE\">\n" +
    "                                      <block type=\"prolog_predicate\" id=\"oYM$Z}eC}MY.|QnyH.Dv\">\n" +
    "                                        <field name=\"PREDICATE_NAME\">guteLaune</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <statement name=\"FACT_ARGS\">\n" +
    "                                      <shadow type=\"info_block_statement\">\n" +
    "                                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_constant\" id=\"1zGW}riFtH)w.m8h47mz\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">anna</field>\n" +
    "                                      </block>\n" +
    "                                    </statement>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Transitive Regeln"] = {
    hints: ["In diesem Tutorial soll wieder eine einfache Regel implementiert werden, die dieses mal jedoch Transitivität nutzt.",
    "OpaVon ist dann wahr, wenn jemand einen Vater hat, der von jemandem anderes das Kind ist. Um diese Regel zu realisieren, müssen mindestens 3 Variablen eingesetzt werden."],   // Hinweise in der Tutorial-Box
    expected_query: "A = anna, B = frank ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 4,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 2,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"8$7~04qdWM%n^v1CER?N\" x=\"130\" y=\"70\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\":WHpag^[U2)|DpZ5rJI[\">\n" +
    "        <field name=\"PREDICATE_NAME\">vaterVon</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"1RfL29~y?3F7wBqXM+Al\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\"R1kH[|qLP[@5})5uXCX;\">\n" +
    "        <field name=\"CONSTANT_NAME\">anna</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_constant\" id=\"L,}:l89Be62;p3=t_-KR\">\n" +
    "            <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"o@N3K0uhUhN)FIHN~:gj\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"@Pg*E=.N]AQQqv7zWMg-\">\n" +
    "            <field name=\"PREDICATE_NAME\">kindVon</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"[6)!@~w.!Xpw2;lF]MM4\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_constant\" id=\"Ld{8`ZW8:Ny?~)*m/HeZ\">\n" +
    "            <field name=\"CONSTANT_NAME\">frank</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_constant\" id=\"t2z+OLPyo+]X(m1be[7m\">\n" +
    "                <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_rule\" id=\"hHP(FgOV;0a1qgD/.x}b\">\n" +
    "            <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "            <statement name=\"INPUT_HEAD\">\n" +
    "              <block type=\"prolog_rule_head_fact\" id=\"0H7K%(8-_,3.EDIw)jb?\" deletable=\"false\" movable=\"false\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"ix;cQ=~8;:]8r|dQe$KC\">\n" +
    "                    <field name=\"PREDICATE_NAME\">opaVon</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"O|zj?`.Cjr8.~dx$`|^3\">\n" +
    "                    <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                  </shadow>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <statement name=\"INPUT_BODY\">\n" +
    "              <block type=\"prolog_rule_body_con\" id=\"r;o]63vS,Dstt+n+6aF-\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"a0cffe^EmNh5}[a92Sb%\">\n" +
    "                    <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_fact\" id=\"a#UIth^)}{a?7W{1z(Gy\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"zQ#m!N9uNg..,}W9EGBU\">\n" +
    "                        <field name=\"PREDICATE_NAME\">vaterVon</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"PH74|CHc$Fgf@2MR~,2-\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_fact\" id=\"wUbbMB7(M1N=y.yo2,M?\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"@^bW@|_r!I:/v^RF]w],\">\n" +
    "                            <field name=\"PREDICATE_NAME\">kindVon</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"E40tk6CcD$B7XIfsO/uU\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_query\" id=\"HmvfkV;2QyHjO#n5.`GA\">\n" +
    "                <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                <statement name=\"INPUT\">\n" +
    "                  <block type=\"prolog_query_body\" id=\"yun:hp9atjcqd%;EaVu/\" deletable=\"false\" movable=\"false\">\n" +
    "                    <field name=\"OPERATOR\">AND</field>\n" +
    "                    <statement name=\"ARGS\">\n" +
    "                      <block type=\"prolog_fact\" id=\"Y4y{y,{5WzDiPy{*Hg!)\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"|@~^U,:3n@1Tc./gXs|Z\">\n" +
    "                            <field name=\"PREDICATE_NAME\">opaVon</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"e[cbXHk?42}/#;Fn$83H\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable\" id=\"t#Eo?0U(#=s*LREx4i5-\">\n" +
    "                            <field name=\"VARIABLE_NAME\">A</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"_!$}uDQ%}mE=6DfW^Sq)\">\n" +
    "                                <field name=\"VARIABLE_NAME\">B</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Cut und Fail"] = {
    hints: ["Mit Cut stellt Prolog ein nullstelliges Prädikat zur Verfügung, durch welches alle Alternativpunkte gelöscht werden und die Suche beendet wird.",
    "Fail dagegen ist ebenfalls ein nullstelliges Prädikat, welches bei der Ausführung scheitert. Cut und Fail zusammen werden häufig benutzt, um bestimmte Lösungen auszuschließen.", "" +
        "In diesem Tutorial soll ausgeschlossen werden, dass ein Ausländer auch ein durchschnittlicher Steuerzahler ist. Dazu müssen Cut und Fail entsprechend in die vorgegebene Regel eingebaut werden."],   // Hinweise in der Tutorial-Box
    expected_query: "false.",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 5,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 2,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"cF54rKakw1iDn_F=(tuW\" x=\"170\" y=\"-10\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"JNoE,x*FfxM:qc4QDIlK\">\n" +
    "        <field name=\"PREDICATE_NAME\">foreigner</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"_d-4Kg4J!PX^gB%cwz8+\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\"VNql*RI0fRODgt3tm_zG\">\n" +
    "        <field name=\"CONSTANT_NAME\">edgar</field>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"OJEAbjCC=n|jc3G22j[0\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"mc}O32@_%mI[nJ`(E(R:\">\n" +
    "            <field name=\"PREDICATE_NAME\">income</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"}qGs`B%E@1g*;C6$9R*o\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_constant\" id=\"MvtQR-zvWJ.)y$k^,}pa\">\n" +
    "            <field name=\"CONSTANT_NAME\">edgar</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_constant\" id=\"tr_!d1{Yyfg*H1U2x-a/\">\n" +
    "                <field name=\"CONSTANT_NAME\">1500</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_fact\" id=\"I!`,xCW3!;.g_Aksn^1`\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\":_7?-F,zD,V:u4E)}{/S\">\n" +
    "                <field name=\"PREDICATE_NAME\">income</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"`1q.-uHt7|j[DH%4/IK.\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_constant\" id=\"UB_{C/M|vFy9U)Z)RT{L\">\n" +
    "                <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_constant\" id=\"u$*[%qiRbbMaGK__BwaB\">\n" +
    "                    <field name=\"CONSTANT_NAME\">1200</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_rule\" id=\"@MBi)07ah@B:hq1#;Jd-\">\n" +
    "                <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "                <statement name=\"INPUT_HEAD\">\n" +
    "                  <block type=\"prolog_rule_head_fact\" id=\"V#wn5I@m|;J{uQk[4=?F\" deletable=\"false\" movable=\"false\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"*^(vwS!M*U3*gLy,3[q8\">\n" +
    "                        <field name=\"PREDICATE_NAME\">average_taxpayer</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"NX%00OS5F,y}+}4`6#[0\">\n" +
    "                        <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable\" id=\"/FUCwzF1Uk$N6lJ(w%8s\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <statement name=\"INPUT_BODY\">\n" +
    "                  <block type=\"prolog_rule_body_con\" id=\"(Ub.wNX;{:^,nhJQE(Ty\" deletable=\"false\" movable=\"false\">\n" +
    "                    <field name=\"OPERATOR\">AND</field>\n" +
    "                    <statement name=\"ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"{;~(ED`e$NB$.z=^1LI.\">\n" +
    "                        <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                      </shadow>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_rule\" id=\"Kty4g+Wkj^;@4Lz)J[xl\">\n" +
    "                    <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "                    <statement name=\"INPUT_HEAD\">\n" +
    "                      <block type=\"prolog_rule_head_fact\" id=\"n`%E|oL.~.tLCw=m)/{G\" deletable=\"false\" movable=\"false\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"bnT!)Iss(^.~/4F{uAJ$\">\n" +
    "                            <field name=\"PREDICATE_NAME\">average_taxpayer</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"0w]z2(*t!g,3L`k]+9U#\">\n" +
    "                            <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable\" id=\"5i6ssv$ra+^M@W)D(dWb\">\n" +
    "                            <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <statement name=\"INPUT_BODY\">\n" +
    "                      <block type=\"prolog_rule_body_con\" id=\"/~[U#umnZnyTy?F}~pb*\" deletable=\"false\" movable=\"false\">\n" +
    "                        <field name=\"OPERATOR\">AND</field>\n" +
    "                        <statement name=\"ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\" id=\"]jfhf4[uO|Ki{X:~W.53\">\n" +
    "                            <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_fact\" id=\"55Ow:m|(^Kp)Bd3.IDp|\">\n" +
    "                            <value name=\"PREDICATE\">\n" +
    "                              <block type=\"prolog_predicate\" id=\"l(LVwj`p+C5GN~[n1%8(\">\n" +
    "                                <field name=\"PREDICATE_NAME\">income</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <statement name=\"FACT_ARGS\">\n" +
    "                              <shadow type=\"info_block_statement\" id=\"+kzIX~v?%ik|hfi6{mKA\">\n" +
    "                                <field name=\"TEXT\">Terme ..</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_variable\" id=\"utfNey+=v1bAXys8LO(r\">\n" +
    "                                <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_variable\" id=\"Xlkx#vMoh+$9=2xkueHV\">\n" +
    "                                    <field name=\"VARIABLE_NAME\">Inc</field>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_operation\" id=\"b3-j-cxL.s=$p4#TefIQ\">\n" +
    "                                <value name=\"OP_ARGS\">\n" +
    "                                  <shadow type=\"prolog_math_operation\" id=\"ykNH`~Aps|md]S]Kq!0A\">\n" +
    "                                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_arithmetic_operation\" id=\"`NG#Q|TCDAU0$~cDbXb*\">\n" +
    "                                    <field name=\"OPERATOR\">LT</field>\n" +
    "                                    <value name=\"FIRST_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\"6zjiA;.3(+hXQ*(h#s]o\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_variable_input\" id=\"%G2At^e@jkla9k{E:X`/\">\n" +
    "                                        <field name=\"VARIABLE_NAME\">Inc</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <value name=\"SECOND_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\"CfL4DM%/2pYo1HjzT?Xl\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_constant_input\" id=\"2kqlaZ8AwZJEYSK.-}w-\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">2000</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_operation\" id=\"t(-BFOp6e|GA9wtave.4\">\n" +
    "                                    <value name=\"OP_ARGS\">\n" +
    "                                      <shadow type=\"prolog_math_operation\">\n" +
    "                                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_arithmetic_operation\" id=\"7lIUOU!mvMg^K4OBdC4]\">\n" +
    "                                        <field name=\"OPERATOR\">GT</field>\n" +
    "                                        <value name=\"FIRST_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_variable_input\" id=\"6A]2O};{f}j$bd{n6GvU\">\n" +
    "                                            <field name=\"VARIABLE_NAME\">Inc</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                        <value name=\"SECOND_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_constant_input\" id=\",N+HUo[+)%e4h_F6Jtr`\">\n" +
    "                                            <field name=\"CONSTANT_NAME\">1000</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_query\" id=\"#$$z3S.Wu|q{:(Zg$(E,\">\n" +
    "                        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                        <statement name=\"INPUT\">\n" +
    "                          <block type=\"prolog_query_body\" id=\"[9Alpu;.0)w|VWJ[WzH!\" deletable=\"false\" movable=\"false\">\n" +
    "                            <field name=\"OPERATOR\">AND</field>\n" +
    "                            <statement name=\"ARGS\">\n" +
    "                              <block type=\"prolog_fact\" id=\"Ky@Ez0JKF58m4~0V*`mf\">\n" +
    "                                <value name=\"PREDICATE\">\n" +
    "                                  <block type=\"prolog_predicate\" id=\"cFlu:y`7N7;0JBA3k3_}\">\n" +
    "                                    <field name=\"PREDICATE_NAME\">average_taxpayer</field>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                                <statement name=\"FACT_ARGS\">\n" +
    "                                  <shadow type=\"info_block_statement\" id=\"LqW6F*=QICIQrvtKA:=n\">\n" +
    "                                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_constant\" id=\".{qcs[_gbIkip)9=94V3\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">edgar</field>\n" +
    "                                  </block>\n" +
    "                                </statement>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Der Is-Operator"] = {
    hints: ["Dieses Tutorial veranschaulicht den Umgang mit dem Is-Operator, sowie den Nutzen des Operationsblocks. Um im grafischen Editor eine mathematische Operation zu implementieren, muss zunächst ein Operationsblock platziert werden.",
    "Am Operationsblock können verschiedene mathematische Operationen angehängt werden. Diese sind durch ihr seitliches Verbindungsstück gekennzeichnet und werden außerdem in den folgenden Tutorials weiter vorgestellt.",
    "Innerhalb einer mathematischen Operationen können Variablen (zur Deklarierung von Unbekannten) und Konstanten (zur Initialisierung von Zahlen) genutzt werden. Für diese gibt es jeweils einen zusätzlichen Block mit einem seitlichen Verbindungsstück.",
    "Der Is-Operator von Prolog wertet den Ausdruck auf der rechten Seite aus und weist ihn dem linken Ausdruck (der sog. Zuweisungsvariablen) zu. Sollte es sich bei dem linken Ausdruck um eine bereits zugewiesene Variable oder einer Zahl handeln, vergleicht das System diese mit dem rechten (arithmetischen) Ausdruck und gibt ggf. true aus, wenn diese äquivalent sind."
    ],   // Hinweise in der Tutorial-Box
    expected_query: "A = 125, B = 47, C = 153 ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 6,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 1,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_query\" id=\"%/dv:3jd`3[;-xc`vUVp\" x=\"230\" y=\"150\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"#ek1pq|[l3T_A2bBsm9O\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <block type=\"prolog_operation\" id=\"J,h.k]s)j8hsGg~w.~3*\">\n" +
    "            <value name=\"OP_ARGS\">\n" +
    "              <shadow type=\"prolog_math_operation\" id=\"WJYY@d_)lA~QB@5$HyZ*\">\n" +
    "                <field name=\"OPERATOR\">PLUS</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_is_operation\" id=\"X44JIU7Z]t/(o(?,lv10\">\n" +
    "                <value name=\"FIRST_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"Ixcl._qA$,]FU;YQW~{[\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable_input\" id=\"adM|;rTd^Bz2pr]Rm~Nx\">\n" +
    "                    <field name=\"VARIABLE_NAME\">A</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <value name=\"SECOND_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"Os,=84ck!H{=K5wvAJ$Y\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                </value>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_operation\" id=\"Gb]o[SgemM=k:+zE(=[E\">\n" +
    "                <value name=\"OP_ARGS\">\n" +
    "                  <shadow type=\"prolog_math_operation\">\n" +
    "                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_is_operation\" id=\"5VBC9b#5gSF~l@+?7-Nw\">\n" +
    "                    <value name=\"FIRST_ARG\">\n" +
    "                      <shadow type=\"info_block_input\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable_input\" id=\"1d)Bua-y8cW[;hG%O2kY\">\n" +
    "                        <field name=\"VARIABLE_NAME\">B</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <value name=\"SECOND_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"B{dzkhc~CxMW)yyGS[24\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_math_operation\" id=\"k@dE$FjRdpe1hnBSk$f7\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"b-jZ!#v9Lj`8r{`Z#Tb;\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"0Nsm~~7omhEX]bp_I]dd\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_constant_input\" id=\"ND@_[Eo2on#UQZQ14x;Y\">\n" +
    "                            <field name=\"CONSTANT_NAME\">15</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_operation\" id=\"opK-+pgzTe0.fyOknY#]\">\n" +
    "                    <value name=\"OP_ARGS\">\n" +
    "                      <shadow type=\"prolog_math_operation\" id=\"R)Dr+AtUb?MX$]Qh/~#u\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                      </shadow>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Grundrechenoperationen"] = {
    hints: ["In diesem Tutorial sollen die Grundrechenoperationen von Prolog vorgestellt werden. Prolog bietet Addition, Subtraktion, Multiplikation, Division und die Division mit Rest (Modulo).",
    "Dazu sind bereits einige Operationsblöcke gegeben, die den vier Variablen (A, B, C und D) verschiedene Ergebnisse zuordnen sollen. Um dieses Tutorial zu absolvieren sollen die mathematischen Operationen vervollständigt werden.",
    "Um Zahlen in die Operationen hinzuzufügen, können die Konstantenblöcke mit einem seitlichen Verbindungsstück aus der Toolbox benutzt werden. Es gibt natürlich verschiedene Wege die nachfolgende Lösung zu generieren."],   // Hinweise in der Tutorial-Box
    expected_query: "A = 9.0, B = 15, C = 2, D = 12 ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 7,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 1,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_query\" id=\"d1bYb_pBhA*qz(Q/=xUu\" x=\"90\" y=\"230\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"B6]z.^qto%~${kfR)4R)\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <block type=\"prolog_operation\" id=\"e?kZR]h6+8.+k]?KZM+U\">\n" +
    "            <value name=\"OP_ARGS\">\n" +
    "              <shadow type=\"prolog_math_operation\" id=\"{=:[G|M+D^zUjs?69y?0\">\n" +
    "                <field name=\"OPERATOR\">PLUS</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_is_operation\" id=\"_6/OuG^`dlW%l3-j^Vfy\">\n" +
    "                <value name=\"FIRST_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"#ujl0b~w?ylL*~q-yiTz\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable_input\" id=\".yi%8s:6N3%CyOp2}%VR\">\n" +
    "                    <field name=\"VARIABLE_NAME\">A</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <value name=\"SECOND_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"oURgju1jd*ExGYK49QQT\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_math_operation\" id=\"]$L-J+mB_RlXF6A5/$/)\">\n" +
    "                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                    <value name=\"FIRST_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"w1OJJKz;(5:6](s;q}qX\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_constant_input\" id=\"dMo[ih#[{^(8.zG]$px+\">\n" +
    "                        <field name=\"CONSTANT_NAME\">6</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <value name=\"SECOND_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"k5)X$NX;eOCO9@BD|Pi(\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_math_operation\" id=\"ww1~8$fRH:zNN;^PdGf%\">\n" +
    "                        <field name=\"OPERATOR\">DIV</field>\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"t|69*XkVKNzO,n{(;7x,\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"bUFrqHKK*r0AS?p/mYjj\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_operation\" id=\"S:jXc1aT{gy6zV2k?=i,\">\n" +
    "                <value name=\"OP_ARGS\">\n" +
    "                  <shadow type=\"prolog_math_operation\">\n" +
    "                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_is_operation\" id=\"v2dfJ-98@5wep+NJac+$\">\n" +
    "                    <value name=\"FIRST_ARG\">\n" +
    "                      <shadow type=\"info_block_input\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable_input\" id=\"{U%%fJn}3|.`m^HI/e-5\">\n" +
    "                        <field name=\"VARIABLE_NAME\">B</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <value name=\"SECOND_ARG\">\n" +
    "                      <shadow type=\"info_block_input\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_math_operation\" id=\"EFNgPHPK0yUPV*fzNt6%\">\n" +
    "                        <field name=\"OPERATOR\">MULTI</field>\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"_fRFN)u69v0S!6!.uq:}\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"v6^oG(pQ1T%6{n[Jz.t@\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_math_operation\" id=\"tr{B-#,fTIYSM9hDUhAE\">\n" +
    "                            <field name=\"OPERATOR\">MINUS</field>\n" +
    "                            <value name=\"FIRST_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"uxM0e;G2o/6XuyD~hm+A\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                            </value>\n" +
    "                            <value name=\"SECOND_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"AVIm,}AM(..qeu(z{2}V\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_constant_input\" id=\"40@p)hz#br4dd-,!~c(E\">\n" +
    "                                <field name=\"CONSTANT_NAME\">4</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_operation\" id=\"i}FK#S3n=o!gPbdd;{$K\">\n" +
    "                    <value name=\"OP_ARGS\">\n" +
    "                      <shadow type=\"prolog_math_operation\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_is_operation\" id=\"3e1l/[xgmoI_D76(!liN\">\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable_input\" id=\"KStQ]T:U9[v+~~36%ef-\">\n" +
    "                            <field name=\"VARIABLE_NAME\">C</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_math_operation\" id=\"Xvu~,+~Ya|X}-WYU}I,a\">\n" +
    "                            <field name=\"OPERATOR\">MOD</field>\n" +
    "                            <value name=\"FIRST_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"Xtv98-kt`(-y`7Tdj6=H\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_constant_input\" id=\"$:YM6;NLhIn_+gg,/.zb\">\n" +
    "                                <field name=\"CONSTANT_NAME\">11</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <value name=\"SECOND_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"((/LWOnU#IfogW5h+QL;\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                            </value>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_operation\" id=\"Kiv,#lNyaT.[aV@LfRt4\">\n" +
    "                        <value name=\"OP_ARGS\">\n" +
    "                          <shadow type=\"prolog_math_operation\">\n" +
    "                            <field name=\"OPERATOR\">PLUS</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_is_operation\" id=\"9#INH^p%o}.?k8g^~1qL\">\n" +
    "                            <value name=\"FIRST_ARG\">\n" +
    "                              <shadow type=\"info_block_input\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_variable_input\" id=\"6c0L:mO;uZ~Ctc`;Z.U_\">\n" +
    "                                <field name=\"VARIABLE_NAME\">D</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <value name=\"SECOND_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"EZwlIQ@DK$2ekk]/RUo+\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_math_operation\" id=\"bT@31[2Gnvxs5/gT*{Y8\">\n" +
    "                                <field name=\"OPERATOR\">MOD</field>\n" +
    "                                <value name=\"FIRST_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\" id=\"BYgN1l?A[pYtOdytOw*2\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                </value>\n" +
    "                                <value name=\"SECOND_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\" id=\"?BmZ+HW{*(?r-,n``e`_\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_math_operation\" id=\"%%/|0829}Qxp69Fa~L9e\">\n" +
    "                                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                                    <value name=\"FIRST_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\"[SxQt3B+,KX}+vImT?}X\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                    </value>\n" +
    "                                    <value name=\"SECOND_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\"dO?)0JCQy9|s%esca$Y8\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_math_operation\" id=\"!DBM78cM!V?c[2[oHip%\">\n" +
    "                                        <field name=\"OPERATOR\">MULTI</field>\n" +
    "                                        <value name=\"FIRST_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_constant_input\" id=\"`[IxddpJy5mSzsq3PzF~\">\n" +
    "                                            <field name=\"CONSTANT_NAME\">12</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                        <value name=\"SECOND_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_constant_input\" id=\"Wgvnd~!2K=^D27`Jz1K?\">\n" +
    "                                            <field name=\"CONSTANT_NAME\">4</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Vergleiche"] = {
    hints: ["Dieses Tutorial soll die Vergleichsoperatoren von Prolog vorstellen. Prolog bietet neben den typischen Operatoren, wie beispielsweise Größer- und Kleinergleich (<= bzw. >=) oder der klassischen Gleichheit (=), auch eigene Opratoren an.", "" +
    "Mit '=:=' kann auf numerische Gleichheit geprüft werden. Im Gegensatz zur einfachen Gleicheit (=) führt dieser Operator den arithmetischen Ausdruck beider Seiten vorher aus. Es gilt also nicht '2 + 2 = 4', wohl aber '2 + 2 =:= 4'. Das Gegenstück dazu ist die numerische Ungleichheit '=\\='.",
    "Ein weiterer Operator ist die Musterübereinstimmung mittels '==' bzw. '\\==' als Gegenstück. Dieser wertet die Ausdrücke der beiden Seiten ebenfalls nicht aus, sondern prüft ledigleich, ob das Muster der beiden Seiten identisch ist. Beispielsweise gilt '1+2 == 1+2', jedoch nicht '3 == 1+3'."],   // Hinweise in der Tutorial-Box
    expected_query: "true ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 8,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 1,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_query\" id=\"j/5[BNk9%Bamp8Db%dMS\" x=\"110\" y=\"210\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"[3Uth#YBNT!@21[FDxdi\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <block type=\"prolog_operation\" id=\"gSfZVt/4d`2`j?}Y^S3L\">\n" +
    "            <value name=\"OP_ARGS\">\n" +
    "              <shadow type=\"prolog_math_operation\" id=\"Eo,m4[wziW*VKbs29SK]\">\n" +
    "                <field name=\"OPERATOR\">PLUS</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_arithmetic_operation\" id=\"@W4NJVwsWO7:J$v+w^G`\">\n" +
    "                <field name=\"OPERATOR\">GT</field>\n" +
    "                <value name=\"FIRST_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"wwLn{M|*]L^gj_/:TkFU\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_constant_input\" id=\"mc+_twDGp1!h1`=eBaLj\">\n" +
    "                    <field name=\"CONSTANT_NAME\">6</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <value name=\"SECOND_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"H^.Z~KXUfL{$9yS$r17S\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                </value>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_operation\" id=\"qNtw%pL$!5.$a26z(!}F\">\n" +
    "                <value name=\"OP_ARGS\">\n" +
    "                  <shadow type=\"prolog_math_operation\">\n" +
    "                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_arithmetic_operation\" id=\")mOr,fs/#DusXVL7-Jpy\">\n" +
    "                    <field name=\"OPERATOR\">LTE</field>\n" +
    "                    <value name=\"FIRST_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"e-EuDZ^5yw6JO)!clPm3\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                    </value>\n" +
    "                    <value name=\"SECOND_ARG\">\n" +
    "                      <shadow type=\"info_block_input\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_constant_input\" id=\"{YII9!7@ShqZsM/aY.qU\">\n" +
    "                        <field name=\"CONSTANT_NAME\">4</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_operation\" id=\"x$W|_1.B`OQV03J_rNze\">\n" +
    "                    <value name=\"OP_ARGS\">\n" +
    "                      <shadow type=\"prolog_math_operation\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_arithmetic_operation\" id=\"|YJja6_Ve+E;DEV6c-5*\">\n" +
    "                        <field name=\"OPERATOR\">EQ</field>\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_constant_input\" id=\"lzz=}{!pMO}2_SrEAbA[\">\n" +
    "                            <field name=\"CONSTANT_NAME\">4</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"w#wGq6=9bnw58F*?O?h.\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_operation\" id=\"BKS7_A,r8#{TLYZf6Hlp\">\n" +
    "                        <value name=\"OP_ARGS\">\n" +
    "                          <shadow type=\"prolog_math_operation\">\n" +
    "                            <field name=\"OPERATOR\">PLUS</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_arithmetic_operation\" id=\"gc2.~O^SohLw[6$iQ?lx\">\n" +
    "                            <field name=\"OPERATOR\">NUMIDT</field>\n" +
    "                            <value name=\"FIRST_ARG\">\n" +
    "                              <shadow type=\"info_block_input\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_math_operation\" id=\"Qy%S+3,GWO:X^C.6B{$x\">\n" +
    "                                <field name=\"OPERATOR\">MOD</field>\n" +
    "                                <value name=\"FIRST_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\" id=\"#!$kxyis(E:VJJr~3247\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                </value>\n" +
    "                                <value name=\"SECOND_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\" id=\"kjVQ!t~]:ix[aK$^#Uq-\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_constant_input\" id=\"O)r_*Z./j$Bk@.KdrCXe\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">6</field>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <value name=\"SECOND_ARG\">\n" +
    "                              <shadow type=\"info_block_input\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_constant_input\" id=\"Ak7)6)H*)s!V?8yP-gRY\">\n" +
    "                                <field name=\"CONSTANT_NAME\">4</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_operation\" id=\"8v0OcHtUAefE/Ii#Jg4b\">\n" +
    "                            <value name=\"OP_ARGS\">\n" +
    "                              <shadow type=\"prolog_math_operation\">\n" +
    "                                <field name=\"OPERATOR\">PLUS</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_arithmetic_operation\" id=\"*T9P8pWG`kJY*B0Z:cdq\">\n" +
    "                                <field name=\"OPERATOR\">IDT</field>\n" +
    "                                <value name=\"FIRST_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_math_operation\" id=\"!7|lnI}Z!c5:S^@G7d[[\">\n" +
    "                                    <field name=\"OPERATOR\">MULTI</field>\n" +
    "                                    <value name=\"FIRST_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_constant_input\" id=\"3V9:?:zlag`Rk4RR/F^i\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">2</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <value name=\"SECOND_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\":=Ys#L?D!_ORp,7H`KKz\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                                <value name=\"SECOND_ARG\">\n" +
    "                                  <shadow type=\"info_block_input\">\n" +
    "                                    <field name=\"TEXT\">?</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_math_operation\" id=\"e%Y+Tet%I9jTg#lkULVX\">\n" +
    "                                    <field name=\"OPERATOR\">MULTI</field>\n" +
    "                                    <value name=\"FIRST_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\" id=\"f2+:OrAV8@0(D$r91+Gj\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                    </value>\n" +
    "                                    <value name=\"SECOND_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_constant_input\" id=\"AuQXZvSd9Vqa@wgS*K#C\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">3</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_operation\" id=\"]q|Z(Q4jkM:|qiw9{+fO\">\n" +
    "                                <value name=\"OP_ARGS\">\n" +
    "                                  <shadow type=\"prolog_math_operation\">\n" +
    "                                    <field name=\"OPERATOR\">PLUS</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_arithmetic_operation\" id=\"_AujI@!%6)L[6zJAo}_7\">\n" +
    "                                    <field name=\"OPERATOR\">GTE</field>\n" +
    "                                    <value name=\"FIRST_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_math_operation\" id=\"*mVBgROQB|tqaov=MD{g\">\n" +
    "                                        <field name=\"OPERATOR\">MULTI</field>\n" +
    "                                        <value name=\"FIRST_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_constant_input\" id=\"S@Yh.kuAu1L-6`%zZ2Zb\">\n" +
    "                                            <field name=\"CONSTANT_NAME\">5</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                        <value name=\"SECOND_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\" id=\"2c7~7Mx~!l$+*6.u}-DW\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                        </value>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <value name=\"SECOND_ARG\">\n" +
    "                                      <shadow type=\"info_block_input\">\n" +
    "                                        <field name=\"TEXT\">?</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_math_operation\" id=\"v,|jqnqaplFt2;+[7iUZ\">\n" +
    "                                        <field name=\"OPERATOR\">MULTI</field>\n" +
    "                                        <value name=\"FIRST_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\" id=\"|./N,9$1Pjzrn6U0,$j9\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                        </value>\n" +
    "                                        <value name=\"SECOND_ARG\">\n" +
    "                                          <shadow type=\"info_block_input\">\n" +
    "                                            <field name=\"TEXT\">?</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_constant_input\" id=\"`f1-Qi?{p@OC+GS!Wmtc\">\n" +
    "                                            <field name=\"CONSTANT_NAME\">7</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Regeln und Artihmetik"] = {
    hints: ["In diesem Tutorial soll die Regel 'add_three_and_double' implementiert werden. Wie der Name schon sagt soll diese zu einer Variablen (X) drei hinzuaddieren und die Summe anschlißend verdoppeln.",
        "Dazu ist bereits der Regelkopf und ein Teil des Rumpfes gegeben. Grundlage für die Implementierung ist ein Operationsblock im Rumpf. Durch den Is-Operator kann das berechnete Produkt einer linksstehnden Variablen zugeordnet werden.",
    ],   // Hinweise in der Tutorial-Box
    expected_query: "X = 26 ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 9,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 1,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_rule\" id=\"SoU_FuNfmTnl13]9RfGE\" x=\"130\" y=\"190\">\n" +
    "    <comment pinned=\"false\" h=\"80\" w=\"160\">This predicate takes its first argument, adds three to it, doubles the result, and returns the number obtained as the second argument.</comment>\n" +
    "    <statement name=\"INPUT_HEAD\">\n" +
    "      <block type=\"prolog_rule_head_fact\" id=\"@qG8H|OAV2lj}{H;Y5*y\" deletable=\"false\" movable=\"false\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"z-!}-w=Fw2.s{r*VJ__E\">\n" +
    "            <field name=\"PREDICATE_NAME\">add_three_and_double</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"PhuU]$Mg(YEB|3u^Ap/:\">\n" +
    "            <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_variable\" id=\"GRt/j?B8E-}0BJP@*!(z\">\n" +
    "            <field name=\"VARIABLE_NAME\">X</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_variable\" id=\"6Q=vo+k?D6~`ZpBNi0av\">\n" +
    "                <field name=\"VARIABLE_NAME\">Y</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <statement name=\"INPUT_BODY\">\n" +
    "      <block type=\"prolog_rule_body_con\" id=\"Uy$M+|_ciHm/ASpFi1kA\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"uT%oMI]{{9Q8__p{bmvi\">\n" +
    "            <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_operation\" id=\"CC$bI9%-M~F:i@G97aTh\">\n" +
    "            <value name=\"OP_ARGS\">\n" +
    "              <shadow type=\"prolog_math_operation\" id=\"G~5G|*QjpG#p}LvtQgus\">\n" +
    "                <field name=\"OPERATOR\">PLUS</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_is_operation\" id=\"8!C1G)1C@A4QP_0?o^xe\">\n" +
    "                <value name=\"FIRST_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"m-qop(daB|Gg!V@mLt?`\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                </value>\n" +
    "                <value name=\"SECOND_ARG\">\n" +
    "                  <shadow type=\"info_block_input\" id=\"g(juwY{gIG^6@15_bE_!\">\n" +
    "                    <field name=\"TEXT\">?</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_math_operation\" id=\"@3JY]9E/C!}YW[~[_RU9\">\n" +
    "                    <field name=\"OPERATOR\">MULTI</field>\n" +
    "                    <value name=\"FIRST_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"wJ9(dB0KB:?{1UGVCX{V\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_math_operation\" id=\"xD|`a.jb,mU+7kEb::uh\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"T2h3!hUegixscu#Qb2h!\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"wyEc[Vwk%=u;;p*jtHa/\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <value name=\"SECOND_ARG\">\n" +
    "                      <shadow type=\"info_block_input\" id=\"4MA8T`L?#.!RVZx.kuWg\">\n" +
    "                        <field name=\"TEXT\">?</field>\n" +
    "                      </shadow>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_query\" id=\"oY@2yD+)lBXeQkw:q:rk\">\n" +
    "        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "        <statement name=\"INPUT\">\n" +
    "          <block type=\"prolog_query_body\" id=\"Py#|!GmNbTq:([q.=iS}\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <block type=\"prolog_fact\" id=\"f2P]lecG3Tm(z%vz,)^u\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"`4MLbKTsykqGOP{+rquh\">\n" +
    "                    <field name=\"PREDICATE_NAME\">add_three_and_double</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"!FPKGD`|`.wbhY1jTg@h\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_constant\" id=\"ZEF-l=1cCkp^|RF(MHc!\">\n" +
    "                    <field name=\"CONSTANT_NAME\">10</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"34@eFXG8#DPkIg49E_~/\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Einfache Listen"] = {
    hints: ["Listen sind geordnete Folgen von Elementen in beliebiger Länge. Eine Liste kann beliebige Terme enthalten und kann daher natürlich auch selber wieder Listen enthalten.",
        "Listen haben entweder keine Elemente (die sog. leeren Listen) oder sie bestehen aus zwei Komponenten: Dem Kopfelement und einer Restliste. In diesem Tutorial sollst du die gegebene Liste so erweitern, dass die geforderte Ausgabe entsteht."
    ],   // Hinweise in der Tutorial-Box
    expected_query: "X = [max, karl, hans, erika, buch(moby_dick)] ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 10,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 3,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"j,*?yA%koB@Xh9h$Gr4?\" x=\"230\" y=\"190\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"h/713UWclBW;6Xm0g3$;\">\n" +
    "        <field name=\"PREDICATE_NAME\">liste</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"=xy,%Xed$_}AWEYq^9q)\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_list\" id=\"!0UXERdo-UG~={^usQgi\">\n" +
    "        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "        <statement name=\"LIST_ARG\">\n" +
    "          <block type=\"prolog_constant\" id=\"mr}R4^mk];Omd}Xh,NM?\">\n" +
    "            <field name=\"CONSTANT_NAME\">max</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_constant\" id=\"oYCYhtG`h@[:y92GTXgh\">\n" +
    "                <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_query\" id=\"7XupXxw+:DeI0$3B2YXV\">\n" +
    "        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "        <statement name=\"INPUT\">\n" +
    "          <block type=\"prolog_query_body\" id=\"Rds-?^jReQ1nQm$3TkVs\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <block type=\"prolog_fact\" id=\"KIZ:rQ)O*Xo${Z!-QJBS\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"Q2!Vd*WvaDjKe@ydSiny\">\n" +
    "                    <field name=\"PREDICATE_NAME\">liste</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"?.C_C9[LTRaMf]yml=4*\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"Iprr`9?^iPe|DQK!jOR_\">\n" +
    "                    <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};

PrologParser.TUTORIALS["Verschachtelte Listen"] = {
    hints: ["Mit dem Listenseparator ist ein Element gegeben, mit dem genau definiert werden kann, welche Elemente in der Liste als Kopfelemente zugeteilt werden sollen. Der Listenseparator besteht aus einem einzelnen vertikalen Strich.",
        "In diesem Tutorial soll für X das entsprechende Kopfelement ausgegeben werden. Y dagegen soll die Restliste sein, die auch selbst wieder Listen enthält."
    ],   // Hinweise in der Tutorial-Box
    expected_query: "X = max, Y = [karl, [peter, hans], [frauke, hanna]] ;",      //Die erwartete Ausgabe, um das nächste Tutorial zu starten.
    id: 11,                      //ID des Containers (sollte eine stetige Reihenfolge von 0 bis x sein)
    container_id: 3,            //Container ID (siehe INDEX)
    xml: "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"j,*?yA%koB@Xh9h$Gr4?\" x=\"170\" y=\"30\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"h/713UWclBW;6Xm0g3$;\">\n" +
    "        <field name=\"PREDICATE_NAME\">liste</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"=xy,%Xed$_}AWEYq^9q)\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_list\" id=\"!0UXERdo-UG~={^usQgi\">\n" +
    "        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_query\" id=\"7XupXxw+:DeI0$3B2YXV\">\n" +
    "        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "        <statement name=\"INPUT\">\n" +
    "          <block type=\"prolog_query_body\" id=\"Rds-?^jReQ1nQm$3TkVs\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <block type=\"prolog_fact\" id=\"KIZ:rQ)O*Xo${Z!-QJBS\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"Q2!Vd*WvaDjKe@ydSiny\">\n" +
    "                    <field name=\"PREDICATE_NAME\">liste</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"?.C_C9[LTRaMf]yml=4*\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_list\" id=\"2gE,Ey6#Wov:h+v7Mt89\">\n" +
    "                    <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_variable\" id=\"Iprr`9?^iPe|DQK!jOR_\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"Jv@d?gJ,h89DCee`U@!2\">\n" +
    "                            <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_fact\" id=\"W]{pDO$[BM1ukn~r/r!l\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"(?^Rv47F]q/Sq$-qsh7}\">\n" +
    "                        <field name=\"PREDICATE_NAME\">liste</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_list\" id=\"$EXu-S6Ln8~9VW;6`)x3\">\n" +
    "                        <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                        <statement name=\"LIST_ARG\">\n" +
    "                          <block type=\"prolog_variable\" id=\"]VE@I-5P0(AAPWS!A%:n\">\n" +
    "                            <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"cC(^l1Eb..$E=c,:k7)w\">\n" +
    "                                <field name=\"VARIABLE_NAME\">Y</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>"
};
