"use strict";

var button = document.querySelector("button");
var side = document.querySelector("aside");
button.addEventListener('click', function (e) {
  if (side.classList.contains("open")) {
    side.classList.remove("open");
    button.innerHTML = "&gt;&gt;";
  } else {
    side.classList.add("open");
    button.innerHTML = "&lt;&lt;";
  }
});