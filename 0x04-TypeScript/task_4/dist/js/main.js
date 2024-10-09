import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
// Create and export constants for each subject
export var cpp = new Cpp();
export var java = new Java();
export var react = new React();
// Create and export a Teacher object with experienceTeachingC = 10
export var cTeacher = {
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
//# sourceMappingURL=main.js.map