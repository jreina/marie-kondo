const chance = require('chance').Chance(Math.random);

/**
 * Take a subset of files and return a subset of those files to discard.
 * 
 * @param {Array<string>} files
 * @param {number} probability A number between 0 and 1 describing how likely a given file is to be marked.
 */
function mark(files, probability = 0.05) {
  const filesToRemove = Math.floor(files.length * probability);
  return chance.pickset(files, filesToRemove);
}

module.exports = mark;
