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

    const row = binarySearch(rowDir, 0, 0, 127);
    const seat = binarySearch(seatDir, 0, 0, 7);
    
    return {
      row: row,
      seat: seat,
      id: row * 8 + seat,
    };
  });

export const highestSeatId = (input) =>
  getSeats(input).reduce((acc, seat) => (seat.id > acc ? seat.id : acc), 0);

export const mySeatId = (input) => {
  const seats = getSeats(input).sort(
    (a, b) => a.row - b.row || a.seat - b.seat
  );

  let currSeatId = seats[0].id;
  let seatsIndex = 1;

  while (seats[seatsIndex].id === currSeatId + 1) {
    currSeatId = seats[seatsIndex++].id;
  }

  return currSeatId + 1;
};
