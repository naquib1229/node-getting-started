var url = 'http://mylogger.io/log';

function log(message){
    //Send an H(ttp request
    console.log(message);

}

module.exports.log = log;
//module.exports.endpoint = url;