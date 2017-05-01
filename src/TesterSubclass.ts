import { Tester } from "./Tester";

class TesterSubclass extends Tester {
    constructor() {
        super()
        console.log("TesterSubclass")
    }

    /*getNum(): number {
        return 33
    }*/
}

export { TesterSubclass }