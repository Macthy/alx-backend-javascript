// 5-building.js

export default class Building {
  // Constructor for creating Building objects with sqft
  constructor(sqft) {
    this._sqft = sqft; // Private attribute to store the square footage
  }

  // Getter for retrieving the square footage
  get sqft() {
    return this._sqft;
  }

  // Method to be implemented by the child class to display the evacuation warning message
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

