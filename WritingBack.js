//const fs = require("fs");
const path = require("path");
//const uuid = require("uuid");
//const Person=require("./Person");
////const Student=require("./Student");
//const Teacher=require("./Teacher");
const StudentDataReader=require("./StudentDataReader")

//Pass this Random in person class file as well
const  random=require("./Random")
let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));

console.log(_studentData.getStudent("aec7eaa7-aef8-4c1a-b4a0-1187b4758cd3"));
//console.log(_studentData.fileArray);

// let teachers = Teacher.generateRandomPeople(10);
// let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));

// console.log(teachers);
// console.log(students);

// console.log(teachers[0].getMyStudents(students));
// console.log(students[0].getTeacher(teachers));

// Make sure these are at the top of your file!
// const fs = require("fs");
// const path = require("path");
