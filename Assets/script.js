const headerBtn = document.querySelector(".mobile-btn");
const headerMenu = document.querySelector(".fixed-header > .menu");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

const fixedHeaderSet = () => {
  if (document.documentElement.clientWidth <= 767) {
    document.querySelector(".fixed-header").classList.add("mobile");
  } else {
    document.querySelector(".fixed-header").classList.remove("mobile");
  }
};

document.addEventListener("DOMContentLoaded", fixedHeaderSet);

window.onload = function () {
  document.querySelector(".background-img").classList.add("show");
};

window.addEventListener("resize", fixedHeaderSet);
