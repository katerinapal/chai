import imp_indexjs from "./";
export var globalAssert;
globalAssert = imp_indexjs.assert;

export function setGlobalAssert(value) {
  globalAssert = value;
}
