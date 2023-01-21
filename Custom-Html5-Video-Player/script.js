// Get our elements

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progess__filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

// Build out our functions

function togglePlay(){
    const method = video.paused ? 'play': 'pause';
    video[method]();
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

