import mod_indexjs from "./";
export var globalAssert;
globalAssert = mod_indexjs.assert;

export function setGlobalAssert(value) {
  globalAssert = value;
}
