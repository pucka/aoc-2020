import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import ava from 'ava';

//tasks
import { task1, task2 } from "./src/1/solution.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const getInputFromFile = (filePath) => fs.readFileSync(filePath, "utf8");

ava("Day 1 - 1", (t) => {
  const exampleInput = [1721, 979, 366, 299, 675, 1456];

  t.is(task1(exampleInput), 514579);

  const input = getInputFromFile(join(__dirname, "src/1/input.txt"))
    .split("\n")
    .map((strNr) => Number(strNr));

  t.is(task1(input), 224436);
});

ava("Day 1 - 2", (t) => {
  const exampleInput = [1721, 979, 366, 299, 675, 1456];

  t.is(task2(exampleInput), 241861950);

  const input = getInputFromFile(join(__dirname, "src/1/input.txt"))
    .split("\n")
    .map((strNr) => Number(strNr));

  t.is(task2(input), 303394260);
});