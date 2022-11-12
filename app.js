const fs = require('fs');

const files = fs.readdirSync('./');//not preferred use instead readdir asynchronous version
console.log(files)



//output

/* 
 ['.git', 'Node Getting started.odt', 'app.js', 'logger.js']
*/

