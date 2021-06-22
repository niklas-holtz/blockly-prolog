'use strict';
/**
 * Diese Datei enthält alle Beispiele des Editors.
 */

goog.provide('PrologParser.EXAMPLES');

PrologParser.EXAMPLES = [];

PrologParser.EXAMPLES['Großvater-Regel'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"P*?W@(#?abJ$JrnLijP}\" x=\"110\" y=\"70\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"0,D|gD)vISHu+mC0(X]J\">\n" +
    "        <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"(D!e,HP/C%^_c.)bW7J#\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_constant\" id=\".*+t?*zGqEt6)k~!H}85\">\n" +
    "        <field name=\"CONSTANT_NAME\">bob</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_constant\" id=\"G`+Xe(,K{9|*G#e4_~=R\">\n" +
    "            <field name=\"CONSTANT_NAME\">johnny</field>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\",en:s[IZ;ot,VAZEYY{|\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\")q58zcl?{y%9|6pce0!x\">\n" +
    "            <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"CjT|25OVPrc~j4Bg#Xbh\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_constant\" id=\"k+}@q[-Ur[N%TvxEmC-S\">\n" +
    "            <field name=\"CONSTANT_NAME\">johnny</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_constant\" id=\"VC]HS9{^IBWVAY=WHMAC\">\n" +
    "                <field name=\"CONSTANT_NAME\">karl</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_rule\" id=\"5e2S`LMRetW1eBpNI9)+\">\n" +
    "            <comment pinned=\"false\" h=\"80\" w=\"160\">Y ist genau dann der Großvater von X, wenn es ein Z gibt, welches mit X und Y in einer Vater-Beziehung ist.</comment>\n" +
    "            <statement name=\"INPUT_HEAD\">\n" +
    "              <block type=\"prolog_rule_head_fact\" id=\"QI#;v|H5%(F)=E8Q70mq\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"hhTv`=*thN*l0kR!WQ(?\">\n" +
    "                    <field name=\"PREDICATE_NAME\">grossvater</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"[i@x`22(wJ.$M~,8$Yn!\">\n" +
    "                    <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"!e%~7SXN([3_I_Bm6[1N\">\n" +
    "                    <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"?U1sFC;QKCGi1m0$5f;z\">\n" +
    "                        <field name=\"VARIABLE_NAME\">Y</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <statement name=\"INPUT_BODY\">\n" +
    "              <block type=\"prolog_rule_body_con\" id=\"JudRVV12sDG_B]T-aVEu\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"XLND0iFt[{|5{2b~2Sz.\">\n" +
    "                    <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_fact\" id=\"JN99R,q^saIuCkF}wm=q\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"87C^jl=Vh}0X+/Bj9M_?\">\n" +
    "                        <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"(]OOlE%{5))?I)P/r:D3\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable\" id=\"@5q#SdF~|aPQOR~!!v6(\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"azB,bAFW8?bv3hy}Q|fQ\">\n" +
    "                            <field name=\"VARIABLE_NAME\">Z</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_fact\" id=\"m}e*MOJHt51G8Bc8%RUz\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"0}dsl}il:9.6so~3pLyk\">\n" +
    "                            <field name=\"PREDICATE_NAME\">vater</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable\" id=\"NWOG:,#fh(go;zt=-+A=\">\n" +
    "                            <field name=\"VARIABLE_NAME\">Z</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"))84to:x.^!F.[:N9Rnb\">\n" +
    "                                <field name=\"VARIABLE_NAME\">Y</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_query\" id=\"g[cd1s_6vA7/#gWnRa4=\" deletable=\"false\">\n" +
    "                <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                <statement name=\"INPUT\">\n" +
    "                  <block type=\"prolog_query_body\" id=\"rWyydkU^`5#hnCEa[kY_\" deletable=\"false\" movable=\"false\">\n" +
    "                    <field name=\"OPERATOR\">AND</field>\n" +
    "                    <statement name=\"ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"loZ)X]${63~0k*SN(`~b\">\n" +
    "                        <field name=\"TEXT\">Fakten, Konstanten, Vergleiche, Konnektoren, Operatoren und Listen ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_fact\" id=\"#3D_eB7CgOhn@!M|Ge55\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"(vNCR[//2DjwR9fE{@yx\">\n" +
    "                            <field name=\"PREDICATE_NAME\">grossvater</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_constant\" id=\"E9)XbQB;egd;()?MIPCB\">\n" +
    "                            <field name=\"CONSTANT_NAME\">bob</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_constant\" id=\"(ai:i!=6/2oeP:+k(C9b\">\n" +
    "                                <field name=\"CONSTANT_NAME\">karl</field>\n" +
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
    "</xml>";

PrologParser.EXAMPLES['Member-Regel'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"ystw0v@@2l)$yqd^9`I7\" x=\"110\" y=\"90\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"W*}49o=:=xI[-y2niLoi\">\n" +
    "        <field name=\"PREDICATE_NAME\">member</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"tq%JzX8;/etjOzihCl.-\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_variable\" id=\"-Ko]e:.aq|Y{6ZPJV86Z\">\n" +
    "        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_list\" id=\"%Am,J%8qxc*iLRrZU0QY\">\n" +
    "            <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "            <statement name=\"LIST_ARG\">\n" +
    "              <block type=\"prolog_variable\" id=\"8Vs[tff`yIR8O[njXr_F\">\n" +
    "                <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_variable\" id=\")vL3q[XOO?{nS0PW#Ix;\">\n" +
    "                    <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_rule\" id=\"_A]V1,cw-sXK7-:IdYEG\">\n" +
    "        <comment pinned=\"false\" h=\"80\" w=\"160\">Member-Regel.</comment>\n" +
    "        <statement name=\"INPUT_HEAD\">\n" +
    "          <block type=\"prolog_rule_head_fact\" id=\"5acJz`vYX$obny-$Eos[\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"o+0wqg2+UioIG(*+BTju\">\n" +
    "                <field name=\"PREDICATE_NAME\">member</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"DS#Ao-N?sbZ(#a}`YMj_\">\n" +
    "                <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_variable\" id=\"^qZ9Pdwg#0XfCO36E+wk\">\n" +
    "                <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_list\" id=\"=|f~ou3r3T)kKo%0N0_^\">\n" +
    "                    <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_variable\" id=\"PM%QW(8~?YxTcuS7:K6p\">\n" +
    "                        <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"%3/jV=fF%zd/DZVVB{8-\">\n" +
    "                            <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <statement name=\"INPUT_BODY\">\n" +
    "          <block type=\"prolog_rule_body_con\" id=\"7%.9xcY(U[1V@xvPJltq\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"g%B~y,[]h-IPzQ/!Tb(h\">\n" +
    "                <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_fact\" id=\"Gm}:80yc+`fv7-e~X,d+\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"(Di6PR_qsHn4DLioLBv-\">\n" +
    "                    <field name=\"PREDICATE_NAME\">member</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"Ku-(b[I^(0YZu7j,h59)\">\n" +
    "                    <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\",r@hu^BYSQ5*;D_c@d67\">\n" +
    "                        <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_query\" id=\"g[cd1s_6vA7/#gWnRa4=\" deletable=\"false\">\n" +
    "            <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "            <statement name=\"INPUT\">\n" +
    "              <block type=\"prolog_query_body\" id=\"rWyydkU^`5#hnCEa[kY_\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"p|(im0dt]zL@zx|jhqAU\">\n" +
    "                    <field name=\"TEXT\">Fakten, Konstanten, Vergleiche, Konnektoren, Operatoren und Listen ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_fact\" id=\"|=AXF+k8ora5;9zP^$t/\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"?ilaY]fL.,v6_j@]fNx1\">\n" +
    "                        <field name=\"PREDICATE_NAME\">member</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"9=0j6aBnFM~IpO+~^L9j\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_constant\" id=\"gmRmB=1ATOM%+Fd^e;[,\">\n" +
    "                        <field name=\"CONSTANT_NAME\">berta</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_list\" id=\"`#n?7ByeQrR8q^(%(zUT\">\n" +
    "                            <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                            <statement name=\"LIST_ARG\">\n" +
    "                              <block type=\"prolog_constant\" id=\"kEDKr/bI9?*Ij%6p~a,X\">\n" +
    "                                <field name=\"CONSTANT_NAME\">anton</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_constant\" id=\"W3Wk-:=gB/miy(]ipx2y\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">berta</field>\n" +
    "                                    <next>\n" +
    "                                      <block type=\"prolog_constant\" id=\";V}IAcA{|$Z_fUj-(De=\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">caesar</field>\n" +
    "                                      </block>\n" +
    "                                    </next>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
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
    "</xml>";

PrologParser.EXAMPLES['Negier-Funktion'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_rule\" id=\"=%C@y0~1tkBm8JUPAaI.\" x=\"250\" y=\"110\">\n" +
    "    <comment pinned=\"false\" h=\"80\" w=\"160\">neg(A) ist dann erfolgreich, wenn die Ausführung von A scheitert.</comment>\n" +
    "    <statement name=\"INPUT_HEAD\">\n" +
    "      <block type=\"prolog_rule_head_fact\" id=\"g}fM|B2Ww2VLR,7SDv|5\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"?nFGxx:7Nle%4j*bZ=|y\">\n" +
    "            <field name=\"PREDICATE_NAME\">neg</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"DNI.n)B4V9+kYb#P@32a\">\n" +
    "            <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_variable\" id=\"HDh72UG-`6gc3.Iv@[v_\">\n" +
    "            <field name=\"VARIABLE_NAME\">A</field>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <statement name=\"INPUT_BODY\">\n" +
    "      <block type=\"prolog_rule_body_con\" id=\"F|#hH}ASOXgY5Auniv7T\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"oCF6x][*^LZ=+@jy/sSJ\">\n" +
    "            <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_variable\" id=\":suj/ZXis41?(7#(-:3W\">\n" +
    "            <field name=\"VARIABLE_NAME\">A</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_cut_fail\" id=\"FF_C,.4EgdX|AdTb@lj6\">\n" +
    "                <field name=\"OPERATOR\">CUT</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_cut_fail\" id=\"7CU]*?Fk7k1cKDjuyNlz\">\n" +
    "                    <field name=\"OPERATOR\">FAIL</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"~/k1KXOvX]j26HVEhG8n\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"xRb{KsT)UAi|:/enJ7SZ\">\n" +
    "            <field name=\"PREDICATE_NAME\">neg</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"UBp!H=BI8N=6^;{ScdCt\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_variable\" id=\"zD$,76Pi6;@we[@/4oR^\">\n" +
    "            <field name=\"VARIABLE_NAME\">A</field>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_fact\" id=\"|,{?4ZPO=VuGH8U`1x,P\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"p6!fG}O=u3@^zA.IcrEt\">\n" +
    "                <field name=\"PREDICATE_NAME\">hund</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"Kgku6W^HUzKZ}0of8,y+\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_constant\" id=\"F6L5|);(DGE@qWeSn@0Y\">\n" +
    "                <field name=\"CONSTANT_NAME\">snoopy</field>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_fact\" id=\"m{P@Uka[.:Bq+^dM]#RP\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"@e2T~**uG0_WR+KXjc7.\">\n" +
    "                    <field name=\"PREDICATE_NAME\">hund</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_constant\" id=\"K~a6+2]RFw6lb-T!{x1F\">\n" +
    "                    <field name=\"CONSTANT_NAME\">pluto</field>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_fact\" id=\"Q{?sv)Vx_}OMpHv:v!C`\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"cs8IpEg_KG$/3k1@6SE0\">\n" +
    "                        <field name=\"PREDICATE_NAME\">katze</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_constant\" id=\"GItDY5u|N(7A]|Hj]oL3\">\n" +
    "                        <field name=\"CONSTANT_NAME\">garfield</field>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_query\" id=\"g[cd1s_6vA7/#gWnRa4=\" deletable=\"false\">\n" +
    "                        <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                        <statement name=\"INPUT\">\n" +
    "                          <block type=\"prolog_query_body\" id=\"rWyydkU^`5#hnCEa[kY_\" deletable=\"false\" movable=\"false\">\n" +
    "                            <field name=\"OPERATOR\">AND</field>\n" +
    "                            <statement name=\"ARGS\">\n" +
    "                              <shadow type=\"info_block_statement\" id=\"j=kqx5)MN$]i.5eq5UDb\">\n" +
    "                                <field name=\"TEXT\">Fakten, Konstanten, Vergleiche, Konnektoren, Operatoren und Listen ..</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_fact\" id=\"DfmLzTqW]Vn.ndMnZ|o=\">\n" +
    "                                <value name=\"PREDICATE\">\n" +
    "                                  <block type=\"prolog_predicate\" id=\"+[K~iX!-G-wBBMC}xF@J\">\n" +
    "                                    <field name=\"PREDICATE_NAME\">neg</field>\n" +
    "                                  </block>\n" +
    "                                </value>\n" +
    "                                <statement name=\"FACT_ARGS\">\n" +
    "                                  <shadow type=\"info_block_statement\" id=\"E9Dl.Mhxu#N=gB_-#SBI\">\n" +
    "                                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                                  </shadow>\n" +
    "                                  <block type=\"prolog_fact\" id=\"NE~cO@LUO9$iCdRP;eiI\">\n" +
    "                                    <value name=\"PREDICATE\">\n" +
    "                                      <block type=\"prolog_predicate\" id=\"qll72h#=l9CT(t.7NlD?\">\n" +
    "                                        <field name=\"PREDICATE_NAME\">katze</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <statement name=\"FACT_ARGS\">\n" +
    "                                      <shadow type=\"info_block_statement\" id=\"B=V%B,-SReW;vu`D[v[D\">\n" +
    "                                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_constant\" id=\"0QQl`mjUev8lV4a9i5me\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">pluto</field>\n" +
    "                                      </block>\n" +
    "                                    </statement>\n" +
    "                                  </block>\n" +
    "                                </statement>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_query\" id=\"Za00G%FJgE`E}B6ZP;7z\" deletable=\"false\">\n" +
    "                            <field name=\"QUERY_ACTIVE\">FALSE</field>\n" +
    "                            <statement name=\"INPUT\">\n" +
    "                              <block type=\"prolog_query_body\" id=\"aKg=jxd0aKd,udnnsk}a\" deletable=\"false\" movable=\"false\">\n" +
    "                                <field name=\"OPERATOR\">AND</field>\n" +
    "                                <statement name=\"ARGS\">\n" +
    "                                  <block type=\"prolog_fact\" id=\"WzD7ZgAovzvZJ_!|UM^K\">\n" +
    "                                    <value name=\"PREDICATE\">\n" +
    "                                      <block type=\"prolog_predicate\" id=\"U+C:x_HGyr_L%~?ZICoM\">\n" +
    "                                        <field name=\"PREDICATE_NAME\">neg</field>\n" +
    "                                      </block>\n" +
    "                                    </value>\n" +
    "                                    <statement name=\"FACT_ARGS\">\n" +
    "                                      <shadow type=\"info_block_statement\">\n" +
    "                                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                                      </shadow>\n" +
    "                                      <block type=\"prolog_fact\" id=\"*bcKh#x5H3cBh}n5~eN~\">\n" +
    "                                        <value name=\"PREDICATE\">\n" +
    "                                          <block type=\"prolog_predicate\" id=\"K`5L])Br#L/=c*Vrpx{I\">\n" +
    "                                            <field name=\"PREDICATE_NAME\">katze</field>\n" +
    "                                          </block>\n" +
    "                                        </value>\n" +
    "                                        <statement name=\"FACT_ARGS\">\n" +
    "                                          <shadow type=\"info_block_statement\" id=\"wa(O8?K8#Y%kGFJtj?I8\">\n" +
    "                                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                                          </shadow>\n" +
    "                                          <block type=\"prolog_variable\" id=\"coal?POR`,$_unS!=~}L\">\n" +
    "                                            <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                                          </block>\n" +
    "                                        </statement>\n" +
    "                                      </block>\n" +
    "                                    </statement>\n" +
    "                                  </block>\n" +
    "                                </statement>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                            <next>\n" +
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
    "        </next>\n" +
    "      </block>\n" +
    "    </next>\n" +
    "  </block>\n" +
    "</xml>";

PrologParser.EXAMPLES['Powerset-Funktion'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"!wjK,ry{3Wm!AY/lW-7?\" collapsed=\"true\" x=\"130\" y=\"50\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"S`]q64c8|@rdr}xPHkcA\">\n" +
    "        <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"Vr~b-ELH6a!r_ET@goRI\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_list\" id=\"NvDR(p.bWv^vdPSq3(He\">\n" +
    "        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_list\" id=\"/#/)HSEXvVQCC-t^tu8!\">\n" +
    "            <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_rule\" id=\"v!NPo?rX-!eJtiiA7D[$\" collapsed=\"true\">\n" +
    "        <comment pinned=\"false\" h=\"80\" w=\"160\">Potenzmengen-Funktion!</comment>\n" +
    "        <statement name=\"INPUT_HEAD\">\n" +
    "          <block type=\"prolog_rule_head_fact\" id=\"K,y*t;S|7eNf75/5Q=Q}\" deletable=\"false\" movable=\"false\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"pB2u.ILSz,qn=A{laA4N\">\n" +
    "                <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"?Q5cIJIB$j=XxETgA0$^\">\n" +
    "                <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_list\" id=\"M_pt~!)c5zL~d/:e58#y\">\n" +
    "                <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                <statement name=\"LIST_ARG\">\n" +
    "                  <block type=\"prolog_variable\" id=\"DtM1c*qj+dIF3E}`Edr|\">\n" +
    "                    <field name=\"VARIABLE_NAME\">_</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"avj(E3{lCtNb|Bw]jNio\">\n" +
    "                        <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_variable\" id=\"?Qh]B-IDlvk_RwLpagE4\">\n" +
    "                    <field name=\"VARIABLE_NAME\">P</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <statement name=\"INPUT_BODY\">\n" +
    "          <block type=\"prolog_rule_body_con\" id=\":%j}KM#m{eRGO{Cb29~F\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"ZKg}S9ryUeM8DFJe?Q4A\">\n" +
    "                <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_fact\" id=\"7AGph3BH};cU%RZO(n/W\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"BFlG$,uK?UOep(A8eJ9(\">\n" +
    "                    <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"rLwKjc:j)NDLp(;Z]B6(\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"%v_h}7oad%R3lR4ShMoC\">\n" +
    "                    <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"cCvv}OzKRQ^+v@_ctvA;\">\n" +
    "                        <field name=\"VARIABLE_NAME\">P</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_rule\" id=\"@nooJv4NfyI|a%T}hj$s\" collapsed=\"true\">\n" +
    "            <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "            <statement name=\"INPUT_HEAD\">\n" +
    "              <block type=\"prolog_rule_head_fact\" id=\":`=wHmfWU$+3?SuX0*cj\" deletable=\"false\" movable=\"false\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"NXEQF8W_H[:zsD}WFv!l\">\n" +
    "                    <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\">\n" +
    "                    <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_list\" id=\"k+gf]hz9c+F%/=N_xwWR\">\n" +
    "                    <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_variable\" id=\"QlPZ27wM[4D?Cxk?G_^d\">\n" +
    "                        <field name=\"VARIABLE_NAME\">H</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"m0#J#SM0}#OU+DOYGqBg\">\n" +
    "                            <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_list\" id=\"OyH2wM@dfOXGk-c4R`E-\">\n" +
    "                        <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                        <statement name=\"LIST_ARG\">\n" +
    "                          <block type=\"prolog_variable\" id=\",bGG}t-*b[Kf}G%3Xo|D\">\n" +
    "                            <field name=\"VARIABLE_NAME\">H</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"PL|mc;l(mri}pmL1h1NX\">\n" +
    "                                <field name=\"VARIABLE_NAME\">P</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <statement name=\"INPUT_BODY\">\n" +
    "              <block type=\"prolog_rule_body_con\" id=\"JBr_#8k;`.s00p23!rCY\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"7z[DZs|JT$C}d|yY@bvX\">\n" +
    "                    <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_fact\" id=\"0_2hXbV@#fpV%O*.txkv\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\";KEob)41,/R9E[4nOBc@\">\n" +
    "                        <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable\" id=\"Zz$vrE~yc[*sgnTg~M^|\">\n" +
    "                        <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"o].C,C#:6f@*^$d@Ce)~\">\n" +
    "                            <field name=\"VARIABLE_NAME\">P</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_query\" id=\"o;+)UK,Y,r#XPZ@gPb=K\">\n" +
    "                <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "                <statement name=\"INPUT\">\n" +
    "                  <block type=\"prolog_query_body\" id=\"=6Qg/miRA}2FUWjsz[w,\" deletable=\"false\" movable=\"false\">\n" +
    "                    <field name=\"OPERATOR\">AND</field>\n" +
    "                    <statement name=\"ARGS\">\n" +
    "                      <block type=\"prolog_fact\" id=\"pE#)V}ZG?;QHGZg[1IHr\">\n" +
    "                        <value name=\"PREDICATE\">\n" +
    "                          <block type=\"prolog_predicate\" id=\"Li1It3)Mr_|}?={.WC*i\">\n" +
    "                            <field name=\"PREDICATE_NAME\">powerset</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <statement name=\"FACT_ARGS\">\n" +
    "                          <shadow type=\"info_block_statement\">\n" +
    "                            <field name=\"TEXT\">Terme ..</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_list\" id=\"CjPa$T!^@*X!ru{o_ohV\">\n" +
    "                            <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                            <statement name=\"LIST_ARG\">\n" +
    "                              <block type=\"prolog_constant\" id=\"RzO#8=PM]H`P;myrKfzp\">\n" +
    "                                <field name=\"CONSTANT_NAME\">1</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_constant\" id=\".Y3#.|+5m$t[fD2Z$m96\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">2</field>\n" +
    "                                    <next>\n" +
    "                                      <block type=\"prolog_constant\" id=\"^fK3=}Y]5(/@;pDk`fmf\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">3</field>\n" +
    "                                      </block>\n" +
    "                                    </next>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"h)rbAWi)d%=T$+4o;?cq\">\n" +
    "                                <field name=\"VARIABLE_NAME\">X</field>\n" +
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
    "</xml>";

PrologParser.EXAMPLES['Listenlängen'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"=_xZM9gqqw%Z@GohaEDq\" x=\"30\" y=\"10\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"KpOu+i[(y98I_*.uf;9B\">\n" +
    "        <field name=\"PREDICATE_NAME\">length</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"LlvhyB%YM4(i`T@]SQ~z\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_list\" id=\"%D%mQfjF}lH9Yq3L;Sge\">\n" +
    "        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_constant\" id=\"jI]c.qD?J,6oc5+UX3J5\">\n" +
    "            <field name=\"CONSTANT_NAME\">0</field>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_rule\" id=\"X5}=8[~LIwa(W}L?uxIS\">\n" +
    "        <comment pinned=\"false\" h=\"80\" w=\"160\">Länge einer Liste.</comment>\n" +
    "        <statement name=\"INPUT_HEAD\">\n" +
    "          <block type=\"prolog_rule_head_fact\" id=\"N*0+f]@45E~b9KfuTyex\" deletable=\"false\" movable=\"false\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"K2:CI6QjLc%Il/h0w*/j\">\n" +
    "                <field name=\"PREDICATE_NAME\">length</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"WKFuAttW+W.tQc6T5U-:\">\n" +
    "                <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_list\" id=\"3V!c3!7R=(1`e^l+CVEL\">\n" +
    "                <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                <statement name=\"LIST_ARG\">\n" +
    "                  <block type=\"prolog_variable\" id=\"58+d(;ObEr44@PV4e8AF\">\n" +
    "                    <field name=\"VARIABLE_NAME\">H</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"77.B5*1.kBV8mhax~iO;\">\n" +
    "                        <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_variable\" id=\"wSk#B$#-pDQ.u%R@ei@6\">\n" +
    "                    <field name=\"VARIABLE_NAME\">N</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <statement name=\"INPUT_BODY\">\n" +
    "          <block type=\"prolog_rule_body_con\" id=\"!T`C.}#c2F!-RpWMOKMc\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"*9X[7[7wrkn0wrn38L`i\">\n" +
    "                <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_fact\" id=\"cMa@NRXBc-Z.nGz5(b-n\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"J*fQxi?waYt|f*@qOX/_\">\n" +
    "                    <field name=\"PREDICATE_NAME\">length</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"c3ijOl.9lFpSC{hGWUq=\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"4|4t^F+ggfncwZBz|Yzo\">\n" +
    "                    <field name=\"VARIABLE_NAME\">T</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"z2n-@v;fLAx(}aEtO+az\">\n" +
    "                        <field name=\"VARIABLE_NAME\">N1</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_operation\" id=\"_Pko,n*V@K2]UrIx7O(g\">\n" +
    "                    <value name=\"OP_ARGS\">\n" +
    "                      <shadow type=\"prolog_math_operation\" id=\"FFep5IN?D%2iWcmpL6Tw\">\n" +
    "                        <field name=\"OPERATOR\">PLUS</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_is_operation\" id=\"k!fGu=iVa9PuF+z@v,IL\">\n" +
    "                        <value name=\"FIRST_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\"qr25JM8T!JnPEEma;X^T\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_variable_input\" id=\"k2M2Mu?+*$}r2S$hXT$M\">\n" +
    "                            <field name=\"VARIABLE_NAME\">N</field>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                        <value name=\"SECOND_ARG\">\n" +
    "                          <shadow type=\"info_block_input\" id=\",0{CT2s!1oCmaMyuLnz`\">\n" +
    "                            <field name=\"TEXT\">?</field>\n" +
    "                          </shadow>\n" +
    "                          <block type=\"prolog_math_operation\" id=\"c$QjZW}or.:g9NM~Kd.Z\">\n" +
    "                            <field name=\"OPERATOR\">PLUS</field>\n" +
    "                            <value name=\"FIRST_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"@E;HW9rFj#*|2qO2k}C@\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_variable_input\" id=\"#idJ@{Qz:k}gfsg8rXH@\">\n" +
    "                                <field name=\"VARIABLE_NAME\">N1</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                            <value name=\"SECOND_ARG\">\n" +
    "                              <shadow type=\"info_block_input\" id=\"?aDF`;5D~4HN5la+GBE{\">\n" +
    "                                <field name=\"TEXT\">?</field>\n" +
    "                              </shadow>\n" +
    "                              <block type=\"prolog_constant_input\" id=\"jo(KfiID[:jU@qpW;7c_\">\n" +
    "                                <field name=\"CONSTANT_NAME\">1</field>\n" +
    "                              </block>\n" +
    "                            </value>\n" +
    "                          </block>\n" +
    "                        </value>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_query\" id=\"fMg6W`9qq6NG4c(TK(P9\">\n" +
    "            <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "            <statement name=\"INPUT\">\n" +
    "              <block type=\"prolog_query_body\" id=\"Y?T%^bq-H7GO~d{7%bkm\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <block type=\"prolog_fact\" id=\"MR-D{Wfp3yJKjsh|jT4B\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"^|)gJMPnAs_Y)W(/0V01\">\n" +
    "                        <field name=\"PREDICATE_NAME\">length</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"akePS1t0IjBa$/f2~UPF\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_list\" id=\"Kz+;ll/06ej0.+lI$QXW\">\n" +
    "                        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                        <statement name=\"LIST_ARG\">\n" +
    "                          <block type=\"prolog_constant\" id=\"l79]h38E/ZY]DSmnq;c$\">\n" +
    "                            <field name=\"CONSTANT_NAME\">a</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_constant\" id=\"u[w[/M(G6la^H5AeE@fG\">\n" +
    "                                <field name=\"CONSTANT_NAME\">b</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_constant\" id=\"2`]=Gl1)Y[S.`w|j*LU_\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">c</field>\n" +
    "                                    <next>\n" +
    "                                      <block type=\"prolog_constant\" id=\"5pSwgdMB+InZLz~V3j-{\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">d</field>\n" +
    "                                      </block>\n" +
    "                                    </next>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"1zZj:@%=IKu*dHah=Nx@\">\n" +
    "                            <field name=\"VARIABLE_NAME\">Length</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
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
    "</xml>";

PrologParser.EXAMPLES['Listen-Verkettung'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_fact\" id=\"$0GB168}0z$mJ%DKl@7x\" x=\"70\" y=\"110\">\n" +
    "    <value name=\"PREDICATE\">\n" +
    "      <block type=\"prolog_predicate\" id=\"dx(MzKz=j@|lk:*9X,.T\">\n" +
    "        <field name=\"PREDICATE_NAME\">concatenate</field>\n" +
    "      </block>\n" +
    "    </value>\n" +
    "    <statement name=\"FACT_ARGS\">\n" +
    "      <shadow type=\"info_block_statement\" id=\"CL;jA[|KxnX6m)Taa%wV\">\n" +
    "        <field name=\"TEXT\">Terme ..</field>\n" +
    "      </shadow>\n" +
    "      <block type=\"prolog_list\" id=\"R^mxxX::_(oUC|z_j,F@\">\n" +
    "        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_variable\" id=\"Y`g4^Q9K+^nlVi|%`_.m\">\n" +
    "            <field name=\"VARIABLE_NAME\">L</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_variable\" id=\"(`I%m60GLg+5*(YbBu+L\">\n" +
    "                <field name=\"VARIABLE_NAME\">L</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </next>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_rule\" id=\"k/QPqwc-dR2xwSsA)^UK\">\n" +
    "        <comment pinned=\"false\" h=\"80\" w=\"160\">The goal concatenate(L1,L2,L3) is true if list L3 consists of the elements of list L1 concatenated with the elements of list L2.</comment>\n" +
    "        <statement name=\"INPUT_HEAD\">\n" +
    "          <block type=\"prolog_rule_head_fact\" id=\"6@TZws57{pK?:5EHvPN7\" deletable=\"false\" movable=\"false\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"nP4X*sgJe~a$M5g[/!?~\">\n" +
    "                <field name=\"PREDICATE_NAME\">concatenate</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"ucO}x=,:?t,ETMsX|(/_\">\n" +
    "                <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_list\" id=\"^Sa*gfqjF6k10,]ny%6/\">\n" +
    "                <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                <statement name=\"LIST_ARG\">\n" +
    "                  <block type=\"prolog_variable\" id=\"Hqp9C(Row,E98#|2PNd*\">\n" +
    "                    <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"c(h|%1;}ybTpqD?nk(}/\">\n" +
    "                        <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_variable\" id=\"D7SUfy%X=+kVHf[UpF)C\">\n" +
    "                    <field name=\"VARIABLE_NAME\">L2</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_list\" id=\"+Jne)oYxe]N[wZX02B|A\">\n" +
    "                        <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                        <statement name=\"LIST_ARG\">\n" +
    "                          <block type=\"prolog_variable\" id=\"1OS^`@8dF0`yA44MevT5\">\n" +
    "                            <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"e?Y}Q2nCO~lKYtr`8@FO\">\n" +
    "                                <field name=\"VARIABLE_NAME\">L3</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <statement name=\"INPUT_BODY\">\n" +
    "          <block type=\"prolog_rule_body_con\" id=\"WCUpJ$+|AKM{V=~lY-77\" deletable=\"false\" movable=\"false\">\n" +
    "            <field name=\"OPERATOR\">AND</field>\n" +
    "            <statement name=\"ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"O?9%bUT~:u_]~$+39Tu)\">\n" +
    "                <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_fact\" id=\"JALWVnK!H9Ex|@H!k=Hk\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"FeR5Q-X]s;e2Th=?3gO^\">\n" +
    "                    <field name=\"PREDICATE_NAME\">concatenate</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"zj3PvM(sPfi%|FqUvs1V\">\n" +
    "                    <field name=\"TEXT\">Terme ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_variable\" id=\"en/`Mu-h_O@m@v,C;)U;\">\n" +
    "                    <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"D%#t03pEU$o#@2GcN?GW\">\n" +
    "                        <field name=\"VARIABLE_NAME\">L2</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"Pz{@|dahzCbN*][cU0J`\">\n" +
    "                            <field name=\"VARIABLE_NAME\">L3</field>\n" +
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
    "  <block type=\"prolog_query\" id=\".@0[tJw4I:Dc#RbMIsNO\" x=\"370\" y=\"110\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"(RD].(X?3f4ywWhAik=v\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <block type=\"prolog_fact\" id=\";C=VZ-YiB1)rc|^Ql7W-\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"$AZL7bU)P!v(3.LcV@:S\">\n" +
    "                <field name=\"PREDICATE_NAME\">concatenate</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_list\" id=\"j$pBr|L-j?_A=syiVBz?\">\n" +
    "                <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                <statement name=\"LIST_ARG\">\n" +
    "                  <block type=\"prolog_constant\" id=\"%,y,bs^Rg+otp[:nF#j#\">\n" +
    "                    <field name=\"CONSTANT_NAME\">a</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_constant\" id=\"3Ll:;tx)je-_/KZg`_.S\">\n" +
    "                        <field name=\"CONSTANT_NAME\">b</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_list\" id=\"neR2v??UV8F#Jf2ZB4~I\">\n" +
    "                    <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_constant\" id=\"aj/.7|4MdZSFL[%/YcbE\">\n" +
    "                        <field name=\"CONSTANT_NAME\">c</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_constant\" id=\"Y.?ZhJ~ACZu!E7}AaVKF\">\n" +
    "                            <field name=\"CONSTANT_NAME\">d</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_list\" id=\"Jf;l77/yZgDU5vi_#3KA\">\n" +
    "                        <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                        <statement name=\"LIST_ARG\">\n" +
    "                          <block type=\"prolog_constant\" id=\"^(2:~GX.Pzq(9l8CO]Js\">\n" +
    "                            <field name=\"CONSTANT_NAME\">a</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_constant\" id=\"jvEi=zDEOmpvV7w/#Etf\">\n" +
    "                                <field name=\"CONSTANT_NAME\">b</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_constant\" id=\"9SdtRO-{1zya68E0Ru|g\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">c</field>\n" +
    "                                    <next>\n" +
    "                                      <block type=\"prolog_constant\" id=\")e.sV)_HFavY^|W1JWD3\">\n" +
    "                                        <field name=\"CONSTANT_NAME\">d</field>\n" +
    "                                      </block>\n" +
    "                                    </next>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </statement>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>";

PrologParser.EXAMPLES['Listen-Umkehrfunktion'] = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n" +
    "  <block type=\"prolog_rule\" id=\"=GV#W]oq(X)|AE02dDLR\" collapsed=\"true\" x=\"50\" y=\"30\">\n" +
    "    <comment pinned=\"false\" h=\"80\" w=\"160\">Describe this rule...</comment>\n" +
    "    <statement name=\"INPUT_HEAD\">\n" +
    "      <block type=\"prolog_rule_head_fact\" id=\").${ct]c1c,/--HRhETV\" deletable=\"false\" movable=\"false\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"9cFjXTYOd^_4I.;FiKCJ\">\n" +
    "            <field name=\"PREDICATE_NAME\">reverse</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"W-i=/scUe0U+tHK1w}kq\">\n" +
    "            <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_variable\" id=\"Vac0?Y?_vMyea^=Tc1.]\">\n" +
    "            <field name=\"VARIABLE_NAME\">L</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_variable\" id=\"%-Ld$!!KL+rLj_]N[8Oa\">\n" +
    "                <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <statement name=\"INPUT_BODY\">\n" +
    "      <block type=\"prolog_rule_body_con\" id=\"(mCDCT90BB4quC)%^kl2\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"8P`v@ZBd=@Li+B$N-%3o\">\n" +
    "            <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_fact\" id=\"[)|RiyAjEa[B.4GV-~tU\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"?8I/t9)laBU;hdj8UVTJ\">\n" +
    "                <field name=\"PREDICATE_NAME\">reverse_concatenate</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"Rj#rKSzw+D%}:-?PxstI\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_variable\" id=\"+HF.=tzI(92.Jmj/}_a=\">\n" +
    "                <field name=\"VARIABLE_NAME\">L</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_list\" id=\"*Crr*Lnw)WmI-OPKHw+n\">\n" +
    "                    <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"EwGrgtq[}K;Then~:=BD\">\n" +
    "                        <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "    <next>\n" +
    "      <block type=\"prolog_fact\" id=\"$0GB168}0z$mJ%DKl@7x\" collapsed=\"true\">\n" +
    "        <value name=\"PREDICATE\">\n" +
    "          <block type=\"prolog_predicate\" id=\"dx(MzKz=j@|lk:*9X,.T\">\n" +
    "            <field name=\"PREDICATE_NAME\">reverse_concatenate</field>\n" +
    "          </block>\n" +
    "        </value>\n" +
    "        <statement name=\"FACT_ARGS\">\n" +
    "          <shadow type=\"info_block_statement\" id=\"CL;jA[|KxnX6m)Taa%wV\">\n" +
    "            <field name=\"TEXT\">Terme ..</field>\n" +
    "          </shadow>\n" +
    "          <block type=\"prolog_list\" id=\"R^mxxX::_(oUC|z_j,F@\">\n" +
    "            <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "            <next>\n" +
    "              <block type=\"prolog_variable\" id=\"Y`g4^Q9K+^nlVi|%`_.m\">\n" +
    "                <field name=\"VARIABLE_NAME\">L</field>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_variable\" id=\"(`I%m60GLg+5*(YbBu+L\">\n" +
    "                    <field name=\"VARIABLE_NAME\">L</field>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </next>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "        <next>\n" +
    "          <block type=\"prolog_rule\" id=\"k/QPqwc-dR2xwSsA)^UK\">\n" +
    "            <comment pinned=\"false\" h=\"80\" w=\"160\">The goal concatenate(L1,L2,L3) is true if list L3 consists of the elements of list L1 concatenated with the elements of list L2.</comment>\n" +
    "            <statement name=\"INPUT_HEAD\">\n" +
    "              <block type=\"prolog_rule_head_fact\" id=\"6@TZws57{pK?:5EHvPN7\" deletable=\"false\" movable=\"false\">\n" +
    "                <value name=\"PREDICATE\">\n" +
    "                  <block type=\"prolog_predicate\" id=\"nP4X*sgJe~a$M5g[/!?~\">\n" +
    "                    <field name=\"PREDICATE_NAME\">reverse_concatenate</field>\n" +
    "                  </block>\n" +
    "                </value>\n" +
    "                <statement name=\"FACT_ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"ucO}x=,:?t,ETMsX|(/_\">\n" +
    "                    <field name=\"TEXT\">Dieser Fakt gilt ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_list\" id=\"^Sa*gfqjF6k10,]ny%6/\">\n" +
    "                    <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_variable\" id=\"Hqp9C(Row,E98#|2PNd*\">\n" +
    "                        <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"c(h|%1;}ybTpqD?nk(}/\">\n" +
    "                            <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_variable\" id=\"D7SUfy%X=+kVHf[UpF)C\">\n" +
    "                        <field name=\"VARIABLE_NAME\">L2</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_variable\" id=\"Pz{@|dahzCbN*][cU0J`\">\n" +
    "                            <field name=\"VARIABLE_NAME\">L3</field>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "            <statement name=\"INPUT_BODY\">\n" +
    "              <block type=\"prolog_rule_body_con\" id=\"WCUpJ$+|AKM{V=~lY-77\" deletable=\"false\" movable=\"false\">\n" +
    "                <field name=\"OPERATOR\">AND</field>\n" +
    "                <statement name=\"ARGS\">\n" +
    "                  <shadow type=\"info_block_statement\" id=\"O?9%bUT~:u_]~$+39Tu)\">\n" +
    "                    <field name=\"TEXT\">Wenn erfüllt ist ..</field>\n" +
    "                  </shadow>\n" +
    "                  <block type=\"prolog_fact\" id=\"JALWVnK!H9Ex|@H!k=Hk\">\n" +
    "                    <value name=\"PREDICATE\">\n" +
    "                      <block type=\"prolog_predicate\" id=\"FeR5Q-X]s;e2Th=?3gO^\">\n" +
    "                        <field name=\"PREDICATE_NAME\">reverse_concatenate</field>\n" +
    "                      </block>\n" +
    "                    </value>\n" +
    "                    <statement name=\"FACT_ARGS\">\n" +
    "                      <shadow type=\"info_block_statement\" id=\"zj3PvM(sPfi%|FqUvs1V\">\n" +
    "                        <field name=\"TEXT\">Terme ..</field>\n" +
    "                      </shadow>\n" +
    "                      <block type=\"prolog_variable\" id=\"en/`Mu-h_O@m@v,C;)U;\">\n" +
    "                        <field name=\"VARIABLE_NAME\">L1</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_list\" id=\"+Jne)oYxe]N[wZX02B|A\">\n" +
    "                            <field name=\"VERTICAL_BAR\">TRUE</field>\n" +
    "                            <statement name=\"LIST_ARG\">\n" +
    "                              <block type=\"prolog_variable\" id=\"1OS^`@8dF0`yA44MevT5\">\n" +
    "                                <field name=\"VARIABLE_NAME\">X</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_variable\" id=\"D%#t03pEU$o#@2GcN?GW\">\n" +
    "                                    <field name=\"VARIABLE_NAME\">L2</field>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </statement>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_variable\" id=\"e?Y}Q2nCO~lKYtr`8@FO\">\n" +
    "                                <field name=\"VARIABLE_NAME\">L3</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
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
    "  <block type=\"prolog_query\" id=\".@0[tJw4I:Dc#RbMIsNO\" x=\"430\" y=\"70\">\n" +
    "    <field name=\"QUERY_ACTIVE\">TRUE</field>\n" +
    "    <statement name=\"INPUT\">\n" +
    "      <block type=\"prolog_query_body\" id=\"(RD].(X?3f4ywWhAik=v\" deletable=\"false\" movable=\"false\">\n" +
    "        <field name=\"OPERATOR\">AND</field>\n" +
    "        <statement name=\"ARGS\">\n" +
    "          <block type=\"prolog_fact\" id=\";C=VZ-YiB1)rc|^Ql7W-\">\n" +
    "            <value name=\"PREDICATE\">\n" +
    "              <block type=\"prolog_predicate\" id=\"$AZL7bU)P!v(3.LcV@:S\">\n" +
    "                <field name=\"PREDICATE_NAME\">reverse</field>\n" +
    "              </block>\n" +
    "            </value>\n" +
    "            <statement name=\"FACT_ARGS\">\n" +
    "              <shadow type=\"info_block_statement\" id=\"e^;QY8(P^ym9*(Ei1rTj\">\n" +
    "                <field name=\"TEXT\">Terme ..</field>\n" +
    "              </shadow>\n" +
    "              <block type=\"prolog_list\" id=\"Jf;l77/yZgDU5vi_#3KA\">\n" +
    "                <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                <statement name=\"LIST_ARG\">\n" +
    "                  <block type=\"prolog_constant\" id=\"^(2:~GX.Pzq(9l8CO]Js\">\n" +
    "                    <field name=\"CONSTANT_NAME\">a</field>\n" +
    "                    <next>\n" +
    "                      <block type=\"prolog_constant\" id=\"jvEi=zDEOmpvV7w/#Etf\">\n" +
    "                        <field name=\"CONSTANT_NAME\">b</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_constant\" id=\"9SdtRO-{1zya68E0Ru|g\">\n" +
    "                            <field name=\"CONSTANT_NAME\">c</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_constant\" id=\")e.sV)_HFavY^|W1JWD3\">\n" +
    "                                <field name=\"CONSTANT_NAME\">d</field>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </next>\n" +
    "                  </block>\n" +
    "                </statement>\n" +
    "                <next>\n" +
    "                  <block type=\"prolog_list\" id=\"Ckv[4S`MC^OrdFgty2of\">\n" +
    "                    <field name=\"VERTICAL_BAR\">FALSE</field>\n" +
    "                    <statement name=\"LIST_ARG\">\n" +
    "                      <block type=\"prolog_constant\" id=\"lUC}_7Txu]2nWntiha(I\">\n" +
    "                        <field name=\"CONSTANT_NAME\">d</field>\n" +
    "                        <next>\n" +
    "                          <block type=\"prolog_constant\" id=\"on)9M_9t0muoH;Y{G32b\">\n" +
    "                            <field name=\"CONSTANT_NAME\">c</field>\n" +
    "                            <next>\n" +
    "                              <block type=\"prolog_constant\" id=\"PGd*i=j9OZiMQVRL%39G\">\n" +
    "                                <field name=\"CONSTANT_NAME\">b</field>\n" +
    "                                <next>\n" +
    "                                  <block type=\"prolog_constant\" id=\"tA(3Qp#8t-}iBbee4W#L\">\n" +
    "                                    <field name=\"CONSTANT_NAME\">a</field>\n" +
    "                                  </block>\n" +
    "                                </next>\n" +
    "                              </block>\n" +
    "                            </next>\n" +
    "                          </block>\n" +
    "                        </next>\n" +
    "                      </block>\n" +
    "                    </statement>\n" +
    "                  </block>\n" +
    "                </next>\n" +
    "              </block>\n" +
    "            </statement>\n" +
    "          </block>\n" +
    "        </statement>\n" +
    "      </block>\n" +
    "    </statement>\n" +
    "  </block>\n" +
    "</xml>";

