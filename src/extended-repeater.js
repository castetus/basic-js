const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  function addItem(string, count = 1, separator){

    let item = ''
    for (let i = 1; i <= count; i++){
      item += String(string)
      if (i === count){
        continue
      }
      item += String(separator)
    }
    return item
  }

  if (typeof options.addition != 'undefined'){
    str += addItem(options.addition, options.additionRepeatTimes || 1, options.additionSeparator || '|')
  }

  return addItem(str, options.repeatTimes, options.separator || '+')
};