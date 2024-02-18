const headerBtn = document.querySelector(".mobile-btn");
const headerMenu = document.querySelector(".fixed-header > .menu");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.screen.width <= 767) {
    document.querySelector(".fixed-header").classList.add("mobile");
  } else {
    document.querySelector(".fixed-header").classList.remove("mobile");
  }
});

window.onload = function () {
  document.querySelector(".background-img").classList.add("show");
};
