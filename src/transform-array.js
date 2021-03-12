const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    if (
      arr[index - 1] !== "--discard-next" &&
      arr[index - 1] !== "--double-next" &&
      arr[index + 1] !== "--discard-prev" &&
      arr[index + 1] !== "--double-prev" &&
      String(arr[index]).indexOf('--') === -1
    ) {
      newArr.push(arr[index])
    } else if (arr[index] === '--discard-next' || arr[index] === '--discard-prev' || arr[index] === '--double-next' || arr[index] === '--double-prev'){
      continue
    } else {
      let item = []
      item.push(arr[index])
      if (arr[index - 1] === '--discard-next') {
        item.pop()
      } 
      if (arr[index + 1] === '--discard-prev'){
        item.pop()
      }
      if (arr[index - 1] === '--double-next') {
          item.push(arr[index])
      } 
      if (arr[index + 1] === '--double-prev') {
        if (item.length){
          item.push(arr[index])
        }
      }
      
      for (let el of item){
        newArr.push(el)
      }
    }
    console.log(newArr)
  }
  
  return newArr
}