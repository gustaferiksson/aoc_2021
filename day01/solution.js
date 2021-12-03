const input = require("fs").readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n").map(Number);

const s1 = input.filter((value, i) => value < input[i + 1]).length;
const s2 = input.filter((value, i) => input.slice(i, i + 3).reduce((a, b) => a + b, 0) < input.slice(i + 1, i + 4).reduce((a, b) => a + b, 0)).length;

process.env.part == "part1" && console.log(s1);
process.env.part == "part2" && console.log(s2);
