import { TestFailedError } from "./testFailedError";
import { AssertionError } from "assert";

export class Test {
    private hasPassed: boolean = false;
    constructor(private testName: string, private testFunc: Function) {

    }

    public run() {
        try {
            this.testFunc();
        }
        catch(e) {
            e as AssertionError;
            throw new TestFailedError(e.message);
        }
    }
}