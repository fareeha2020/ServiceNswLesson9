// File System
// Create a function that takes 2 arguments. The first should be a file name and the second should be content. The function should create a file with the given name in the current directory with content equal to the content argument
const fs = require("fs");
const path = require("path");
//writing to a file using file system and its writeFileSync method
function writeFile(fileName,content){
return fs.writeFileSync(path.join(__dirname, "fileName.txt"), content);}

writeFile("Myfile.txt","Hi World 2020");

// Create a function that takes 1 argument, a file name. The function should return a string that is the whole file.
function  returnFileContent(fileName){
    //reading from a file using file system and its readFileSync method
return fs.readFileSync(path.join(__dirname, fileName));
}
console.log(returnFileContent("MyFile.txt").toString());

//JSON
// Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. Create an instance method that returns a json string representing the object.
class Student{
    constructor(firstName, lastName, age, grades){
       this.firstName= firstName;
         this.lastName=lastName;
          this.age=age;
         this.grades= grades;
    
    }
    //create instance method works on single object as it is referred by object
    //static can work on many objects as referrred by class
     objectToJsonString(student){
      return JSON.stringify(student);
    }    

// Create a static method that takes a json string representing the object and returns a new instance of student
static returnObject(stg){
    return JSON.parse(stg);
}
}
let student1=new Student("far","fari",22,[22,23,34,45]);
console.log("object to JSON convert using JSON.stringify is below:")
console.log(student1.objectToJsonString(student1));


let stg="{\"firstName\":\"Luke\",\"lastName\":\"Parker\",\"age\":23}"
console.log("json to object convert using JSON.parse is below:")
console.log(Student.returnObject(stg));


