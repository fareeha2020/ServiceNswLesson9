const fs = require("fs");
const path = require("path");
const TeacherDataReader=require("./TeacherDataReader")
const  random=require("./Random");
const FILE_PATH = path.join(__dirname, "Teacher.json");
//let _teacherData = new TeacherDataReader(path.join(__dirname, "Teacher.json"));
//fs.writeFileSync(FILE_PATH, JSON.stringify());

let _teacherData = new TeacherDataReader(path.join(__dirname,"Teachers.json"));
console.log(_teacherData.getStudent("981470dd-cd54-4775-a8a6-c5e91b576a62"));