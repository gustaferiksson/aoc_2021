const input = require("fs").readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");

const isPart2 = process.env.part == "part2";

let depth = 0;
let distance = 0;
let aim = 0;

input.forEach((str) => {
  let direction = str.at(0);
  let value = str.at(-1) * 1;

  direction == "d" && (depth += value);
  direction == "u" && (depth -= value);
  direction == "f" && (distance += value);
  direction == "f" && isPart2 && (aim += depth * value);
});

isPart2 && ([depth, aim] = [aim, depth]);
console.log(distance * depth);
