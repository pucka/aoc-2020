import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import ava from "ava";

//solutions
import { task1, task2 } from "./src/1/solution.mjs";
import { nrOfCorrectPasswords, nrOfCorrectPasswords2 } from "./src/2/solution.mjs";

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

ava("Day 2 - 1", (t) => {
  const exampleInput = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

  t.is(nrOfCorrectPasswords(exampleInput), 2);

  const input = getInputFromFile(join(__dirname, "src/2/input.txt"))
    .split("\n");

    t.is(nrOfCorrectPasswords(input), 506);
});

ava("Day 2 - 2", (t) => {
  const exampleInput = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

  t.is(nrOfCorrectPasswords2(exampleInput), 1);

  const input = getInputFromFile(join(__dirname, "src/2/input.txt"))
    .split("\n");

    t.is(nrOfCorrectPasswords2(input), 443);
});
