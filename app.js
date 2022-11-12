
const EventEmitter = require('events');  
const emitter = new EventEmitter(); 

//Register a listener
emitter.on('messageLogged', (arg) => { 
    console.log('Listener called', arg);
});

const log = require('./logger');
log('message');

//output

/* 
message
*/
//Note- here no listener called, because here we are working with two different EventEmitters object
//so if we register a listener in app.js it is confined to app.js only 
