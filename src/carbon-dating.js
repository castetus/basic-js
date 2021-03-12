const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string'){
    return false
  }
  if (isNaN(+sampleActivity) || +sampleActivity <= 0 || +sampleActivity >= 15){
    return false
  }

  const age = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD))
  return age
};
