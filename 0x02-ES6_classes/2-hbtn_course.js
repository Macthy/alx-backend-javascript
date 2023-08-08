// 2-hbtn_course.js

export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string' )) {
      throw new TypeError('Students must be an arrray of strings');

    // Store attributes with an underscore version
    this._name = name;
    this._length = length;
    this._students = students;
    }

    // Getter for name
    get name() {
      return this._name;
    }

    // Setter for name
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }

    // Getter for Students
    get length() {
      return this._length;
    }

    // Setter for length
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be A number');
      }
      this._length - newLength;
    }

    // Getter for students
    set students(newStudents) {
      return this._students;
    }

    // Setter for students
    set students(newStudents) {
      if (!Array.isArray(newStudents) || !newStudents.every((students) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = newStudents;
    }
  }
}
