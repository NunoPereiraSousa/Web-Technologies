let navbar = document.querySelector(".mobile-navigation");
let hamburger = document.querySelector(".navigation_hamburger");
let linksContainer = document.querySelector(".mobile");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("show");
  linksContainer.classList.toggle("hide");
});
