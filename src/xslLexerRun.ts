// tslint:disable
import { BaseToken } from "./xpLexer";
import { XslLexer } from "./xslLexer";
import { Debug} from "./diagnostics";

// -------------
let testXslt: string =
`<xsl:t select=  "$abc + 28">`;
let testTitle = `declaration`;
let generateTest = false;
let timerOnly = false;
let flatten = true; // set true for vscode extension tokens
// =============

generateTest = timerOnly? false: generateTest;
let debugOn;
if (timerOnly) {
	debugOn = false;
	testXslt = testXslt.repeat(5000);
} else {
	debugOn = !generateTest;
}

let lexer: XslLexer = new XslLexer();
lexer.debug = debugOn;
lexer.flatten = flatten;
lexer.timerOn = timerOnly;

let tokens: BaseToken[] = lexer.analyse(testXslt);
if (flatten) {
	Debug.printTokenValues(testXslt, tokens);
}

