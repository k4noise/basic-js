const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.map((row) => {
    row.map((elem) => {
      elem == '^^' ? counter++ : '';
    });
  });
  return counter;
};
