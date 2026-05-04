const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.player__button.toggle');
const seekButtons = player.querySelectorAll('button[data-skip]');
const sliders = player.querySelectorAll('.player__slider');
const browse = document.querySelector('#browse');
const reset = document.querySelector('#reset');

let newCurrentTime = 0;

console.log(playButton);
console.log(video.paused);

// Toggles state of video playback between play and pause
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// Updates button based on playback state
function updateButton() {
    const icon = this.paused ? '►' : '⏸';
    playButton.textContent = icon;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function updateProgressBar() {
    const progressPercentage = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
}

function skip() {
    newCurrentTime = video.currentTime + parseFloat(seekButton.dataset.skip);
    if (video.duration >= newCurrentTime >= 0) { video.currentTime = newCurrentTime; }
    else if (newCurrentTime > video.duration) { video.currentTime = video.duration; }
    else { video.currentTime = 0;}
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; 
    video.currentTime = scrubTime;
}

function changeVideo() {
    const files = browse.files;

    if (files.length === 1){
        video.src = URL.createObjectURL(files[0]);
    } if (this.id === 'reset') {
        video.src = '652333414.mp4'
    }

    updateButton();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgressBar);

playButton.addEventListener('click', togglePlay);
seekButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener("change", handleRangeUpdate));
sliders.forEach(slider => slider.addEventListener("mousemove", handleRangeUpdate));

// Other code
// video.addEventListener('ended', () => {
//     playButton.classList.toggle('playing');
//     playButton.innerHTML = '►';
//     console.log('Your video is has ended.');
// });

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => {mousedown = true});
progress.addEventListener('mouseup', () => {mousedown = false});

browse.addEventListener('cancel', null);
browse.addEventListener('change', changeVideo);
reset.addEventListener('click', changeVideo);

// Other code
// function switchToPlaying() {
//     playButton.classList.toggle('playing');
//     playButton.innerHTML = '⏸';
//     video.play();
// }

// function switchToPaused() {
//     playButton.classList.toggle('paused');
//     playButton.innerHTML = '►';
//     video.pause();
// }

// function switchButtons(){
//     if (playButton.classList.contains('paused')) {
//         playButton.classList.toggle('paused');
//         switchToPlaying();
//     }
//     else if (playButton.classList.contains('waiting')) {
//         playButton.classList.toggle('waiting');
//         switchToPlaying();
//     }
//     else if (playButton.classList.length === 2 && playButton.classList.contains('player__button', 'toggle')) {
//         switchToPlaying();
//     }
//     else if (playButton.classList.contains('playing')) {
//         playButton.classList.toggle('playing');
//         switchToPaused();
//     }
// }

// function togglePlayback() {
//     switchButtons();

//     if ((playButton.classList.contains('paused')) || playButton.classList.contains('waiting')
//         || (playButton.classList.length === 2 && playButton.classList.contains('player__button', 'toggle'))
//     ) {
//         if (video.currentTime == video.duration){ video.currentTime = 0; }
//         console.log('Your video is playing.');
//         return true;
//     }
    
//     else if (playButton.classList.contains('playing')) {
//         console.log('Your video has been paused.');
//         return false;
//     }
//     else {return false;}
// }