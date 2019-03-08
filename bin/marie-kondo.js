#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const tidyUp = require('../src/index');

program
  .version('0.0.1')
  .usage('[options] <dir>')
  .arguments('<dir>')
  .option('-f, --fix', 'Tidy up')
  .option(
    '-p, --probability <n>',
    'Probability that a given file will be discarded [0.05]',
    0.05,
    parseFloat
  )
  .action(dir => {
    if (!fs.existsSync(dir)) throw `Path does not exist! ${dir}`;

    tidyUp(dir, program.probability, !program.fix);
  });

program.parse(process.argv);
