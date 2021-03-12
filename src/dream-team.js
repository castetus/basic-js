const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(members)){
    return false
  }
  let result = ''
  let resultArr = []
  members.map((item) => {
    if (typeof item === 'string'){
      let name = item.trim().split('')
      resultArr.push(name[0].toUpperCase()) 
    }
    result = resultArr.sort().join('')
  })
  return result
};
