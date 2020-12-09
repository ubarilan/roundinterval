"use strict";
exports.__esModule = true;
exports.startRoundTimer = exports.getTimeout = void 0;
// This funcion calculates the time to wait between checks
function getTimeout(timer) {
    if (timer.seconds || timer.seconds == 0)
        return 1000;
    if (timer.minutes || timer.minutes == 0)
        return 60000;
    if (timer.hours || timer.hours == 0)
        return 3600000;
    throw 'Bad parameters';
}
exports.getTimeout = getTimeout;
//This is the main function
function startRoundTimer(timer, toDo, every) {
    setInterval(function () {
        var date = new Date();
        //These varriables here are to save some runtime
        var secondsNow = date.getSeconds();
        var minutesNow = date.getMinutes();
        var hoursNow = date.getHours();
        //Checks if the seconds are eligible for executins the given function
        var conditionForSeconds = !timer.seconds ? true : secondsNow === timer.seconds;
        if (secondsNow == 0 && every) {
            if (60 % timer.seconds == 0)
                conditionForSeconds = conditionForSeconds = 60 % timer.seconds == 0;
        }
        else if (every && secondsNow !== 0) {
            if (secondsNow % timer.seconds == 0)
                conditionForSeconds = conditionForSeconds || secondsNow % timer.seconds == 0;
        }
        //Checks if the minutes are eligible for executins the given function
        var conditionForMinutes = !timer.minutes ? true : minutesNow === timer.minutes;
        if (minutesNow == 0 && every) {
            if (60 % timer.minutes == 0)
                conditionForMinutes = conditionForMinutes = 60 % timer.minutes == 0;
        }
        else if (every && minutesNow !== 0) {
            if (minutesNow % timer.minutes == 0)
                conditionForMinutes = conditionForMinutes || minutesNow % timer.minutes == 0;
        }
        //Checks if the hours are eligible for executins the given function
        var conditionForHours = !timer.hours ? true : hoursNow === timer.hours;
        if (hoursNow == 0 && every) {
            if (24 % timer.hours == 0)
                conditionForHours = conditionForHours = 24 % timer.hours == 0;
        }
        else if (every && hoursNow !== 0) {
            if (hoursNow % timer.hours == 0)
                conditionForHours = conditionForHours || hoursNow % timer.hours == 0;
        }
        //Here we add all the three other conditions to see if they match the given timer
        var condition = conditionForSeconds && conditionForMinutes && conditionForHours;
        if (condition)
            toDo();
    }, getTimeout(timer));
}
exports.startRoundTimer = startRoundTimer;
