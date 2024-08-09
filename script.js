
// Function to be executed every second
// function printEverySecond() {
//     var date = new Date();
//     console.log(date.getSeconds())
//   }
  
//   // Call the printEverySecond function every 1000 milliseconds (1 second)
// setInterval(printEverySecond, 1000);
  

// let s = setInterval(minute, 1000);
// function minute() {
//     let date = new Date();
//     if(date.getSeconds !== 0) {
//         clearInterval(s)
//         console.log(date.getMinutes());

//     }else {
//         setInterval(minute, 1000)
//         console.log(date.getMinutes());
//     }
// }

// const demo = document.getElementById("demo");
// demo.innerHTML = date

setInterval(() => {
    let date = new Date();
    const demo = document.getElementById("demo");
demo.innerHTML = date.getSeconds()
}, 1000);

// let date = new Date();
// const minute = document.getElementById("minute");
// setInterval(() => {
//     let date = new Date()
//     minute.innerHTML = date.getMinutes()
// }, 60000);


// Variable to keep track of the last minute
// let lastMinute = -1;

// // Function to check the current minute
// function checkMinuteChange() {
//   // Get the current date and time
//   const now = new Date();
//   // Get the current minute
//   const currentMinute = now.getMinutes();

//   // Compare with the last minute
//   if (currentMinute !== lastMinute) {
//     // Minute has changed, perform your action here
//     console.log(`Minute changed: ${currentMinute}`);

//     // Update the lastMinute variable to the current minute
//     lastMinute = currentMinute;
//   }
// }

// // Set an interval to check every second (1000 milliseconds)
// setInterval(checkMinuteChange, 1000);





function minute() {
    let date = new Date();
    const minute = document.getElementById("minute");
    let lm = date.getMinutes()
    minute.innerHTML = lm;
    let cm = date.getMinutes();
    if(cm !== lm){
        minute.innerHTML = date.getMinutes();
    }
}
setInterval(minute(),1000)
function hour() {
    let date = new Date();
    const hour = document.getElementById("hour");
    let lh = date.getHours()
    hour.innerHTML = lh;
    let ch = date.getHours();
    if(ch !== lh){
        hour.innerHTML = date.getHours();
    }

}

setInterval(hour(),1000)

var sec = 0;
var min =0;
var hour1 = 0
function stopwatch() {
 
    sec++
        if (sec < 10 ){
            document.getElementById("seconds").innerHTML = "0"+sec
        }else {
            document.getElementById("seconds").innerHTML = sec
        }
        
        if(sec == 60) {
            min++;
            sec = 0
            if (min < 10 ){
                document.getElementById("minutes").innerHTML = "0"+min
            }else {
                document.getElementById("minutes").innerHTML = min
            }
        }

        if(min == 60) {
            hour1++;
            min = 0
            if (hour1 < 10 ){
                document.getElementById("hours").innerHTML = "0"+hour1
            }else {
                document.getElementById("hours").innerHTML = hour1
            }
        }

}


let timer = null
function start() {
    if(timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}

let count = 0;
function stop() {
    clearInterval(timer)
}

function reset() {
    clearInterval(timer);
    document.getElementById("seconds").innerHTML = "00"
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00";
    sec = 0;
    min = 0;
    hour1 = 0

}