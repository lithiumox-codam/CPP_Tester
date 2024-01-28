import { $ } from "bun"

const test_strings_ex00 = [
    "I like Javascript",
    "Hey!    het is een test",
    "   Dit is een test",
    "   Dit is een test   ",
    "   Dit is een test   ",
]

export async function ex00(): Promise<Boolean> {
    const no_args = await $`../00/ex00/megaphone`.text()
    if (no_args !== "* LOUD AND UNBEARABLE FEEDBACK NOISE *") {
        console.error("ex00: no arguments test failed")
        process.exit(1)
    }

    for (const str of test_strings_ex00) {
        const result = await $`../00/ex00/megaphone ${str}`.text()
        let expected = str.toUpperCase()
        expected += "\n"
        if (result !== expected) {
            console.error(`ex00: test failed for string: ${str}`)
            return false
        }
    }
    return true
}
