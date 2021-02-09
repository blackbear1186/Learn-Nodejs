// 1 1 2 3 5 8 13 21
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFibonacci = exports.sayHello = void 0;

var sayHello = function sayHello() {
  return console.log('What Up');
};

exports.sayHello = sayHello;

var generateFibonacci = function generateFibonacci(howMany) {
  var x = 1,
      y = 1;
  var sequence = [x, y];
  Array(howMany).fill().forEach(function () {
    var sum = x + y;
    x = y;
    y = sum;
  });
  return sequence;
};

exports.generateFibonacci = generateFibonacci;