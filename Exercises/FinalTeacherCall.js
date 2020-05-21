//Following from the work done in class today, create a TeacherDataReader similar to the StudentDataReader

const fs = require("fs");
const path = require("path");
const TeacherDataReader = require("./TeacherDataReader")
const random = require("../Random.js");
const FILE_PATH = path.join('../', "Teacher.json");
//let _teacherData = new teacherDataReader(path.join(__dirname, "Teachers.json"));
//fs.writeFileSync(FILE_PATH, JSON.stringify());


let _teacherData = new TeacherDataReader(path.join('../', "Teacher.json"));
console.log(_teacherData.getStudent("981470dd-cd54-4775-a8a6-c5e91b576a62"));
