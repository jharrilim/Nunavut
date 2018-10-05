import { AssertionError } from "assert";

export class Assert {
    public static equal(actual: any, expected: any) {
        if (actual !== expected) {
            throw new AssertionError({
                actual:actual,
                expected: expected
            });
        }
    }
    public static true(eq: boolean) {
        return eq;
    }
    public static false(eq: boolean) {
        return !eq;
    }
}