//// [templateStringsArrayTypeNotDefinedES5Mode.ts]
function f(x: TemplateStringsArray, y: number, z: number) {
}

f({}, 10, 10);

f `abcdef${ 1234 }${ 5678 }ghijkl`;

//// [templateStringsArrayTypeNotDefinedES5Mode.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        return Object.defineProperty(cooked, "raw", { value: raw });
    }
    cooked.raw = raw;
    return cooked;
};
function f(x, y, z) {
}
f({}, 10, 10);
f(_a || (_a = __makeTemplateObject(["abcdef", "", "ghijkl"], ["abcdef", "", "ghijkl"])), 1234, 5678);
var _a;
