const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add('highlight');
document.body.append('highlight');

function highlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    highlight.style.width =`${linkCoords}px`;
    highlight.style.height =`${linkCoords}px`;
    highlight.style.transform =`translate(${linkCoords.left}px,${linkCoords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));