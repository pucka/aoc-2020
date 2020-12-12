const cell = (matrix, x, y) => {
  try {
    return matrix[y][x];
  } catch {
    return undefined;
  }
};

const surroundings = (m, y, x) => {
    const ocSeat = [];
    for (let _y = y -1; _y <= y + 1; _y++) {
        for (let _x = x -1; _x <= x +1; _x++) {
            const c = cell(m, _x,_y);
            if (x !== _x && y !== _y && c === '#') {
                ocSeat.push(c);
            }
        }
    }
    return ocSeat;
}

const getNeighbours = (input, rowIndex, seatIndex) => {
  const neighbours = [];
  const seatRange = [seatIndex - 1, seatIndex, seatIndex + 1].filter(
    (i) => i >= 0 && i < input[rowIndex].length
  );
  const rowRange = [rowIndex - 1, rowIndex, rowIndex + 1].filter(
    (i) => i >= 0 && i < input.length
  );
  rowRange.forEach((row) => {
    seatRange.forEach((seat) => {
      if (row === rowIndex && seat === seatIndex) {
      } else if (input[row].charAt(seat) === "#") {
        neighbours.push("#");
      }
    });
  });

  return neighbours;
};
const update = (input) => {
  const newInput = [];
  input.forEach((row, rowIndex) => {
    const newRow = [];
    row.split("").forEach((seat, seatIndex) => {
      //   console.log(seat, getNeighbours(input, rowIndex, seatIndex).length);
      if (
        seat === "L" &&
        getNeighbours(input, rowIndex, seatIndex).length === 0
      ) {
        newRow.push("#");
      } else if (
        seat === "#" &&
        getNeighbours(input, rowIndex, seatIndex).length >= 4
      ) {
        newRow.push("L");
      } else {
        newRow.push(seat);
      }
    });
    newInput.push(newRow.join(""));
  });

  return newInput;
};

export const day11 = (input) => {
  let newInput = input;
  let lastInput = [];
  let i = 0;
  while (newInput.join("") !== lastInput.join("")) {
    lastInput = newInput;
    newInput = update(newInput);

    // console.log(JSON.stringify(newInput));
    i++;
  }

  return lastInput.reduce(
    (acc, curr) => curr.split("").filter((seat) => seat === "#").length + acc,
    0
  );
};
