// fs - File System
// Using fs built-in module, we can create folders. 
// Read or write to files.

const fs = require('fs');

// read file
  fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    console.log(data)
  });

// writing to a file.
fs.writeFile('test.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('saved');
});

// appending to a file. if the file doesn't exists, the file will be created.
fs.appendFile('test.txt', ' This is my text.', (err) => {
  if (err) throw err;
  console.log('updated');
});

// delete file
fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('file deleted');
});

// remove the directory
const dir = "/test"
fs.rmdir(dir, err => {
  if (err) throw err;
  console.log(`${dir} is deleted`);
});

// const fs = require("fs").promises;

// fs.readFile("test.js", "utf8").then((data) => console.log(data));
