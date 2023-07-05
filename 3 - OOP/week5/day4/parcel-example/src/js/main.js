import { add } from "./math.js";
import _ from "lodash";
import confetti from "canvas-confetti";

console.log(add(1, 2));
console.log(_.camelCase("hello world"));

document.querySelector("#confetti-btn").addEventListener("click", () => {
confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: ["#FFF", "#FFF", "#FFF"]
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: ["#FFF", "#FFF", "#FFF"]
  });
});
