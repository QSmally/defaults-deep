
// Actual tests will get implemented soon™️

const Defaults = require("./Main");

function Test(Output, Expected) {
    if (JSON.stringify(Output) !== JSON.stringify(Expected)) {
        console.error("Test failed. Got:");
        console.error(Output);
        console.error("While expected:");
        console.error(Expected);
    }
}

Test(Defaults({
    a: {one: "one"},
    b: {three: "three"}
}, {
    a: {two: "two"},
    c: ["four"]
}), {
    a: {one: "one", two: "two"}, b: {three: "three"}, c: ["four"]
});

Test(Defaults({
    a: {b: "c"},
    foo: "bar"
}, {
    a: {b: "not visible", d: "this got added"},
    foo: "not visible",
    e: {f: "this got added"},
    g: "and this too"
}), {
    a: {b: "c", d: "this got added"},
    foo: "bar",
    e: {f: "this got added"},
    g: "and this too"
});

Test(Defaults({
    a: [
        "foo",
        "bar"
    ],
    foo: "bar",
    a: {b: "c"}
}, {
    a: [],
    foo: "not visible",
    a: {b: "c"}
}), {
    a: ["foo", "bar"],
    foo: "bar",
    a: {b: "c"}
});
