const fs = require('fs');

/**
 * Remove a list of files.
 * 
 * @param {Array<string>} files The files to discard
 * @private
 * @yolo
 */
function sweep(files) {
  files.forEach(fs.unlinkSync);
}

module.exports = sweep;
