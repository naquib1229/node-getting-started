const fs = require('fs');

// const files = fs.readdirSync('./');//not preferred use instead readdir asynchronous version
// console.log(files)

fs.readdir('./',function(err, files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
}); 
    //first argument is path and the 2nd is now all these asynchronous method take a function as their last argument.
    // Node will call this function when that asynchronous operation completes.we call this function a call back.



//output

/* 
 Result [ '.git', 'Node Getting started.odt', 'app.js', 'logger.js' ]
*/

