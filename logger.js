const EventEmitter = require('events');  
const emitter = new EventEmitter(); 

var url = 'http://mylogger.io/log';

function log(message){
    //Send an Http request
    console.log(message);

}

//Raise an event
emitter.emit('messageLogged',{id: 1, url: 'http://'}); 


module.exports = log; //exporting a function