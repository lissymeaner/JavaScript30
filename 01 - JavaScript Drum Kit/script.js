// Variables

// Div tag with .keys class
const keys = document.querySelector(".keys");
const individualKeys = keys.children;
// console.log(keys); // Debug

// Array of audio tags
const audios = document.querySelectorAll("audio");
// console.log(audios); // Debug


function func(event){
    switch (event.key) {
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
            for (i = 0; i <= (individualKeys.length-1); i++) {
                let key = individualKeys[i];
                if (key.firstElementChild.innerHTML == event.key.toUpperCase()){
                    if (key.dataset.role == audios[i].dataset.role){
                        key.classList.add('playing');
                        audios[i].play();
                    }
                }
            }
            break;
        default:
            break;
    }
}

function func2(event) {
    for (i = 0; i <= (individualKeys.length-1); i++) {
        let key = individualKeys[i];
        if (key.classList.contains('playing')){
            key.classList.remove('playing');
        }
    }
}

document.addEventListener("keydown",func);
document.addEventListener("keyup", func2);