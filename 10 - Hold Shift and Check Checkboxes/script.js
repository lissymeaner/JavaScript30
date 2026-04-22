const inbox = document.querySelector('.inbox');

  // Session 1: Completed debugging first part
  // Session 2: Began watching solution video out of desperation
  // Session 3: Asked AI for assistance
  // Session 4: ...
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  let lastChecked = null;
  
  function handleCheckBoxes(e){
    console.log(this);
    
    let inBetween = false;
    // Check if shift key was down
    // Check if unchecked or not
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkbox => { 
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log(inBetween);
            }
            if (inBetween || checkbox === this || checkbox === lastChecked) {
                checkbox.checked = true;
            }
            else { checkbox.checked = false; }
            if (checkbox === checkBoxes[checkBoxes.length - 1]){
                lastChecked = this;
            }
        });
    } else if ((!(e.shiftKey) && this.checked)){
        lastChecked = this;
    }
    
  }

  // function empty() {
  //   null;
  // }
  
  // function func(){
  //   null;
  // }
  
  checkBoxes.forEach(checkbox => { checkbox.addEventListener("click", handleCheckBoxes) });
  
  // document.addEventListener("keydown", empty);
  // document.addEventListener("keyup", empty);