import fs from "fs";
import path from "path";

// read file asynchronously
// fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
//   console.log(data);
// });

// fs.writeFile(path.join(__dirname, 'my-new-file.txt'), 'What is Good Son', 
// (err, data) => {
//   if(err) console.log(err);
//   console.log('Done wrote to my new file');
// }) 

// npx babel-node ./src/fs-examples/sync-methods.js to compile
// console.log(data);

// adds content to original file
// fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nGoodnight');

// fs.appendFile(path.join(__dirname, 'my-new-file.txt'), '\nI saw you yesterday', 
// (err, data) => {
//   err ? console.log(err) : console.log('I just appended to my file');
// })

// fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({message: "Hello!"}))

// append files asynchronously
// fs.appendFile(path.join(__dirname, 'my-json-file.json'), JSON.stringify({message: 'I just appended to json file'}),
// (err, data) => err ? console.log(err) : console.log("I did it"))

// delete files asynchronously
// fs.unlink(path.join(__dirname, 'my-new-file.txt'), err => err ? console.log(err) 
// : console.log('Just deleted my-new-text file'))


// create new directory asynchronously
// fs.mkdir(path.join(__dirname, 'my-new-directory'), err => err ? console.log(err) 
// : console.log("Created my directory"));

// create multiple directories asynchronously at one time if they don't exist
fs.mkdir(path.join(__dirname, 'my-parent-directory'), { recursive: true }, err => err ? consolo(err) 
: console.log("created two directories"))

// delete directory asynchronously
// fs.rmdir(path.join(__dirname, 'my-new-directory'), err => err ? console.log(err) 
// : console.log('Remove my directory'));

// returns a boolean whether a file exist
// const exampleExist = fs.existsSync(path.join(__dirname, 'example.txt'));
// console.log(exampleExist)

// list contents of directory
// const contents = fs.readdirSync(__dirname);
// console.log(contents)


// const stats = fs.lstatSync(path.join(__dirname, 'example.txt'));
// console.log(stats)
// console.log(stats.isFile())
// console.log(stats.isDirectory())

