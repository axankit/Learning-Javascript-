const grey = document.querySelector("#grey");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");

const fullscreen = document.querySelector(".fullscreen");

/*
grey.addEventListener("click", () => {
  fullscreen.style.backgroundColor = "grey";
});

white.addEventListener("click", () => {
  fullscreen.style.backgroundColor = "white";
});

blue.addEventListener("click", () => {
  fullscreen.style.backgroundColor = "blue";
});

yellow.addEventListener("click", () => {
  fullscreen.style.backgroundColor = "yellow";
});

*/

function changecolor(color) {
  return (fullscreen.style.backgroundColor = color);
}

grey.addEventListener("click", () => changecolor("grey"));
white.addEventListener("click", () => changecolor("white"));
blue.addEventListener("click", () => changecolor("blue"));
yellow.addEventListener("click", () => changecolor("yellow"));


