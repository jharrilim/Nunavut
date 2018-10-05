import { Test } from "./test";

export abstract class Suite {
    public static suiteName: string = Suite.constructor.name;
    private tests: Test[];

    constructor() {
        this.tests = new Array<Test>();
    }

    
}