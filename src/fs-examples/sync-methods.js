import fs from "fs";
import path from "path";

// read file synchronously add full path and encoding: utf8 and store in data
// add dirname to get full path up until example.txt
// const data = fs.readFileSync(__dirname + '/example.txt', 'utf8');

// import path and add path.join and not worry about slashes
// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');

// npx babel-node ./src/fs-examples/sync-methods.js to compile
// console.log(data);

// write to file but when writing a second time it overwrites the file
// fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'What', 'utf8');
// fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'Goodbye');

// adds content to original file
// fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nGoodnight');

// fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({message: "Hello!"}))

// delete files
// fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));

// create directory
// fs.mkdirSync(path.join(__dirname, 'my-directory'));

// create multiple directories at one time if they don't exist
// fs.mkdirSync(path.join(__dirname, "my-parent-directory", "my-directory"), {
//   recursive: true });

// remove directory
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

// returns a boolean whether a file exist
// const exampleExist = fs.existsSync(path.join(__dirname, 'example.txt'));
// console.log(exampleExist)

// list contents of directory
// const contents = fs.readdirSync(__dirname);
// console.log(contents)


const stats = fs.lstatSync(path.join(__dirname, 'example.txt'));
console.log(stats)
console.log(stats.isFile())
console.log(stats.isDirectory())

