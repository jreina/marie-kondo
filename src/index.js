const crawl = require('./crawl');
const mark = require('./mark');
const sweep = require('./sweep');
const { calcSavings } = require('./util');

/**
 * Recursively tidy up a directory.
 * 
 * @param {string} path 
 * @param {number} probability 
 * @param {boolean} dry 
 */
function tidyUp(path, probability = 0.05, dry = true) {
  const files = crawl(path);
  const discards = mark(files, probability);
  const savings = calcSavings(discards);
  const savePhrase = dry ? 'would have ' : '';

  console.log(
    `The following ${discards.length} files have failed to spark joy and must go`
  );
  console.log(discards.join('\r\n'));
  console.log(`This action ${savePhrase}reclaimed ${savings} bytes over ${discards.length} files!`);

  if (!dry) sweep(discards);
}

module.exports = tidyUp;
