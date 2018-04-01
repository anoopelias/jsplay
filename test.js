const fs = require('mz/fs');
const puzzle8 = require('./puzzle8');

async function readInput(filename) {
  const input = await fs.readFile(filename, 'utf8');
  const lines = input.split('\n');
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

function printBoard(board) {
  for (let i=0; i<board.length; i++) {
    console.log(board[i].join(' '));
  }
}

async function run() {
  const filename = process.argv[2];
  const input = await readInput(filename);
  const output = puzzle8(input);

  if (output === null) {
    console.log('Board cannot be solved');
    return;
  }

  if (!output.length) {
    printBoard(input.board);
    return;
  }

  for (let i=0; i<output.length; i++) {
    printBoard(output[i]);
    console.log();
  }
}

run();

