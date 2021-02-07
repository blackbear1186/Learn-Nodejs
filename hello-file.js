const fs = require('fs');

fs.writeFile('hello.txt', 'Hello World!', (err) => {
    console.log('Done');
})