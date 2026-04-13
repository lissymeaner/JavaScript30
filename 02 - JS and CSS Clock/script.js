// HANDS
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");


function spinClock() {
    // Date
    const date = new Date();

    // Time dimensions
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    mils = date.getMilliseconds();

    // Rotate the hands
    hourHand.style.transform = `rotate(${(((hours+(mins/60)) * 30)/360)*360}deg)`
    minHand.style.transform = `rotate(${(((mins+(secs/60)) * 6)/360)*360}deg)`
    secondHand.style.transform = `rotate(${(((secs+((mils)/1000)) * 6)/360)*360}deg)`

    // Console.log for debugging
    console.log(`Hours: ${(hours+(mins/60))}`);
    console.log(`Mins: ${(mins+(secs/60))}`);
    console.log(`Secs: ${(secs+((mils)/1000))}`);
}

// Set interval for executing spinClock function
setInterval(spinClock, 10);