// Import the Car class from 10-car.js
import Car from './10-car.js';

// Implement the EVCar class that extends the Car class
class EVCar extends Car {
  // Constructor with attributes: brand, motor, color, range
  constructor(brand, motor, color, range) {
    // Call the parent class constructor using super()
    super(brand, motor, color);
    // Store the range attribute
    this._range = range;
  }

  // Getter for the range attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Create a new Car object using the attributes of this EVCar instance
    const carClone = new Car(this._brand, this._motor, this._color);
    // Return the cloned Car object
    return carClone;
  }
}

// Export the EVCar class
export default EVCar;

