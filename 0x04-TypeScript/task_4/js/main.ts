import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements()); // Log requirements for C++
console.log(cpp.getAvailableTeacher()); // Log available teacher for C++

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements()); // Log requirements for Java
console.log(java.getAvailableTeacher()); // Log available teacher for Java

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements()); // Log requirements for React
console.log(react.getAvailableTeacher()); // Log available teacher for React
