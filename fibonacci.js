// 1 1 2 3 5 8 13 21
'use strict';
// use const args inorder to use command line arguments
const args = process.argv.slice(2);

const generateFibonacci = howMany => {
  let x = 0,
      y = 1;
  let sum;
  let i = 0;
  for(i = 0; i < howMany; i++){
    sum = x + y;
    x = y;
    y = sum;
  }
  return y;
}
const howMany = args[0];
console.log(generateFibonacci(howMany));