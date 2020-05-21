// Reading and Writing JSON Files

// Create a method that writes an array of students to a json file
const fs=require("fs");
const path=require("path");
class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName= firstName;
         this.lastName=lastName;
          this.age=age;
         this.grades= grades;
    }
static CreateobjectToJsonfile(arrayObject){
    fs.writeFileSync(path.join(__dirname,"arrayObject.json"),JSON.stringify(arrayObject));
   
    //will create .json file of Array objects we send ,in string format 
}

// Create a method that retrieves a list of students from a json file and returns them as student objects

static readFromJsontoObjects(){
  
    let studentsRaw=JSON.parse(fs.readFileSync(path.join(__dirname,"arrayObject.json").toString()));//will be object,but not associated to student
     let students=studentsRaw.map
     (student=> new Student(student.firstName,student.lastName,student.age,student.grades));
     //creating each raw to object of student
     return students;
}

}

 let studentArray=[
         { firstName: 'Oliver',
        lastName: 'Nguyen',
        age: 36,
        grades: [ 94, 39, 25, 62, 69 ]  }  ,        
            {  firstName: 'Amelia',
        lastName: 'Taylor',
        age: 40,
         grades: [ 73, 93, 85, 91 ]
       
      }
 ];
Student.CreateobjectToJsonfile(studentArray);
console.log(Student.readFromJsontoObjects(studentArray));




