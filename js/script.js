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

// close function
// const closeRules = function () {
//   rules.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnShowRules.length; i++)
//   btnShowRules[i].addEventListener("click", openRules);
// btnCloseRules.addEventListener("click", closeRules);
// overlay.addEventListener("click", closeRules);

// Photos Variables
const btnOpenPhoto = document.querySelectorAll(".setting");
const btnbg = document.querySelector(".slider");

// Open Photos Function
const openPhoto = function () {
  photos.classList.remove("hidden");
};

// Close Photos Function
const closePhoto = function () {
  photos.classList.add("hidden");
};

for (let i = 0; i < btnOpenPhoto.length; i++)
  btnOpenPhoto[i].addEventListener("click", openPhoto);
btnbg.addEventListener("click", closePhoto);
// bgForm.addEventListener("click", closePhoto);

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
