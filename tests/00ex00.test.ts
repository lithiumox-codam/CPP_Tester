import { expect, test, describe } from "bun:test";
import { $ } from "bun";
import { test_dir } from "..";

const program = `${test_dir}/00/ex00/megaphone`;

describe("00/ex00", () => {
    test("no args", async () => {
        const res = await $`${program}`.text();
        expect(res).toBe("* LOUD AND UNBEARABLE FEEDBACK NOISE *");
    });
    test("hello world", async () => {
        const res = await $`${program} "hello world"`.text();
        expect(res).toBe("HELLO WORLD\n");
    });
    test("chars (alphanumeric)", async () => {
        const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const res = await $`${program} ${chars}`.text();
        expect(res).toBe(chars.toUpperCase() + "\n");
    });
    test("chars (non-alphanumeric)", async () => {
        const chars = "!@#$%^&*()_+{}[]|\\;':\",./<>?";
        const res = await $`${program} ${chars}`.text();
        expect(res).toBe(chars + "\n");
    });
    test("mixed", async () => {
        const chars = "hello world!@#$%^&*()_+{}[]|\\;':\",./<>?";
        const res = await $`${program} ${chars}`.text();
        expect(res).toBe("HELLO WORLD!@#$%^&*()_+{}[]|\\;':\",./<>?\n");
    });
});
