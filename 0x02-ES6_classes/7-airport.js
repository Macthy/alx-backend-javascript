// 7-airport.js

export default class Airport {
  // Constructor for creating Airport objects with name and code
  constructor(name, code) {
    this._name = name; // Private attribute to store the airport name
    this._code = code; // Private attribute to store the airport code
  }

  // Default string description of the class returns the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

