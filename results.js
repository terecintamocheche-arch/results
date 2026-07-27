
// PART 1: OBJECTS

// Create student object
const student = {
    name: "Tere",
    age: 19,
    course: "Computer Science",
    score: 78,
    isRegistered: true
};

// 1. Print name
console.log("Name:", student.name);

// 2. Print course
console.log("Course:", student.course);

// 3. Print all details
console.log("Student Details:", student);

// 4. Print Passed/Failed
if (student.score >= 50) {
    console.log("Result: Passed");
} else {
    console.log("Result: Failed");
}

// PART 2: ARRAYS

// Create an array of five student names
let students = ["Tere", "Brian", "Aisha", "Kevin", "Mercy"];

// 5. Print array
console.log("Students:", students);

// 6. Print first and last
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);

// 7. Add one student
students.push("John");

// 8. Remove first student
students.shift();

// 9. Print updated array
console.log("Updated Students:", students);

// 10. Loop through all names
console.log("Student Names:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// PART 3: ARRAYS OF OBJECTS


// Create array of student objects
const studentList = [
    { name: "Tere", score: 78 },
    { name: "Brian", score: 45 },
    { name: "Mercy", score: 90 }
];

// 11. Display name, score and pass/fail
console.log("Student Results:");

studentList.forEach(student => {
    if (student.score >= 50) {
        console.log(student.name + " - " + student.score + " - Pass");
    } else {
        console.log(student.name + " - " + student.score + " - Fail");
    }
});

// PART 4: CLASSES

class Student {
    constructor(name, age, course, score) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.score = score;
    }

    // 12. Introduce method
    introduce() {
        console.log(`Hello ${this.name}!`);
    }

    // 13. Check result
    checkResult() {
        if (this.score >= 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}

// 14. Create three student objects
const student1 = new Student("Tere", 19, "Computer Science", 80);
const student2 = new Student("Brian", 20, "Information Technology", 42);
const student3 = new Student("Mercy", 18, "Software Engineering", 65);

// 15. Call both methods
student1.introduce();
student1.checkResult();

student2.introduce();
student2.checkResult();

student3.introduce();
student3.checkResult();