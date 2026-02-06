import "./styles.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const content = document.querySelector("#content");

function clearContent() {
  content.textContent = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  loadAbout();
});

loadHome();
