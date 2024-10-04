export default class HolbertonClass {
  constructor(size, location) {
    // Validate and assign size and location
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Override valueOf to return the size when cast to a Number
  valueOf() {
    return this._size;
  }

  // Override toString to return the location when cast to a String
  toString() {
    return this._location;
  }
}
