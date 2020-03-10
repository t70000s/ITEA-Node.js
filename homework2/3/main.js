const math = require('@t70000s/math');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer();
const port = 8000;

server.on('request', (request, response) => {
    switch (request.method) {
        case 'GET':
            fs.readFile(path.join(__dirname, 'main.html'), (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    response.end(data);
                }
            });
            break;
        case 'POST':
            switch (url.parse(request.url).pathname) {
                case '/calc/min':
                    request.on('data', (data) => {
                        const arraNum = Array.from(data.toString().split(','), x => parseInt(x, 10));
                        response.writeHead(200).end(math.min(arraNum).toString());
                    });
                    break;
                case '/files':
                    const dir = fs.readdirSync(__dirname);
                    const result = [];
                    dir.forEach((i) => result.push(i));
                    response.writeHead(200).end(JSON.stringify(result));
                    break;
                default:
                    response.end('Необходимо вводить числа через запятую 1,2,3,4');
            }
            break;
        default:
            response.writeHead(405).end('Method Not Allowed');
    }
});

server.listen(port, () => console.log('Listening on port', port));