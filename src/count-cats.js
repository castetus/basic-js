const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // throw new CustomError('Not implemented');
  let count = 0
  backyard.map((arr) => {
    arr.map((item) => {
      if (item === '^^'){
        count++
      }
    })
  })
  return count
};
