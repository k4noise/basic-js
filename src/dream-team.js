const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let team = [];
  members.forEach((element) => {
    typeof element === 'string'
      ? team.push(element.trim().toUpperCase()[0])
      : '';
  });

  return team.sort().join('');
};
