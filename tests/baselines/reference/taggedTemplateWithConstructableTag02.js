//// [taggedTemplateWithConstructableTag02.ts]
interface I {
    new (...args: any[]): string;
    new (): number;
}
var tag: I;
tag `Hello world!`;

//// [taggedTemplateWithConstructableTag02.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        return Object.defineProperty(cooked, "raw", { value: raw });
    }
    cooked.raw = raw;
    return cooked;
};
var tag;
tag(_a || (_a = __makeTemplateObject(["Hello world!"], ["Hello world!"])));
var _a;
