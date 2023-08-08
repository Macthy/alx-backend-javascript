// 3-currency.js

// Currency class representing a currency with code and name
export default class Currency {
  // Constructor for creating Currency objects with code and name
  constructor(code, name) {
    // Attributes prefixed with underscores to indicate they are private
    this._code = code; // Private attribute to store the currency code
    this._name = name; // Private attribute to store the currency name
  }

  // Getter for retrieving the currency code
  get code() {
    return this._code;
  }

  // Setter for updating the currency code
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for retrieving the currency name
  get name() {
    return this._name;
  }

  // Setter for updating the currency name
  set name(newName) {
    this._name = newName;
  }

  // Method to display the currency attributes in the format: name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

