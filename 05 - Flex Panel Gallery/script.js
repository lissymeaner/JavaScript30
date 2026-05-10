// Constants
/** A list of nodes with the .panel class.*/
const panels = document.querySelectorAll('.panel');

// Functions
/**
 * Toggles the .open class on (preferably) a .panel element.
 */
function toggleOpen() {
    // console.log('open'); // DEBUG
    this.classList.toggle("open");
}

/**
 * Toggles the .open-active class on (preferably) a .panel element.
 * @param {*} e Represents the event occurring.
 */
function toggleActive(e) {
    // console.log(e.propertyName); // DEBUG
    if (e.propertyName.includes('flex')) {
        this.classList.toggle("open-active");}
}

// Event listeners
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// My code
// const panels = document.querySelector('.panels');

// function open(element) {
//     // console.log('open'); // DEBUG
//     element.classList.add("open", "open-active");
//     setTimeout(() => {element.classList.remove("open-active")},750);
// }

// function close(element) {
//     // console.log('close'); // DEBUG
//     element.classList.remove("open");

// panels.addEventListener('click', function(e) {
//     if (e.target.closest('.panel') && !(e.target.matches(".panel > p:nth-child(1)"))){
//         open(e.target.closest('.panel'));
//     }
// });

// panels.addEventListener('mouseout', function(e) {
//     if (e.target.closest('.panel')){
//         close(e.target.closest('.panel'));
//     }
// });