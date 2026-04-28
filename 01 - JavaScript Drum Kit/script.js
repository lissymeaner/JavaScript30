function removeTransition(e){
    if (e.propertyName !== 'transform') return; // if the event target does not have a transform property assigned to them, return nothing,
    e.target.classList.remove('playing'); // otherwise, remove the .playing class.
}

function playSound(e){
    // Variables
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    // console.log(audio); // Debug
    // console.log(key); // Debug

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // Start audio from the beginning
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown",playSound);

const recorder = document.querySelector('.recorder');
const control = recorder.firstElementChild;

control.addEventListener('click', () => {
    control.classList.toggle('on');
    if (control.classList.contains('on')){
    control.innerHTML = '⏹';
    } else { control.innerHTML = '⏺'}
    // console.log(control); // DEBUG
});

