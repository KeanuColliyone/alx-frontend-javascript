// car.js
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    // Call the internal clone method via the symbol to return a new instance of the same class
    return this[cloneSymbol]();
  }

  // Internal clone method using Symbol
  [cloneSymbol]() {
    // Create a new instance of the constructor, being an instance of the same class
    return new this.constructor();
  }
}
