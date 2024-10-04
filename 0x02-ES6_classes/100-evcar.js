import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor with the appropriate attributes
    super(brand, motor, color);
    this._range = range; // Add the range attribute to the EVCar
  }

  // Override the cloneCar method to return an instance of the parent class (Car)
  cloneCar() {
    // Return a new Car instance, not an EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
