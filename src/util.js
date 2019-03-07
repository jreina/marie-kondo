const fs = require('fs');

/**
 * Calculates the size of a set of files.
 *
 * @param {Array<string>} files
 * @returns {number}
 */
function calcSavings(files) {
  return files.map(fs.statSync).reduce((memo, val) => memo + val.size, 0);
}

module.exports = { calcSavings };
