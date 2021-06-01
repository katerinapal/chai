import mod_indexjs from "./";
export var globalExpect;
globalExpect = mod_indexjs.expect;

export function setGlobalExpect(value) {
  globalExpect = value;
}
