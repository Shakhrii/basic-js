const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeam = [];

  for (let i = 0; i < members.length; i += 1) {
    const name = members[i];
    if (typeof name === 'string') {
      dreamTeam.push(name.trim().slice(0, 1).toUpperCase());
    }
  }
  
  dreamTeam.sort();
  return dreamTeam.join('');
}

module.exports = {
  createDreamTeam
};
