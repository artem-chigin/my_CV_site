const header = document.querySelector(".header");
const navBtn = document.querySelector(".mobile-nav-buttons");

navBtn.addEventListener("click", function () {
  header.classList.toggle("open-nav");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("open-nav");
  });
});
