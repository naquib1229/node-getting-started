
const EventEmitter = require('events');  


const Logger = require('./logger');
const logger = new Logger();


//Register a listener
logger.on('messageLogged', (arg) => {  //instead of emitter.on 
    console.log('Listener called', arg);
});

logger.log('message');



//output

/* 
message
Listener called { id: 1, url: 'http://' }
*/

