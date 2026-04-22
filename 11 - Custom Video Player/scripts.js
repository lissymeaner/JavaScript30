const playButton = document.querySelector('.player__button.toggle');
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackRateSlider = document.querySelector('[name="playbackRate"]');
const seekButtons = document.querySelectorAll('button[data-skip]');

let newCurrentTime = 0;

console.log(playButton);
console.log(video.paused);

function switchToPlaying() {
    playButton.classList.toggle('playing');
    playButton.innerHTML = '⏸';
    video.play();
}

function switchToPaused() {
    playButton.classList.toggle('paused');
    playButton.innerHTML = '►';
    video.pause();
}

function switchButtons(){
    if (playButton.classList.contains('paused')) {
        playButton.classList.toggle('paused');
        switchToPlaying();
    }
    else if (playButton.classList.contains('waiting')) {
        playButton.classList.toggle('waiting');
        switchToPlaying();
    }
    else if (playButton.classList.length === 2 && playButton.classList.contains('player__button', 'toggle')) {
        switchToPlaying();
    }
    else if (playButton.classList.contains('playing')) {
        playButton.classList.toggle('playing');
        switchToPaused();
    }
}

function togglePlayback() {
    switchButtons();

    if ((playButton.classList.contains('paused')) || playButton.classList.contains('waiting')
        || (playButton.classList.length === 2 && playButton.classList.contains('player__button', 'toggle'))
    ) {
        if (video.currentTime == video.duration){ video.currentTime = 0; }
        console.log('Your video is playing.');
        return true;
    }
    
    else if (playButton.classList.contains('playing')) {
        console.log('Your video has been paused.');
        return false;
    }
    else {return false;}
}

function updateProgressBar() {
    let progressPercentage = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
}

seekButtons.forEach(seekButton => {
    seekButton.addEventListener('click', (e) => {
        newCurrentTime = video.currentTime + parseFloat(seekButton.dataset.skip);
        if (video.duration >= newCurrentTime >= 0) { video.currentTime = newCurrentTime; }
        else if (newCurrentTime > video.duration) { video.currentTime = video.duration; }
        else { video.currentTime = 0;}
    })
});

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; 
    video.currentTime = scrubTime;
}

let mousedown = false;
volumeSlider.addEventListener("input", (e) => {video.volume = e.target.value});
playbackRateSlider.addEventListener("input", (e) => {video.playbackRate = e.target.value});
playButton.addEventListener('click', togglePlayback);
video.addEventListener('ended', () => {
    playButton.classList.toggle('playing');
    playButton.innerHTML = '►';
    console.log('Your video is has ended.');
});
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => {mousedown = true});
progress.addEventListener('mouseup', () => {mousedown = false});
setInterval(updateProgressBar, 100);