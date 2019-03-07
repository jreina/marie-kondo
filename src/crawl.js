const path = require('path');
const { readdirSync, statSync } = require('fs');

function _crawlR(dir, fileList) {
  const entries = readdirSync(dir).map(file => path.join(dir, file));
  const [files, dirs] = entries.reduce(
    (memo, val) => {
      if (statSync(val).isFile()) memo[0].push(val);
      else memo[1].push(val);
      return memo;
    },
    [[], []]
  );

  return dirs.length > 0
    ? dirs.reduce((memo, dir) => _crawlR(dir, memo), files.concat(...fileList))
    : files.concat(...fileList);
}

/**
 * Recursively list all files in a directory
 * 
 * @param {string} path Path to crawl
 * @returns {Array<string>}
 */
function crawl(path) {
  return _crawlR(path, []);
}

module.exports = crawl;
