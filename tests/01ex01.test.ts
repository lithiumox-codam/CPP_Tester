import { expect, test, describe } from "bun:test";
import { $ } from "bun";
import { test_dir } from "..";

const program = `${test_dir}/01/ex01/zombie`

describe("01/ex01", () => {
    test("equal death to brainz ratio", async () => {
        const res = await $`${program}`.text()
        const brainzRegex = /BraiiiiiiinnnzzzZ\.\.\./g;
        const deadRegex = /dead/g;
        const brainz_count = (res.match(brainzRegex) || []).length;
        const dead_count = (res.match(deadRegex) || []).length;

        expect(brainz_count - dead_count).toBe(0)
    });

});
