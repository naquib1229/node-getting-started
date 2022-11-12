const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//Template string
//ES6 / ES2015 : ECMAScript

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);


//output

/* 
Total Memory: 7631052800 
Free Memory: 5072429056
*/

