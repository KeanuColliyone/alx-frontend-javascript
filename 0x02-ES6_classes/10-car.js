const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    const ClonedCar = this.constructor[cloneSymbol] || this.constructor;
    return new ClonedCar(this._brand, this._motor, this._color);
  }

  // Define the cloning method for Car
  static [cloneSymbol](brand, motor, color) {
    return new this(brand, motor, color);
  }
}
