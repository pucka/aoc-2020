import { getInputFromFile } from "../utils.mjs";

const FIELDS = {
  byr: (i) => i >= 1920 && i <= 2002,
  iyr: (i) => i >= 2010 && i <= 2020,
  eyr: (i) => i >= 2020 && i <= 2030,
  hgt: (i) => /^(1([5-8]\d{1}|9[0-3])cm|(59|6\d{1}|7[0-6])in)$/i.test(i),
  hcl: (i) => /^#([0-9a-f]{6})$/.test(i),
  ecl: (i) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(i),
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
