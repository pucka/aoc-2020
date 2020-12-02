export const task1 = (input) =>
  input
    .filter((nr) =>
      input.find((secondNr) => nr + secondNr === 2020)
    )
    .reduce((acc, current) => acc * current, 1);

export const task2 = (input) =>
  input
    .filter((nr) =>
      input.find((secondNr) =>
        input.find((thirdNr) => nr + secondNr + thirdNr === 2020)
      )
    )
    .reduce((acc, current) => acc * current, 1);
