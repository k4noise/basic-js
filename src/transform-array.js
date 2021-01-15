module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let result = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < len - 3) {
          if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev')
            i++;
        }
        i++;
        break;
      case '--discard-prev':
        if (result.length) {
          result.pop();
        }
        break;
      case '--double-next':
        if (i != len - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i) {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
