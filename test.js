const fs = require('mz/fs');
const EOL = require('os').EOL;
const puzzle8 = require('./puzzle8');

async function readInput(filename) {
  const input = await fs.readFile(filename, 'utf8');
  const lines = input.split(EOL);
  const length = parseInt(lines.shift());
  let board = [];

  for (let i=0; i<length; i++) {
    let line = lines[i];
    let values = line.split(' ')
      .map(val => val.trim())
      .filter(val => val)
      .map(val => parseInt(val));
    let row = [];

    for (let j=0; j<length; j++) {
      row.push(values[j]);
    }

    board.push(row);
  }
  return {
    board: board,
    length: length,
  };
}

async function run() {
  const filename = process.argv[2];
  const input = await readInput(filename);
  const output = puzzle8(input);

  console.log(output);
}

run();

