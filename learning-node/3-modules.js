// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade') //This prints out 'the sum is: 15' even though it was not invoked

console.log(names)
sayHi('susan')
sayHi(names.henry)
sayHi(names.peter)