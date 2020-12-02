const regex = /(?<minChar>\d+)-(?<maxChar>\d+)\s(?<char>[a-z]){1}:\s(?<password>.+)/im;

export const nrOfCorrectPasswords = (input) =>
  input.filter((passwordLine) => {
    const { minChar, maxChar, char, password } = passwordLine.match(
      regex
    ).groups;

    const nrOfOccurance = (password.match(new RegExp(`${char}`, "gi")) || [])
      .length;

    return nrOfOccurance >= minChar && nrOfOccurance <= maxChar;
  }).length;

export const nrOfCorrectPasswords2 = (input) =>
  input.filter((passwordLine) => {
    const { minChar, maxChar, char, password } = passwordLine.match(
      regex
    ).groups;

    const positions = password
      .split("")
      .reduce((acc, curr, i) => (curr === char ? [...acc, i + 1] : acc), []);

    return (
      !positions.includes(Number(minChar)) !==
      !positions.includes(Number(maxChar))
    );
  }).length;
