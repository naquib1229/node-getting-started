console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message){
    //Send an Http request
    console.log(message);

}


module.exports = log; //exporting a function