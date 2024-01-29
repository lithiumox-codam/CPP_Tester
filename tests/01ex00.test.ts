import { expect, test, describe } from "bun:test";
import { $ } from "bun";
import { test_dir } from "..";

const program = `${test_dir}/01/ex00/zombie`

describe("01/ex00", () => {
    test("My personal main.cpp output", async () => {
        const res = await $`${program}`.text()
        expect(res).toBe("Geert BraiiiiiiinnnzzzZ...\nGeert is dead\nMees BraiiiiiiinnnzzzZ...\nKees BraiiiiiiinnnzzzZ...\nMees is dead\nKees is dead\n")
    });
});
