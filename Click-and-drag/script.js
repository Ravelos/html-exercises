const slider = document.querySelector('.items');
let isDown = false;
let StartX;
let scrollLeft;

slider.addEventListener('mousedown', () =>{
    isDown = true;
    slider.classList.add('active');
});

slider.addEventListener('mouseleave', () =>{
    slider.classList.remove('active');
    isDown = false;
});

slider.addEventListener('mouseup', ()=>{
    slider.classList.remove('active');
    isDown = false;

});

slider.addEventListener('mousemove', () =>{
    if(!isDown) return // stop the fn from running
    console.count(isDown);
});