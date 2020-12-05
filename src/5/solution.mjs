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
  input.map((curr) => {
    const rowDir = curr
      .slice(0, 7)
      .split("")
      .map((c) => (c === "F" ? -1 : 1));
    const seatDir = curr
      .slice(7)
      .split("")
      .map((c) => (c === "L" ? -1 : 1));

    return binarySearch(rowDir, 0, 0, 127) * 8 + binarySearch(seatDir, 0, 0, 7);
  });

export const highestSeatId = (input) =>
  getSeats(input).reduce((acc, seatId) => (seatId > acc ? seatId : acc), 0);

export const mySeatId = (input) => {
  const seats = getSeats(input).sort((a, b) => a - b);

  let currSeatId = seats[0];
  let seatsIndex = 1;

  while (seats[seatsIndex] === currSeatId + 1) {
    currSeatId = seats[seatsIndex++];
  }

  return currSeatId + 1;
};
