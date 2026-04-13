const image = document.querySelector('img');
const spacingSlider = document.querySelector('#spacing');
const blurSlider = document.querySelector('#blur');
const baseColorPicker = document.querySelector('#base');
const element = document.documentElement;

let spacingVar = getComputedStyle(element).getPropertyValue("--img-border-spacing");
let blurVar = getComputedStyle(element).getPropertyValue("--img-blur");
let baseColorVar = getComputedStyle(element).getPropertyValue("--base-color");

/////////////////////////////////////// Testing ///////////////////////////////////////

console.log(spacingVar); // Debug
console.log(blurVar); // Debug
console.log(baseColorVar); // Debug

/////////////////////////////////// Changing values ///////////////////////////////////

// Changing spacing
function changeSpacing(event) {
    spacingVar = `${(event.target.value/50)}rem`;
    element.style.setProperty("--img-border-spacing",spacingVar);
}

spacingSlider.addEventListener("input", changeSpacing);


// Changing blur
function changeBlur(event) {
    blurVar = `${(event.target.value/6.25)}rem`;
    element.style.setProperty("--img-blur",blurVar);
}

blurSlider.addEventListener("input", changeBlur);


// Changing base colour
function updateFirst() {
    baseColorVar = baseColorPicker.value;
    element.style.setProperty("--base-color",baseColorVar);
}

function changeColour(event) {
    baseColorVar = event.target.value;
    element.style.setProperty("--base-color",baseColorVar);
}

document.addEventListener("DOMContentLoaded", updateFirst);
baseColorPicker.addEventListener("input", changeColour);
baseColorPicker.addEventListener("change", changeColour);