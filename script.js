var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

function makeGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = color1.value + "," + color2.value + ";";
}

makeGradient();

function randomColor() {
  var hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var hex2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color1.value = hex;
  color2.value = hex2;
  makeGradient();
}
