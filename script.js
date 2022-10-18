"use strict";

const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".loop-mobile");
const closeBtn = document.querySelector(".close-btn");
const ataps = document.querySelectorAll("a");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  if (!overlay.classList.contains("active")) {
    overlay.classList.add("active");
    closeBtn.classList.add("active");
    body.classList.add("overflow");
  }
});

closeBtn.addEventListener("click", () => {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");
    body.classList.remove("overflow");
  }
});

ataps.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
  })
);
