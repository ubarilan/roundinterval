import { Clock } from './types';

// This funcion calculates the time to wait between checks
export function getTimeout(timer: Clock): number {
    if(timer.seconds || timer.seconds == 0) return 1000;
    if(timer.minutes || timer.minutes == 0) return 60000;
    if(timer.hours || timer.hours == 0) return 3600000;
    throw 'Bad parameters';
}

function getIsEligibleToRunAtZero(num: number, type: string = "normal"): boolean {
    if(num === 0) return true;
    else if((type == "normal" ? 60 : 24) % num == 0) return true;
    else return false;
}

function actuallyExists(num: any): boolean {
    if(num === undefined || num === null) return false
    else return true;
}
//This is the main function
export function startRoundTimer(timer: Clock , toDo, every?: boolean): void {
    setInterval(()=> {
        let date = new Date();
        //These varriables here are to save some runtime
        let secondsNow = date.getSeconds();
        let minutesNow = date.getMinutes();
        let hoursNow = date.getHours();
        
        //Checks if the seconds are eligible for executins the given function
        let conditionForSeconds: boolean = !actuallyExists(timer.seconds)  ? true : secondsNow === timer.seconds;
        if(secondsNow == 0 && every) {
            if(60 % timer.seconds == 0 || timer.seconds == 0) conditionForSeconds = conditionForSeconds = 60 % timer.seconds == 0
        } else if(every && secondsNow !== 0) {
            if(secondsNow % timer.seconds == 0) conditionForSeconds = conditionForSeconds || secondsNow % timer.seconds == 0
        }
        
        //Checks if the minutes are eligible for executins the given function
        let conditionForMinutes: boolean = !actuallyExists(timer.minutes) ? true : minutesNow === timer.minutes;
        if(minutesNow == 0 && every) {
            if(60 % timer.minutes == 0|| timer.minutes == 0) conditionForMinutes = conditionForMinutes = 60 % timer.minutes == 0
        } else if(every && minutesNow !== 0) {
            if(minutesNow % timer.minutes == 0) conditionForMinutes = conditionForMinutes || minutesNow % timer.minutes == 0
        }
        //Checks if the hours are eligible for executins the given function
        let conditionForHours: boolean = !actuallyExists(timer.hours) ? true : hoursNow === timer.hours;
        if(hoursNow == 0 && every) {
            if(24 % timer.hours == 0 || timer.hours == 0) conditionForHours = conditionForHours = 24 % timer.hours == 0
        } else if(every && hoursNow !== 0) {
            if(hoursNow % timer.hours == 0) conditionForHours = conditionForHours || hoursNow % timer.hours == 0
        }
    
        //Here we add all the three other conditions to see if they match the given timer
        let condition: boolean = conditionForSeconds && conditionForMinutes && conditionForHours;
        if(condition) 
            toDo();
    }, getTimeout(timer))
}
