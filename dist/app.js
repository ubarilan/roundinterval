"use strict";
exports.__esModule = true;
var functions_1 = require("./functions");
module.exports = {
    startRoundTimer: functions_1.startRoundTimer,
    getTimeout: functions_1.getTimeout
};
functions_1.startRoundTimer({
    seconds: 10
}, function () { return console.log("I am synchronized!", new Date()); }, true);
