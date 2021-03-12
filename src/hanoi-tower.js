const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnDuration = 3600 / turnsSpeed
  const turnsCount = Math.pow(2, disksNumber) - 1
  return {
    turns: turnsCount,
    seconds: Math.floor(turnsCount * turnDuration),
  }
};
