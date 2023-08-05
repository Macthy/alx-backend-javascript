// task_4/js/main.ts

import { Subjects } from './subjects';

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

export const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);

export const java = new Subjects.Java();
java.setTeacher(cTeacher);

export const react = new Subjects.React();
react.setTeacher(cTeacher);

console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
