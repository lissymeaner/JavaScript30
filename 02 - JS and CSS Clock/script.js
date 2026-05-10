// CONSTANTS: HANDS
/** Hour hand of the clock. */
const hourHand = document.querySelector(".hour-hand");
/** Minute hand of the clock. */
const minHand = document.querySelector(".min-hand");
/** Second hand of the clock. */
const secondHand = document.querySelector(".second-hand");

// FUNCTIONS
/** Function for the clock mechanism. */
function spinClock() {
    // Date
    /** Instance of a Date object. */
    const date = new Date();
    
    // Time dimensions
    /** Variable that holds real-time value of hours. */
    let hours = date.getHours();
    /** Variable that holds real-time value of minutes. */
    let mins = date.getMinutes();
    /** Variable that holds real-time value of seconds. */
    let secs = date.getSeconds();
    /** Variable that holds real-time value of milliseconds. */
    let mils = date.getMilliseconds();

    // Rotate the hands
    hourHand.style.transform = `rotate(${(((hours+(mins/60)) * 30)/360)*360}deg)`
    minHand.style.transform = `rotate(${(((mins+(secs/60)) * 6)/360)*360}deg)`
    secondHand.style.transform = `rotate(${(((secs+((mils)/1000)) * 6)/360)*360}deg)`

    // Console.log for debugging
    // console.log(`Hours: ${(hours+(mins/60))}`);
    // console.log(`Mins: ${(mins+(secs/60))}`);
    // console.log(`Secs: ${(secs+((mils)/1000))}`);
}

// Set interval for executing spinClock function
setInterval(spinClock, 10);