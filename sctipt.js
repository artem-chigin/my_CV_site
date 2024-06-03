const header = document.querySelector(".header");
const navBtn = document.querySelector(".mobile-nav-buttons");

navBtn.addEventListener("click", function () {
  header.classList.toggle("open-nav");
});
