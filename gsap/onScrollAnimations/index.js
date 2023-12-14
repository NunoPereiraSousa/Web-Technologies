// let boxesArray = document.querySelectorAll(".box");
let boxesArray = gsap.utils.toArray(".box");

// for (let i = 0; i < boxesArray.length; i++) {
//   gsap.to(boxesArray[i], {
//     scrollTrigger: {
//       trigger: boxesArray[i],
//       markers: true,
//       start: "top 85%",
//       toggleActions: "restart reverse none none",
//     },
//     translateX: 100,
//   });
// }

boxesArray.forEach((box) => {
  gsap.fromTo(
    box,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: box,
        markers: true,
        start: "top 85%",
        toggleActions: "restart reverse none none",
      },
      rotate: 360,
      translateX: 100,
      opacity: 1,
      ease: "bounce.out",
      duration: 2,
    }
  );
});
