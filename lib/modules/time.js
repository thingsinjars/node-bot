var Module = require('./module');
var util = require('util');

function Time() {
    Module.call(this, 'Time');
}

util.inherits(Time, Module);

Time.prototype.understands = function(cmd) {
    return (/time/ig).test(cmd);
};

Time.prototype.execute = function(input, callback) {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();
    callback('It is ' + hours + ':' + (minutes > 9 ? minutes : '0' + minutes));
};

module.exports = Time;