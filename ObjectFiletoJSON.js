//has jav script objects
//read a file people.json ,extraxt dats,maupulate and send it back
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "People.json");

class Person {
    constructor(firstName, lastName, age, id) {
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
                getRandomNumber(42) + 18,
                uuid.v4());
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}


// let fileData = fs.readFileSync(filePath);
// let stringFileData = fileData.toString();
// let people = JSON.parse(stringFileData);

let peopleRaw = JSON.parse(fs.readFileSync(FILE_PATH).toString());
//reads file as objects,has no class associated,so we can 
//create object with this javaScript file class using
//MAP array,use same constructor property element in right order

let people = peopleRaw.map(person => new Person(person.firstName, person.lastName, person.age, person.id));

let info = people.map(person => person.getInfo());//map is used to store all object data we get after after performing this function on each Array


console.log(people[0]);
//maupulating ade ,as in increase by1

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    person.age++;
}

console.log(people[0]);
//writing to jason File

fs.writeFileSync(FILE_PATH, JSON.stringify(people));

