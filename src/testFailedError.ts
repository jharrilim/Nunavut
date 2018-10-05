export class TestFailedError extends Error {
    constructor(msg: string) {
        super(msg || "Test Failed.");
    }
}