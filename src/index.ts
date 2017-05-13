import { Tester } from "./Tester";
import { TesterSubclass } from "./TesterSubclass";

//Needed only for casting purposes if we add 
//new fuctionality to the replaced class
import { Tester as TestReplacer} from "../src_repl/Tester_repl"

//I want to replace this class with TestReplacer
//This is what NormalModuleReplacemntPlugin is doing in the webpack config
let test = new Tester();
console.log(test.getNum());

let testSubclass = new TesterSubclass()
console.log(testSubclass.getNum())
console.log((testSubclass as TestReplacer).getStr())