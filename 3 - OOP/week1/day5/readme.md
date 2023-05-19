## Exercise: Student Management System

You've been tasked with creating a Student Management System to keep track of students and their grades.

#### Features:

Here's a list of features that our code needs to support:

- Allow multiple students to be registered
- Each student can have multiple grades
- Allow adding and removing grades for each student
- Allow calculating the average grade for each student
- Allow retrieving the student's information, including their name, ID, and average grade
- Implement basic validation to ensure that grades are within a valid range (e.g., between 0 and 100)
- Here's the initial state of the application logic:

```js
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.grades = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  removeGrade(index) {
    this.grades.splice(index, 1);
  }

  calculateAverageGrade() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  getStudentInfo() {
    const averageGrade = this.calculateAverageGrade();
    return `Name: ${this.name}, ID: ${this.id}, Average Grade: ${averageGrade}`;
  }
}

const student1 = new Student("John Doe", "S001");
console.log("Student 1:", student1);
```

#### Note:

Read the code prior to running it and reading further. You should feel comfortable knowing not only what it will output but also how it works.

Every student in the system will have a `name`, an `ID`, and a `list of grades`. The Student class provides methods to `add grades`, `remove grades`, `calculate the average grade`, and `retrieve student information`.

```js
student1.addGrade(80);
student1.addGrade(90);
console.log("Student 1:", student1);
console.log("Average Grade:", student1.calculateAverageGrade());
console.log("Student Info:", student1.getStudentInfo());
```

To add grades for a student, the application logic requires calling the `addGrade` method on a student object with the desired grade. Similarly, the `removeGrade` method can be used to remove a grade `from the student's list of grades`. The `calculateAverageGrade` method calculates the average grade based on the grades recorded for the student, and the `getStudentInfo` method retrieves the student's information, including their `name`, `ID`, and `average grade`.

### Step 1: Student Class Refactor

The current implementation of the Student class is straightforward, but it lacks encapsulation and validation. Let's refactor it to improve its design.

#### Instructions

- Modify the Student class to use private properties for name, ID, and grades.
- Implement getter methods for name, ID, and average grade to provide read-only access to these properties.
- Implement a setter method for grades to ensure that only valid grades (between 0 and 100) can be added.
- Update the code in the driver section to use the getter methods instead of accessing the properties directly.

### Step 2: Course Class

To expand the functionality of our Student Management System, let's introduce a Course class that represents a course in which students are enrolled. The `Course` class will keep track of the `enrolled students` and provide methods to `add students`, `remove students`, and `retrieve the student list`.

#### Instructions

Create a `Course` class with the following properties: `name` and `students` (an array to store enrolled students).
Implement methods to `add students to the course(addStudent)`, `remove students from the course(removeStudent)`, and `retrieve the list of enrolled students(getEnrolledStudents)`.
Add validation to prevent adding the same student to the course multiple times.
Here's the updated code:

```js
class Course { ... }

const course1 = new Course("Mathematics");
console.log("Course 1:", course1);

// Create students
const student1 = new Student("John Doe", "S001");
const student2 = new Student("Jane Smith", "S002");

// Add students to the course
course1.addStudent(student1.id);
course1.addStudent(student2.id);
console.log("Enrolled Students:", course1.getEnrolledStudents());

// Remove a student from the course
course1.removeStudent(student1.id);
console.log("Enrolled Students:", course1.getEnrolledStudents());
```

In this step, we've introduced a `Course` class that has properties for the course name and an array to store enrolled students. The Course class provides methods to add students to the course, remove students from the course, and retrieve the list of enrolled students.

The code in the driver section demonstrates how to create a Course object, create Student objects, add the students to the course, and remove a student from the course.

### Step 3: Refactoring and Composition
The Course and Student classes have a relationship where a course can have multiple students, and a student can be enrolled in multiple courses. To represent this relationship more effectively, let's refactor the code to use composition.

#### Instructions
- Modify the Course class to have an array of Student objects instead of just storing student IDs.
- Update the `addStudent` and `removeStudent` methods to work with Student objects instead of student IDs.
- Refactor the code in the driver section to demonstrate the updated functionality.

In this step, we've refactored the Course and Student classes to establish a composition relationship. The Course class now stores an array of Student objects, and the Student class stores an array of Course objects. The addStudent and removeStudent methods have been updated to maintain the relationship between the classes.

The code in the driver section demonstrates how to create a Course object, create Student objects, add students to the course, remove a student from the course, and add grades for students. Additionally, it shows how to retrieve the enrolled students for a course and display student information.

By utilizing composition and refining the relationships between classes, we've improved the design and encapsulation of the Student Management System.