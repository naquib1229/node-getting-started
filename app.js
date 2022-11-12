
const EventEmitter = require('events');  
const emitter = new EventEmitter(); 

//Register a listener
emitter.on('messageLogged', function(arg){ //e 
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged',{id: 1, url: 'http://'}); //And with this technique we can pass data about the event that just happened


//output

/* 
Listener called { id: 1, url: 'http://' }
*/

