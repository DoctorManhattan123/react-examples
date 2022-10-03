import {isEmpty, repeat, trim} from "./object"
import {repeatFunctionWithDifferentArgs1} from "./util"

test("isEmpty works on empty or undefined array", () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, "a"])).toBe(false);
})

test("repeat works on empty string, undefined string, 0 and NaN as a number", () => {
    // test dirty second argument
    expect(repeat("La", 0)).toBe("");
    expect(repeat("La", NaN)).toBe("");

    // test dirty first argument
    expect(repeat(undefined, 1)).toBe("");
    expect(repeat("", NaN)).toBe("");

    // test that the actually function is working
    expect(repeat("La", 4)).toBe("LaLaLaLa");
})

test("trim string", () => {
    expect(repeatFunctionWithDifferentArgs1(trim, [undefined, null, ""], 3)).toStrictEqual(["", "", ""]);
    expect(repeatFunctionWithDifferentArgs1(trim, ["abc", "  abc", "abc   ", "   abc    "], 4)).toStrictEqual(["abc", "abc", "abc", "abc"]);
})

/**
 * Do these tests with mock/stubbed functions.
 */
test("test repeat function multiple times with different args 1", () => {
    expect(repeatFunctionWithDifferentArgs1(trim, ["abc", "abc", " abc"], 3)).toStrictEqual(["abc", "abc", "abc"]);
    expect(repeatFunctionWithDifferentArgs1(trim, ["abc", " abc"], 3)).toStrictEqual(["abc", "abc", "abc"]);
})