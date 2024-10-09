// Define the Teacher interface with specific attributes and index signature for additional properties
interface Teacher {
    readonly firstName: string;         // Readonly, can only be set during initialization
    readonly lastName: string;          // Readonly, can only be set during initialization
    fullTimeEmployee: boolean;          // Must always be defined
    yearsOfExperience?: number;         // Optional attribute
    location: string;                   // Must always be defined
    [key: string]: any;                 // Allows any additional properties like 'contract'
}

// Define the Directors interface that extends Teacher and adds numberOfReports attribute
interface Directors extends Teacher {
    numberOfReports: number;            // Directors must have this attribute
}

// Function interface for printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementing the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example of usage for printTeacher function
console.log(printTeacher("John", "Doe"));  // Output: "J. Doe"

// Example of creating a Director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Interface for the constructor of StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the StudentClass itself
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implementing the StudentClass
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example of usage for StudentClass
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());      // Output: "John"
console.log(student.workOnHomework());   // Output: "Currently working"
