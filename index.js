// const BASE = 'https://stage-jsplay-solitontech.herokuapp.com/api/v1';
const BASE = 'http://localhost:3000/api/v1';
const request = require('request');
const fs = require('mz/fs');
const config = require('git-config').sync();

function getGitName() {
    return config && config.user && config.user.name;
}

function ping() {
    request({
        url: BASE + '/ping',
        qs: {
            name: getGitName(),
        },
    }, function (error, response, body) {
        if (error) {
            console.error('Error: ', error.message);
        } else {
            console.log(body);
        }
    });
}

async function submit() {
    const file = await fs.readFile('puzzle8.js');
    const fileString = Buffer.from(file).toString('base64');

    const req = request.post({
        url: BASE + '/submit',
        form: {
            'puzzle8' : fileString,
        },
        qs: {
            name: getGitName(),
        },
    },
    function (err, res, body) {
        if (err) {
            console.log('Error!');
        } else {
            console.log(body);
        }
    });
}

if (process.argv[2] === 'ping') {
    ping();
} else if (process.argv[2] === 'submit') {
    submit();
} else {
    if (process.argv[2]) {
        console.log('\nUnknown argument :', process.argv[2])
    }
    console.log('\nUsage : \n    ping: To ping the server\n    submit: To submit request to the server\n');
}


