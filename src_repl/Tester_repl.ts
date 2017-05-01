class TesterReplacer {
    constructor() {
        console.log("TesterReplacer")
    }

    getNum() {
        return 55
    }

    getStr() {
        return "Foo"
    }
}

export { TesterReplacer as Tester }