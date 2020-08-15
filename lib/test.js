
// Actual tests will get implemented soon™️

const Defaults = require("./Main");

const Out = Defaults({
    a: {one: "one"},
    b: {three: "three"}
}, {
    a: {two: "two"},
    c: ["four"]
});

if (JSON.stringify(Out) === JSON.stringify({
    a: {one: "one", two: "two"}, b: {three: "three"}, c: ["four"]
}) === false) console.log("Tests failed");
else console.log("Test of Defaults passed!");
