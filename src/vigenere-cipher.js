const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction = true){
    this.direction = direction
  }

  keySupplement(arr, length){
    while (arr.length <= length){
      arr.push(...arr)
    }
    return arr.slice(0, length)
  }

  encrypt(message, key) {
    if (!message || !key){
      throw new Error()
    }
    const messageArr = message.split('')
    let keyArr = key.split('')
    if (keyArr.length < messageArr.length){
      keyArr = this.keySupplement(keyArr, messageArr.length)
    }

    const resultArr = []
    let index = 0
    for (let letter of messageArr){
      letter = letter.toUpperCase()
      let newLetter = ''
      
      const letterCode = letter.charCodeAt()
      if (letterCode < 65 || letterCode > 90){
        newLetter = letter
      } else {
        let newLetterCode = letterCode + (keyArr[index].toUpperCase().charCodeAt() - 65)
        if (newLetterCode > 90){
          newLetterCode = newLetterCode - 26
        }
        
        newLetter = String.fromCharCode(newLetterCode)
        index++
      }
      resultArr.push(newLetter)
    }
    if (!this.direction){
      resultArr.reverse()
    }
    return resultArr.join('').toUpperCase()
  }    
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key){
      throw new Error()
    }
    const messageArr = encryptedMessage.split('')
    let keyArr = key.split('')
    if (keyArr.length < messageArr.length){
      keyArr = this.keySupplement(keyArr, messageArr.length)
    }

    const resultArr = []
    let index = 0
    for (let letter of messageArr){
      letter = letter.toUpperCase()
      let newLetter = ''
      
      const letterCode = letter.charCodeAt()
      if (letterCode < 65 || letterCode > 90){
        newLetter = letter
      } else {
        let newLetterCode = letterCode - (keyArr[index].toUpperCase().charCodeAt() - 65)
        if (newLetterCode < 65){
          newLetterCode = newLetterCode + 26
        }
        
        newLetter = String.fromCharCode(newLetterCode)
        index++
      }
      resultArr.push(newLetter)
    }
    if (!this.direction){
      resultArr.reverse()
    }
    return resultArr.join('').toUpperCase()
  }
}

module.exports = VigenereCipheringMachine;
