const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

//output
/* 
{
    root: '/',
    dir: '/home/naquib/Node/node-getting-started',
    base: 'app.js',
    ext: '.js',
    name:'app'
}
*/

