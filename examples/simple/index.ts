import * as test from "@pulumi/local-test";

const random = new test.Random("my-random", { length: 20 });

export const output = random.result;
