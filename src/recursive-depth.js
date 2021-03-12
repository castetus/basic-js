const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor(){
      this.depth = 1
      this.acc = 1
    }
      
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        this.depth++;
        this.calculateDepth(arr[i]);
        if (this.acc < this.depth) {
          this.acc = this.depth
          this.depth = 1;
        } else {
          this.depth = 1;
        }
      }
    }
    return this.acc
  }
};