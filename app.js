

// fs.readdir
// Read Directory
const fs = require('fs');

fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err)
    else console.log('Result', files);
})


// EventEmitter
const Logger = require('./logger');
const logger = new Logger();

// register a listener
// we could equally use emitter.addListener which is exactly the same as emitter.on
// we have used an arrow function, we could rewrite '(e) => {' as 'function(e){'
logger.on('messageLogged', (e) => {
    console.log('Listener Called', e);
})

logger.log('message');


//HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on Port 3000...');