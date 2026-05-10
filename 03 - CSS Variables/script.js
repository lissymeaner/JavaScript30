// CONSTANTS
const image = document.querySelector('img');
const imagePicker = document.querySelector('#image');
const spacingSlider = document.querySelector('#spacing');
const blurSlider = document.querySelector('#blur');
const baseColorPicker = document.querySelector('#base');
const resetImageButton = document.querySelector('#reset');
const element = document.documentElement;

// VARIABLES
let spacingVar = getComputedStyle(element).getPropertyValue("--img-border-spacing");
let blurVar = getComputedStyle(element).getPropertyValue("--img-blur");
let baseColorVar = getComputedStyle(element).getPropertyValue("--base-color");

/////////////////////////////////////// Testing ///////////////////////////////////////

// console.log(spacingVar); // DEBUG
// console.log(blurVar); // DEBUG
// console.log(baseColorVar); // DEBUG

/////////////////////////////////// Changing values ///////////////////////////////////

// Changing image
imagePicker.addEventListener('cancel', null);

imagePicker.addEventListener('change', () => {imagePicker.files.length === 1 && image.src; image.src = URL.createObjectURL(imagePicker.files[0])});

resetImageButton.addEventListener('click', () => {
    image.src = 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9';
});

// Changing spacing
/** Function for changing spacing of image border.
 * @param {*} event Represents the event occurring.
*/
function changeSpacing(event) {
    spacingVar = `${(event.target.value/50)}rem`;
    element.style.setProperty("--img-border-spacing",spacingVar);
}

spacingSlider.addEventListener("input", changeSpacing);


// Changing blur
/** Function for changing blur of image.
 * @param {*} event Represents the event occurring.
 */
function changeBlur(event) {
    blurVar = `${(event.target.value/6.25)}rem`;
    element.style.setProperty("--img-blur",blurVar);
}

blurSlider.addEventListener("input", changeBlur);


// Changing base colour
/** Function for updating base colour of image upon first loading. */
function updateFirst() {
    baseColorVar = baseColorPicker.value;
    element.style.setProperty("--base-color",baseColorVar);
}

/** Function for changing base colour of image.
 * @param {*} event Represents the event occurring.
 */
function changeColour(event) {
    baseColorVar = event.target.value;
    element.style.setProperty("--base-color",baseColorVar);
}

// Extra event listeners:
// #1 is for when webpage first loads
document.addEventListener("DOMContentLoaded", updateFirst);
// #2 is for when user inputs colour value
baseColorPicker.addEventListener("input", changeColour);
// #3 is for when transition on each key element ends.
baseColorPicker.addEventListener("change", changeColour);