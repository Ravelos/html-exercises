const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

function randTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes){
    console.log(holes.length);
}