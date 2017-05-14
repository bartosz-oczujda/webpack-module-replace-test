import { Tester } from "./Tester";
import { TesterSubclass } from "./TesterSubclass";
declare let chai;

//Needed only for casting purposes if we add 
//new fuctionality to the replaced class
import { Tester as TestReplacer} from "../src_repl/Tester_repl"

//I want to replace this class with TestReplacer
//This is what NormalModuleReplacemntPlugin is doing in the webpack config
let test = new Tester();
let testSubclass = new TesterSubclass();

chai.assert.equal(test.getNum(), 55, "getNum returns proper value from replaced superclass");
chai.assert.equal(testSubclass.getNum(), 33, "getNum returns proper value from subclass");
chai.assert.equal((testSubclass as TestReplacer).getStr(), "Foo", "it's possible to add and use new methods");