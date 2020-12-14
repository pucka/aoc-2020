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
// import { highestSeatId, mySeatId } from './src/5/solution.mjs';
import { highestSeatId, mySeatId } from './src/5/solutionAlt.mjs';
import { day6, day62 } from './src/6/solution.mjs';
import { day7, day7_2 } from './src/7/solution.mjs';
import { day8, day8_2 } from './src/8/solution.mjs';
import { day9, day9_2 } from './src/9/solution.mjs';
import { day10, day10_2 } from './src/10/solution.mjs';
import { day11 } from './src/11/solution.mjs';
import { day12, day12_2 } from './src/12/solution.mjs';
import { day13, day13_2 } from './src/13/solution.mjs';

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

ava("Day 3", (t) => {
  const exampleInput = getInputFromFile("3/exampleInput.txt").split("\n");
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

ava("Day 5", (t) => {
  const exampleInput = getInputFromFile("5/exampleInput.txt").split('\n');
  const input = getInputFromFile("5/input.txt").split("\n");

  // task 1
  t.is(highestSeatId(exampleInput), 820);
  t.is(highestSeatId(input), 894);

  // // task 2
  t.is(mySeatId(input), 579);
});

ava("Day 6", (t) => {
  const exampleInput = getInputFromFile("6/exampleInput.txt");
  const input = getInputFromFile("6/input.txt");

  // task 1
  t.is(day6(exampleInput), 11);
  t.is(day6(input), 6686);

  // // task 2
  t.is(day62(exampleInput), 6);
  t.is(day62(input), 3476);
});

ava("Day 7", (t) => {
  const exampleInput = getInputFromFile("7/exampleInput.txt").split("\n");
  const input = getInputFromFile("7/input.txt").split("\n");

  // task 1
  t.is(day7(exampleInput), 4);
  t.is(day7(input), 103);

  // // task 2
  t.is(day7_2(exampleInput), 32);
  t.is(day7_2(input), 1469);
});

ava("Day 8", (t) => {
  const exampleInput = getInputFromFile("8/exampleInput.txt").split("\n");
  const input = getInputFromFile("8/input.txt").split("\n");

  // task 1
  t.is(day8(exampleInput), 5);
  t.is(day8(input), 1521);

  // // task 2
  t.is(day8_2(exampleInput), 8);
  t.is(day8_2(input), 1016);
});

ava("Day 9", (t) => {
  const exampleInput = getInputFromFile("9/exampleInput.txt").split("\n");
  const input = getInputFromFile("9/input.txt").split("\n");

  // task 1
  t.is(day9(exampleInput, 5), 127);
  t.is(day9(input, 25), 41682220);

  // // task 2
  t.is(day9_2(exampleInput, 127), 62);
  t.is(day9_2(input, 41682220), 5388976);
});

ava("Day 10", (t) => {
  const exampleInput = getInputFromFile("10/exampleInput.txt").split("\n");
  const input = getInputFromFile("10/input.txt").split("\n");

  // task 1
  t.is(day10(exampleInput), 220);
  t.is(day10(input), 2738);

  //task 2
  // t.is(day10_2(exampleInput), 1)
});

ava("Day 11", (t) => {
  const exampleInput = getInputFromFile("11/exampleInput.txt").split("\n");
  const input = getInputFromFile("11/input.txt").split("\n");

  // task 1
  t.is(day11(exampleInput), 37);
  t.is(day11(input), 2126);

  //task 2
  // t.is(day10_2(exampleInput), 1)
});

ava("Day 12", (t) => {
  const exampleInput = getInputFromFile("12/exampleInput.txt").split("\n");
  const input = getInputFromFile("12/input.txt").split("\n");

  // task 1
  t.is(day12(exampleInput), 25);
  t.is(day12(input), 1457);

  t.is(day12_2(exampleInput), 286);
  t.is(day12_2(input), 106860);
});

ava("Day 13", (t) => {
  const exampleInput = getInputFromFile("13/exampleInput.txt").split("\n");
  const input = getInputFromFile("13/input.txt").split("\n");

  // task 1
  t.is(day13(exampleInput), 295);
  t.is(day13(input), 2995);
  
  //task 2
  t.is(day13_2(exampleInput), 1068781);
  // t.is(day13_2(input, 100000000000000), 1068781);
});