var url = 'http://mylogger.io/log';

function log(message){
    //Send an H(ttp request
    console.log(message);

}

//module.exports.log = log; //exporting a module object
//module.exports.endpoint = url;

module.exports = log; //exporting a function