module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if (repeatTimes === undefined) {
    return '';
  }

  let repeatStr = [];
  const repeatSeperator = [];

  for (let i = 0; i < repeatTimes; i++) {
    repeatStr.push(str);
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    repeatSeperator.push(`${addition}`);
  }

  const addSepStr = repeatSeperator.join(additionSeparator);

  repeatStr = repeatStr.map((e) => e + addSepStr);
  return repeatStr.join(separator);
};
