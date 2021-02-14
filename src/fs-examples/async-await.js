import fsBase from "fs";
// make promises available for file handling
const fs = fsBase.promises;
import path from "path";

// use async await to write read and delete files
const execute = async () => {
  await fs.writeFile(path.join(__dirname, 'example.txt'), 'Hello!');
  const data = await fs.readFile(path.join(__dirname, 'example.txt'), 'utf8')
  console.log(data);
  await fs.unlink(path.join(__dirname, 'example.txt'));
}
execute();
 
// npx babel-node ./src/fs-examples/sync-methods.js to compile
// console.log(data);

// use async await to append file
const execute = async () => {
  await fs.appendFile(path.join(__dirname, 'example.txt'), 'Son');
}
execute();

// create multiple directories at one time if they don't exist
const doIt = async () => {
  await fs.mkdir(path.join(__dirname, 'new-directory'), { recursive: true});
  await fs.rmdir(path.join(__dirname, 'new-directory'));
}
doIt();




