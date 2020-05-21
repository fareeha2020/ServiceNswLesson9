const uuid=require("uuid");
//console.log(uuid.v4());
//is a method which generate version 4 unique ID
const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
const getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
}
//generating uuid for each ID
class Person {
    constructor(firstName, lastName, age, id=uuid.v4()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(
                getRandomGivenName(),
                getRandomFamilyName(),
                 18,
                uuid.v4());
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

class Student extends Person{
    constructor(firstname,lastname,age,grades,teacherId,id=uuid.v4()){
        super(firstname,lastname,age,id);
        this.teacherId=teacherId;
        this.grades=grades;}
        //WHEN WE CREATE A SUDENT OBJECT WE NEED TO ACCEPT ARRAY OF TEACHER iD SO THAT WE KNOW WHAT IS VALID TEACHER iD
        //WE WANT TEACHER iD TO RELATE DIRECTLY TO STUDENT,
        static generateRandomPeople(num,validIds){


        }
        //generate random grate using other Staticfunction

    
    }

    class Teacher extends Person{
        constructor(firstname,lastname,age,grades,teacherId,id=uuid.v4()){
            super(firstname,lastname,age,id);
    }
   // generates person objects even when we use super function

   // nouw USING MAP CREATE A TEACHER OBJECT ::USING SUPER FUNCTION OF Person

}
console.log(Person.generateRandomPeople(2));
