const crawl = require('./crawl');
const mark = require('./mark');
const sweep = require('./sweep');
const { calcSavings } = require('./util');

function tidyUp(path, probability = 0.5) {
  const files = crawl(path);
  const discards = mark(files);

  console.log(
    `The following ${files.length} files have failed to spark joy and must go`
  );
  console.log(`This action will reclaim ${calcSavings(files)} bytes:\r\n\r\n`);
  console.log(discards.join('\r\n'));

  sweep(discards);
}

module.exports = tidyUp;
