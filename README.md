# roundinterval
A simple package to help you run round intervals

**How to install:**
```bash
npm install roundinterval
```

**Github repository:**
[github.com/ubarilan/roundinterval](https://github.com/ubarilan/roundinterval)

**Example of usage:**
```js
import roundinterval from 'roundinterval';

roundinterval.startRoundTimer({
    //Here we set the interval time
    seconds: 10,
    /*
    minutes: x,
    hours: x
    */
    },() => {
        console.log("I am synchronized to run every round 10 seconds!", new Date())
}, true /* determines whether the will run when the minutes in a time is 10 or every round 10 seconds.
Example: 30, 40, 50, 0, 10, etc.
*/)
```