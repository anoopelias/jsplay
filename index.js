const BASE = 'http://localhost:3000/api/v1';
const request = require('request');
const fs = require('mz/fs');

function ping() {
    request(BASE + '/ping', function (error, response, body) {
        console.log(body);
    });
}

async function submit() {
    const file = await fs.readFile('collinear.js');
    const fileString = Buffer.from(file).toString('base64');

    const req = request.post(BASE + '/submit',
        { form: {collinear: fileString }},
        function (err, res, body) {
            if (err) {
                console.log('Error!');
            } else {
                console.log('URL: ' + body);
            }
        }
    );
}

if (process.argv[2] === 'ping') {
    ping();
} else if (process.argv[2] === 'submit') {
    submit();
} else {
    console.log('Unknown argument :', process.argv[2])
}


