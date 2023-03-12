const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
//   e.stopPropagation(); // stop bubbling up
}

divs.forEach((div) =>
  div.addEventListener('click', logText, { capture: false, once:true })
);
