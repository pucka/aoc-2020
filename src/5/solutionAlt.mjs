const getSeats = (input) =>
  input
    .map((s) => s.replace(/B|R/g, "1").replace(/F|L/g, "0"))
    .map((s) => parseInt(s, 2))
    .sort((a, b) => a - b);

export const highestSeatId = (input) => getSeats(input).slice(-1)[0];

export const mySeatId = (input) => {
  const seats = getSeats(input);

  return seats.find((id, i) => id === seats[i + 1] - 2) + 1;
};
