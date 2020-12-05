const binarySearch = (direction, directionIndex, start, end) => {
  const dir = direction[directionIndex];
  const mid =
    dir > 0 ? Math.ceil((start + end) / 2) : Math.floor((start + end) / 2);

  if (directionIndex === direction.length) return mid;
  return dir > 0
    ? binarySearch(direction, directionIndex + 1, mid, end)
    : binarySearch(direction, directionIndex + 1, start, mid);
};

const getSeats = (input) =>
  input
    .map(
      (curr) =>
        binarySearch(
          curr
            .slice(0, 7)
            .split("")
            .map((c) => (c === "F" ? -1 : 1)),
          0,
          0,
          127
        ) *
          8 +
        binarySearch(
          curr
            .slice(7)
            .split("")
            .map((c) => (c === "L" ? -1 : 1)),
          0,
          0,
          7
        )
    )
    .sort((a, b) => a - b);

export const highestSeatId = (input) => getSeats(input).slice(-1)[0];

export const mySeatId = (input) => {
  const seats = getSeats(input);

  return seats.find((id, i) => id === seats[i + 1] - 2) + 1;
};
