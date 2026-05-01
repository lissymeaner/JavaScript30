function removeTransition(e){
    if (e.propertyName !== 'transform') return; // if the event target does not have a transform property assigned to them, return nothing,
    e.target.classList.remove('playing'); // otherwise, remove the .playing class.
}

function playSound(e){
    // Variables
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    // console.log(audio); // DEBUG
    // console.log(key); // DEBUG

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // Start audio from the beginning
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown",playSound);

// const recorder = document.querySelector('.recorder');
// const control = recorder.firstElementChild;

// function toggleControl() {
//     control.classList.toggle('on');
//     if (control.classList.contains('on')) {
//         control.innerHTML = '⏹';
//         mediaRecorder.start();
//     } else {
//         control.innerHTML = '⏺';
//         mediaRecorder.stop();
//     }
// }

// let constraints = {audio: true};

// navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((rStream) => {
//         /* use the stream */
//         let recordedAudio = document.querySelector('#recordedAudio');
//         let mediaRecorder = new MediaRecorder(rStream);
//         let chunks = [];

//         if ("srcObject" in recordedAudio) {
//             recordedAudio.srcObject = rStream;
//         }

//         recordedAudio.addEventListener('loadedmetadata', function(e){
//             recordedAudio.play();
//         });

//         mediaRecorder.addEventListener('dataavailable', function(e){
//             chunks.push(e.data);
//             console.log(e);
//         });
        
//         mediaRecorder.addEventListener('stop', function(e){
//             let blob = new Blob(chunks, {'type': 'audio/mp3'});
            
//             chunks = [];
            
//             audioSrc = window.URL.createObjectURL(blob);
//             recordedAudio.src = audioSrc;
            
//             console.log(e);
//         });
        
//         control.addEventListener('click', () => toggleControl()); // console.log(control); // DEBUG
//     })
//     .catch((err) => {
//         /* handle the error */
//         console.log(err.name, err.message);
//     });

