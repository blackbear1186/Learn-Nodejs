const chalk = require('chalk');

// create an array of colors 
const fontColors = [
  'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 
]

module.exports.colorfulLog = (string) => {
  const colorString = string.split(' ')
    .map(word => {
      const randomColorIndex = Math.floor(Math.random() * fontColors.length);
      const randomColor = fontColors[randomColorIndex];
      return chalk[randomColor](word);
    })
    .join(' ');

  console.log(colorString);
}