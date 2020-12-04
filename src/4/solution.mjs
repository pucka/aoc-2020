import { getInputFromFile } from "../utils.mjs";

const FIELDS = {
  byr: (i) => i >= 1920 && i <= 2002,
  iyr: (i) => i >= 2010 && i <= 2020,
  eyr: (i) => i >= 2020 && i <= 2030,
  hgt: (i) => {
    const match = i.match(/(?<height>\d+)(?<metric>cm|in){1}/i);

    if (!match) {
      return false;
    }
    const { height, metric } = match.groups;
    return metric === "cm"
      ? height >= 150 && height <= 193
      : height >= 59 && height <= 76;
  },
  hcl: (i) => /^#([0-9a-f]{6})$/.test(i),
  ecl: (i) => /^(amb|blu|brn|gry|grn|hzl|oth){1}$/.test(i),
  pid: (i) => /^\d{9}$/.test(i),
};

export const validPassports = (inputFilePath, strictValidation = false) => {
  const file = getInputFromFile(inputFilePath)
    .split("\n\n")
    .map((p) => p.replaceAll("\n", " "));

  return file.reduce(
    (acc, passport) =>
      Object.keys(FIELDS).every((key) =>
        passport
          .split(" ")
          .find((p) =>
            !strictValidation
              ? p.split(":")[0] === key
              : p.split(":")[0] === key && FIELDS[key](p.split(":")[1])
          )
      )
        ? ++acc
        : acc,
    0
  );
};
