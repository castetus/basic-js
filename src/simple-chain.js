const CustomError = require("../extensions/custom-error");

// const chain = []

const chainMaker = {

  chain: [],

  getLength() {
    return chain.length
  },

  addLink(value = ' ') {

    if (typeof value !== 'string'){
      value = String(value)
    }
  
    if (this.chain.length === 0){
      this.chain.push('( ' + value + ' )')
    } else {
      this.chain.push('( ' + value + ' )')
    }
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length){
      this.chain = []
      throw new Error()
    }
    this.chain.splice((position - 1), 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
