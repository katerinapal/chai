import mod_indexjs from "./";
export var globalShould;
globalShould = mod_indexjs.should();

export function setGlobalShould(value) {
  globalShould = value;
}
