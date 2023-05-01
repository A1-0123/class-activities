// gsap.to("div", {duration: 10 ,opacity: 0});
// gsap.from(".square", {duration: 10 ,opacity: 0});

// gsap.to(".square", { x: 250, duration: 2 })
// gsap.from(".square", { x: 250, delay: 3, duration: 2})

// gsap.to(".box1", {duration: 4, x: 200, rotation: 360, ease: "power2.out"})

// gsap.to(".box2", {duration: 2, x: 250, rotation: 360, delay: 4})

// gsap.to(".box3", {duration: 2, x: 300, rotation: 360, delay: 6})

// gsap.to(".box", { duration: 2, x: 200, stagger: 0.5, ease: "elastic.out", yoyo: true, repeat: -1});

// gsap.fromTo(".box", {x: 0, opacity: 0}, {duration: 1, x: 200, opacity: 1})

// let gsapTimeline = gsap.timeline();

// gsapTimeline
//   .to(".box", {duration: 3, x: 100, ease: "linear"})
//   .to(".box1", {duration: 1, x: 200, ease: "bounce.out"})
//   .to(".box2", { duration: 1, x: 250, ease: "back.out"}, "+=1")
//   .to(".box3", { duration: 1, x: 300, ease: "elastic.out"}, "+=1")

// gsap.to(".box1", {duration: 3, x: 200, ease:"power1.out"});
// gsap.to(".box2", {duration: 3, x: 200, ease:"power2.out"});
// gsap.to(".box3", {duration: 3, x: 200, ease:"power3.out"});
// gsap.to(".box4", {duration: 3, x: 200, ease:"power4.out"});
// gsap.to(".box5", {duration: 3, x: 200, ease:"elastic.out"});
// gsap.to(".box6", {duration: 3, x: 200, ease:"bounce.out"});
// gsap.to(".box7", {duration: 3, x: 200, ease:"back.out"});
// gsap.to(".box8", {duration: 3, x: 200, ease:"circle.out"});
// gsap.to(".box9", {duration: 3, x: 200, ease:"expo.out"});
// gsap.to(".box10", {duration: 3, x: 200,  ease:"sine.out"});

// const tl = gsap.timeline();

// tl
//   .to(".box1", { duration:2, x: 200, y:100 })
//   .to(".box2", { duration:2, left: "-200px", y:0 })
//   .to(".box3", { duration:2, left: "-200px", y:0 })

// document.querySelector("#start").addEventListener("click", () => {
//   tl.play();
//   console.log("start")
// })

// document.querySelector("#stop").addEventListener("click", () => {
//   tl.pause();
//   console.log("stop")
// })

// document.querySelector("#restart").addEventListener("click", () => {
//   tl.restart();
//   console.log("restart")
// })

// document.querySelector("#resume").addEventListener("click", () => {
//   tl.resume();
//   console.log("resume")
// })

// document.querySelector("#reverse").addEventListener("click", () => {
//   tl.reverse();
//   console.log("reverse")
// })

// document.querySelector("#seek").addEventListener("click", () => {
//   tl.seek(3);
//   console.log("seek")
// })

// document.querySelector("#timeScale").addEventListener("click", () => {
//   tl.timeScale(0.5);
//   console.log("timeScale")
// })
