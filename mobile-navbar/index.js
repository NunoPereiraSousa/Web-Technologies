let hamburger = document.querySelector(".mobile_navigation_hamburger");
let panel = document.querySelector(".mobile_navigation_panel");
let cross = document.querySelector(".mobile_navigation_panel_cross");
let links = document.querySelectorAll(".mobile_navigation_panel_link");

let tl = gsap.timeline();

hamburger.addEventListener("click", () => {
  tl.to(panel, {
    duration: 1,
    xPercent: 100,
    ease: "expo.out",
  });

  gsap.fromTo(
    links,
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      yPercent: 0,
      stagger: 0.05,
      ease: "expo.out",
      duration: 1,
      delay: 0.75,
    }
  );
});

cross.addEventListener("click", () => {
  gsap.to(panel, {
    duration: 1,
    xPercent: 0,
    ease: "expo.out",
  });
});
