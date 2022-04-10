const {uppercase, lowercase} = require("./string")

describe("Testing the string module", () => {

    test("Should uppercase a string input", () => {
        const result = uppercase("bob");
        expect(result).toBe("BOB");
    });

    test("Should lowercase a string input", () => {
        const result = lowercase("FULL SAIL");
        expect(result).toBe("full sail");
    });

});