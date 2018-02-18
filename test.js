const fs = require('mz/fs');
const EOL = require('os').EOL;
const collinear = require('./collinear');

async function readInput(filename) {
    const input = await fs.readFile(filename, 'utf8');
    const lines = input.split(EOL);
    const length = parseInt(lines.shift());
    console.log('length', length);
    let points = [];

    for (let i=0; i<length; i++) {
        let line = lines[i];
        let values = line.split(',').map(val => val.trim());
        points.push({
            x: parseFloat(values[0]),
            y: parseFloat(values[1]),
        })
    }
    return {
        points: points,
        length: length,
    };
}

async function run() {
    const filename = process.argv[2];
    const input = await readInput(filename);
    const output = collinear(input);

    console.log(output);
}

run();

