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
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, i);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, id, grades) {
        super(firstName, lastName, age, id);
        this.grades = grades;
    }

    getAverageGrade() {
        let totalGrades = this.grades.reduce(function (total, currentValue) {
            return total + currentValue;
        });

        return totalGrades / this.grades.length;
    }

    getInfo() {
        return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let grades = [];
            for (let i = 0; i < getRandomNumber(10); i++) {
                grades.push(getRandomNumber(100));
            }
            let randomPerson = new Student(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, i, grades);
            //+18 is for appropriate age
            randomPeople.push(randomPerson);
        }
        return randomPeople;//print one in which ur pushing 
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, id, students) {
        super(firstName, lastName, age, id);
        this.students = students;
    }
    getStudentAverageGrade() {
        let totalGrades = this.students.reduce(function (total, student) {
            let studentAvg = student.getAverageGrade();
            return total + studentAvg;
        }, 0);
        return totalGrades / this.students.length;
    }

    getInfo() {
        return `${super.getInfo()}, their average student grade is ${this.getStudentAverageGrade()}`
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let students = Student.generateRandomPeople(getRandomNumber(10));
            let randomPerson = new Teacher(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42)+17, i, students);
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

let randomPeople = Person.generateRandomPeople(1);
console.log(randomPeople);
let randomStudents = Student.generateRandomPeople(1);
console.log(randomStudents);
let randomTeachers = Teacher.generateRandomPeople(1);
console.log(randomTeachers[0]);