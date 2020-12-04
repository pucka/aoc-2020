import ava from "ava";
import { getInputFromFile } from "./src/utils.mjs";

//solutions
import { task1, task2 } from "./src/1/solution.mjs";
import {
  nrOfCorrectPasswords,
  nrOfCorrectPasswords2,
} from "./src/2/solution.mjs";
import { nrOfTrees } from "./src/3/solution.mjs";
import { validPassports } from "./src/4/solution.mjs";

ava("Day 1", (t) => {
  const exampleInput = [1721, 979, 366, 299, 675, 1456];
  const input = getInputFromFile("1/input.txt")
    .split("\n")
    .map((strNr) => Number(strNr));

  // task 1
  t.is(task1(exampleInput), 514579);
  t.is(task1(input), 224436);

  // task 2
  t.is(task2(exampleInput), 241861950);
  t.is(task2(input), 303394260);
});

ava("Day 2", (t) => {
  const exampleInput = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
  const input = getInputFromFile("2/input.txt").split("\n");

  // task 1
  t.is(nrOfCorrectPasswords(exampleInput), 2);
  t.is(nrOfCorrectPasswords(input), 506);

  // task 2
  t.is(nrOfCorrectPasswords2(exampleInput), 1);
  t.is(nrOfCorrectPasswords2(input), 443);
});

ava("Day 3 - 1", (t) => {
  const exampleInput = [
    "..##.........##.........##.........##.........##.........##.......",
    "#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..",
    ".#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.",
    "..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#",
    ".#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.",
    "..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....",
    ".#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#",
    ".#........#.#........#.#........#.#........#.#........#.#........#",
    "#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...",
    "#...##....##...##....##...##....##...##....##...##....##...##....#",
    ".#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#",
  ];
  const input = getInputFromFile("3/input.txt").split("\n");

  // task 1
  const task1Slope = [[3, 1]];

  t.is(nrOfTrees(exampleInput, task1Slope), 7);
  t.is(nrOfTrees(input, task1Slope), 228);

  // task 2
  const task2Slope = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  t.is(nrOfTrees(exampleInput, task2Slope), 336);
  t.is(nrOfTrees(input, task2Slope), 6818112000);
});

ava("Day 4", (t) => {
  const exampleInput = "4/exampleInput.txt";
  const input = "4/input.txt";

  // task 1
  t.is(validPassports(exampleInput), 2);
  t.is(validPassports(input), 210);

  // task 2
  t.is(validPassports(exampleInput, true), 2);
  t.is(validPassports(input, true), 131);
});
