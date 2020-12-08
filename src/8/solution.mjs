const getAcc = (input, switchNr) => {
  const visited = [];
  let currIndex = 0;
  let acc = 0;
  let switchCount = 1;

  while (!visited.includes(currIndex) && currIndex < input.length) {
    visited.push(currIndex);
    let [cmd, val] = input[currIndex].split(" ");

    if (switchNr === switchCount && /^jmp|nop$/i.test(cmd)) {
      cmd = cmd === "jmp" ? "nop" : "jmp";
    }

    switch (cmd) {
      case "acc":
        acc += Number(val);
        currIndex++;
        break;
      case "jmp":
        switchCount++;
        currIndex += Number(val);
        break;
      case "nop":
        switchCount++;
        currIndex++;
        break;
    }
  }

  return {
    acc,
    currIndex,
  };
};

export const day8 = (input) => getAcc(input).acc;

export const day8_2 = (input) => {
  const inputLength = input.length;
  let swapIndex = 1;
  let output;

  while (
    ((output = getAcc(input, swapIndex)), output.currIndex < inputLength)
  ) {
    swapIndex++;
  }

  return output.acc;
};
