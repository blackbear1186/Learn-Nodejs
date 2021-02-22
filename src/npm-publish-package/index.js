const chalk = require('chalk');

// create an array of colors 
const fontColors = [
  'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'violet', 
]

module.exports.colorfulLog = (string, splitBy = ' ') => {
  const colorString = string.split(splitBy)
    .map(word => {
      const randomColorIndex = Math.floor(Math.random() * fontColors.length);
      const randomColor = fontColors[randomColorIndex];
      return chalk[randomColor](word);
    })
    .join(splitBy);

  console.log(colorString);
}