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
function tidyUp(path, probability = 0.5, dry = true) {
  const files = crawl(path);
  const discards = mark(files);

  console.log(
    `The following ${files.length} files have failed to spark joy and must go`
  );
  console.log(`This action will reclaim ${calcSavings(files)} bytes:\r\n\r\n`);
  console.log(discards.join('\r\n'));

  if (!dry) sweep(discards);
}

module.exports = tidyUp;
