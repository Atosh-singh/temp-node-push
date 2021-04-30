// CommonJS, every file is module (by default)

// Modules- Encapsulated Code (only Share minimum)

const names = require("./4-names.js");

const sayHi = require("./5-utils");

const data = require("./6-alternative-flavour");

require("./7-ming-grenade");
console.log(names);
sayHi("Nidhi");
sayHi(names.sunny);
sayHi(names.atosh);
