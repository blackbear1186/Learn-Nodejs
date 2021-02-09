// 1 1 2 3 5 8 13 21
"use strict";

export const sayHello = () => console.log('What Up');

export const generateFibonacci = (howMany) => {
  let x = 1,
    y = 1;
  let sequence = [x, y];

  Array(howMany)
    .fill()
    .forEach(() => {
      let sum = x + y;
      x = y;
      y = sum;
    });
  return sequence;
};
