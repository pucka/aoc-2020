export const day9 = (input, preamble) => {
  return Number(
    input.find((totalNr, index) => {
      if (index < preamble) {
        return false;
      }
      const searchInRange = input.slice(index - preamble, index);
      return !searchInRange.find((nr, i) =>
        searchInRange
          .slice(i + 1)
          .find((nr2) => Number(nr2) + Number(nr) === Number(totalNr))
      );
    })
  );
};

export const day9_2 = (input, nrToFind) => {
  const l = input.length;
  let x = 0;
  let y;
  let sum;
  while (x < l && sum !== nrToFind) {
    y = x;
    sum = 0;
    while (y < l && sum < nrToFind) {
      sum += Number(input[y]);
      y++;
    }
    x++;
  }

  return (
    Math.max(...input.slice(x - 1, y)) + Math.min(...input.slice(x - 1, y))
  );
};
