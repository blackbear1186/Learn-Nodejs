import {sayHello, generateFibonacci} from './fibonacci.js';

sayHello();
console.log(generateFibonacci(10))

// import all functions from file
// import * as all from './fibonacci.js';

// all.sayHello();
// console.log(all.generateFibonacci(10))

const person = {
  name: {
    first: 'Berlin',
    last: 'Johnson',
  }
}

// optional chaining with babel
const first = person?.name?.first;
// normal way to destructure
// const {name} = person || {};
// const {first, last } = name || {};