export const day6 = (input) =>
  input
    .split("\n\n")
    .reduce(
      (acc, curr) => acc + new Set(curr.replaceAll("\n", "").split("")).size,
      0
    );

export const day62 = (input) =>
  input.split("\n\n").reduce((acc, curr) => {
    const rows = curr.split("\n");
    const hash = {};
    rows.forEach((row) =>
      row
        .split("")
        .forEach((letter) => (hash[letter] = (hash[letter] || 0) + 1))
    );

    return (
      Object.keys(hash).filter((key) => hash[key] === rows.length).length + acc
    );
  }, 0);
