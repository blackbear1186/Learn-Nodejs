"use strict";

var _fibonacci = require("./fibonacci.js");

var _person$name;

(0, _fibonacci.sayHello)();
console.log((0, _fibonacci.generateFibonacci)(10)); // import all functions from file
// import * as all from './fibonacci.js';
// all.sayHello();
// console.log(all.generateFibonacci(10))

var person = {
  name: {
    first: 'Berlin',
    last: 'Johnson'
  }
}; // optional chaining with babel

var first = person === null || person === void 0 ? void 0 : (_person$name = person.name) === null || _person$name === void 0 ? void 0 : _person$name.first; // normal way to destructure
// const {name} = person || {};
// const {first, last } = name || {};