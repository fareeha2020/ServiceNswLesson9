// const fs=require("fs");
// const path=require("path");
// fs.WriteFileSync(path.join(__dirname,"MyFile.txt"),"helloworld");
// //creates file text in this directory specified here and write data specified
// let myText=fs.readFileSync(path.join(__dirname,"MyFile.txt"));
// console.log(myText.toString());

const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, "MyFile.txt"), "HelloWorld");

let myText = fs.readFileSync(path.join(__dirname, "MyFile.txt"));
console.log(myText.toString())