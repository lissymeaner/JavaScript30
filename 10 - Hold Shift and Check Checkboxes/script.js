// Constants
const checkBoxes = document.querySelectorAll("input[type=checkbox]");

// Variables
let lastChecked = null;

// Functions
/** Function for handling checks to checkboxes. */
function handleCheckBoxes(e){
    // console.log(this); // DEBUG

    /** Variable for checking checkboxes in between
     * the lastChecked and the targeted checkbox. */
    let inBetween = false;

    // Check if shift key was down AND
    // if the user has checked it or not
    if (e.shiftKey && this.checked) {
        // For every checkbox to check ...
        checkBoxes.forEach(checkBox => { 
            // Is this checkbox what the user has just clicked on
            // or the last checkbox the user clicked on?
            if (checkBox === this || checkBox === lastChecked) {
                // If yes to either or both of these, toggle inBetween
                // either "from true to false" or " from false to true".
                inBetween = !inBetween;
                // console.log(inBetween); // DEBUG
            }
            // If we are "in between" the lastCheckBox and
            // and the checkbox to end the chain (this),
            // check each checkbox in between those checkboxes.
            if (inBetween) { checkBox.checked = true; }
        });
    }
    // Set lastChecked to the checkbox the user just clicked.
    lastChecked = this;
}

// Event listener for handling each checkbox
checkBoxes.forEach(checkBox => { checkBox.addEventListener("click", handleCheckBoxes) });

// My code
// const inbox = document.querySelector('.inbox');

// // Session 1: Completed debugging first part
// // Session 2: Began watching solution video out of desperation
// // Session 3: Asked AI for assistance
// // Session 4: ...
// const checkBoxes = document.querySelectorAll("input[type=checkbox]");
// let lastChecked = null;

// function handleCheckBoxes(e){
// // console.log(this); // DEBUG

// let inBetween = false;
// // Check if shift key was down
// // Check if unchecked or not
// if (e.shiftKey && this.checked) {
//     checkBoxes.forEach(checkbox => { 
//         if (checkbox === this || checkbox === lastChecked) {
//             inBetween = !inBetween;
//             // console.log(inBetween); // DEBUG
//         }
//         if (inBetween || checkbox === this || checkbox === lastChecked) {
//             checkbox.checked = true;
//         }
//         else { checkbox.checked = false; }
//         if (checkbox === checkBoxes[checkBoxes.length - 1]){
//             lastChecked = this;
//         }
//     });
// } else if ((!(e.shiftKey) && this.checked)){
//     lastChecked = this;
// }

// }
// function empty() {
//   null;
// }

// function func(){
//   null;
// }

// document.addEventListener("keydown", empty);
// document.addEventListener("keyup", empty);