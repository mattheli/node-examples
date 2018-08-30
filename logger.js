// notice that we are asigning the constant a class so we use PascalCase.
const EventEmitter = require('events');

class Logger extends EventEmitter {

    // log a message
    log(message) {
        console.log(message);

        // raise an event and pass in some data
        this.emit('messageLogged', { id: '1', url: 'http://mattheli.com'});
    }
}

// export log function
module.exports = Logger;