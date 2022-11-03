"use strict";

const navOpenButton = document.querySelector(".mobile-menu__open");
const navCloseButton = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".menu");
const mobileMenuDarken = document.querySelector(".darken");

console.log(navOpenButton);
console.log(navCloseButton);

navOpenButton.addEventListener("click", () => {
  navOpenButton.style.display = "none";
  navCloseButton.style.display = "block";
  mobileMenu.style.display = "block";
  mobileMenuDarken.classList.toggle("invisible");
});

navCloseButton.addEventListener("click", () => {
  navOpenButton.style.display = "block";
  navCloseButton.style.display = "none";
  mobileMenu.style.display = "none";
  mobileMenuDarken.classList.toggle("invisible");
});
