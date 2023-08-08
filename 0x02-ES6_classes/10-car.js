// Define a unique symbol for marking cloned instances
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    // Store attributes using underscores as per the convention
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the current instance
  cloneCar() {
    // Create a new instance of the same class
    const clone = new this.constructor();

    // Mark the cloned instance using the cloneSymbol
    clone[cloneSymbol] = true;

    // Loop through properties and copy them to the clone
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        clone[prop] = this[prop];
      }
    }

    return clone;
  }
}

