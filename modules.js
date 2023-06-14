// Modules

const { john, peter } = require("./names");
const sayHi = require("./utils");
const person = require("./alternative-flavor")
require("./mind-grenade")

sayHi("louis");
sayHi(john);
sayHi(peter);