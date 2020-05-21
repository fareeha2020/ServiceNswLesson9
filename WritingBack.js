//const fs = require("fs");
const path = require("path");
//const uuid = require("uuid");
//const Person=require("./Person");
const Student=require("./Student");
//const Teacher=require("./Teacher");
const StudentDataReader=require("./StudentDataReader")
//Pass this Random in person class file as well
const  random=require("./Random")
let _studentData = new StudentDataReader(path.join(__dirname,"Students.json"));//go up a levelif said../

let student=_studentData.getStudent("74d3bd22-f87f-42c2-9bb2-5bcdf8018189");
//let student=new Student("Jame","Will",31,[1,2,3,4],"b1cb2c0c-0951-48d7-879b-97dba1536510");
//console.log(_studentData.addStudent(student));
student.firstName="NewJame"
_studentData.updateStudent(student);
console.log(_studentData.fileArray);

// let teachers = Teacher.generateRandomPeople(10);
// let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));

// console.log(teachers);
// console.log(students);

// console.log(teachers[0].getMyStudents(students));
// console.log(students[0].getTeacher(teachers));

// Make sure these are at the top of your file!
// const fs = require("fs");
// const path = require("path");
