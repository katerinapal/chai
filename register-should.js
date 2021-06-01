import imp_indexjs from "./";
export var globalShould;
globalShould = imp_indexjs.should();

export function setGlobalShould(value) {
  globalShould = value;
}
