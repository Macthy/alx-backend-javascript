// 6-sky_high.js

// Import the Building class from 5-building.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  // Constructor for creating SkyHighBuilding objects with sqft and floors
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with the sqft parameter
    this._floors = floors; // Private attribute to store the number of floors
  }

  // Getter for retrieving the number of floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

