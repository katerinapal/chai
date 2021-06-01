import imp_indexjs from "./";
export var globalExpect;
globalExpect = imp_indexjs.expect;

export function setGlobalExpect(value) {
  globalExpect = value;
}
