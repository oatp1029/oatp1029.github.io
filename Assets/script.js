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

window.addEventListener("scroll", function () {
  var top = this.scrollY;

  if (top > 80) {
    document.querySelector(".fixed-header").classList.add("fixed");
  } else {
    document.querySelector(".fixed-header").classList.remove("fixed");
  }
});

document.addEventListener("DOMContentLoaded", fixedHeaderSet);

window.onload = function () {
  document.querySelector(".background-img").classList.add("show");
};

window.addEventListener("resize", fixedHeaderSet);

const handleResponse = async (response) => {
  console.log("blogger response", response);
  var post_number = Object.keys(response.items).length; //number of posts
  for (i = 0; i < post_number; i++) {
    await document.querySelector(".blog-inner").append(`<div class="postcard">
      <p class="blog-title">${response.items[i].title}</p>
      <p class="blog-content">${response.items[i].content}</p>
      <p class="published">${response.items[i].published}</p>
      <a class="blog-link-btn" href="${response.items[i].url}"> View </a>
    </div>`);
  }
  /*
  const cards = document.querySelectorAll(".postcard");
  cards.forEach((e) => {
    e.html();
    

  })
  */
};
