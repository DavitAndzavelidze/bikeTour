"use strict";
const btnShowRules = document.querySelectorAll(".title");
const btnCloseRules = document.querySelector(".close-rules");
const rules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");

// open function
const openRules = function () {
  rules.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Photos Variables
const btnOpenPhoto = document.querySelectorAll(".setting");
const btnbg = document.querySelector(".slider");

// Maps
const btnShowMap = document.querySelectorAll(".location");
const btnCloseMap = document.querySelector(".close-map");
const map = document.querySelector(".map");

// Open Map Function
const openMap = function () {
  map.classList.remove("hidden");
};

// Close Map Function
const closeMap = function () {
  map.classList.add("hidden");
};

for (let i = 0; i < btnShowMap.length; i++)
  btnShowMap[i].addEventListener("click", openMap);
btnCloseMap.addEventListener("click", closeMap);
// bgForm.addEventListener("click", closeMap);

// Slider
let counter = 1;
setInterval(function () {
  document.querySelector("#radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// Cursor Style
let cursor = document.querySelector("#cursor");
document.onmousemove = function (e) {
  cursor.style.left = e.pageX - 25 + "px";
  cursor.style.top = e.pageY - 25 + "px";
  cursor.style.display = "block";
};
