import { startRoundTimer, getTimeout } from './functions';

module.exports = {
    startRoundTimer,
    getTimeout
}

startRoundTimer({seconds: 0}, () => console.log(new Date()))