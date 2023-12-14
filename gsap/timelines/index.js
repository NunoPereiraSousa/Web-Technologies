let timeline = gsap.timeline();

timeline.to(".orangeBox", {
  rotation: 360,
  translateX: 200,
  duration: 2,
  ease: "bounce.out",
  delay: 1.5,
});

timeline.to(".blueBox", {
  skewX: 20,
  translateY: -150,
  duration: 1.5,
});
