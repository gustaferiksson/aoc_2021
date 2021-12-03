const input = require("fs").readFileSync("input.txt", "utf-8").split("\n").map(Number);

process.env.part == "part1" && console.log("solution1");
process.env.part == "part2" && console.log("solution2");
