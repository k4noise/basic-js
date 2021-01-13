const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);
  const K = 0.693 / HALF_LIFE_PERIOD;
  if (
    Number.isNaN(num) ||
    typeof sampleActivity !== 'string' ||
    num <= 0 ||
    num > 15
  ) {
    return false;
  } else {
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / num) / K);
    return result;
  }
};
