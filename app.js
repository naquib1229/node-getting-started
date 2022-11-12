//Event- A signal that something has happened in our application. Several class in node raises different kinds of events.
//And in your code, you might be interested to respond to those events.
//EventEmitter is one of the class of Events. It's one of the core building blocks of Node and a lot of classes are based on this EventEmitter.

const EventEmitter = require('events'); //naming,EventEmitter first letter of every word is upper case indicates class 
const emitter = new EventEmitter(); //here emitter is an object

//of course order is important here, if you register this listener after calling the emit method, nothing would have happened.
//Because when we call emit method, this emitter iterates over all the registered listeners and calls them synchronously.


//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

//Raise an event
emitter.emit('messageLogged');


//output

/* 
Listener called
*/

