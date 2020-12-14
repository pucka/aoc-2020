import { getInputFromFile } from "../utils.mjs";
export const day13 = (input) => {
  const dt = Number(input[0]);

  const busses = input[1]
    .split(",")
    .filter((x) => x !== "x")
    .map((b) => Number(b));

  const times = busses
    .map((id) => {
      const low = Math.floor(dt / id);
      return low * id < dt ? { id, dp: (low + 1) * id } : { id, dp: low * id };
    })
    .sort((a, b) => a.dp - b.dp);

  return (times[0].dp - dt) * times[0].id;
};

export const day13_2 = (input, startOffset = 1) => {
  let busses = input[1]
    .split(",")
    .map((b, i) => {
      if (b !== "x") {
        return {
          id: Number(b),
          offset: i,
        };
      }

      return b;
    })
    .filter((b) => b !== "x");

  const firstBus = busses.slice(0, 1)[0];
  const otherBusses = busses.slice(1);
  //   const index = busses.reduce((l, b, i) => (b.id > busses[l].id ? i : l), 0);
  //   const longestBus = busses[index];
  let t = firstBus.id;

  let correctBusses = [];
  while (correctBusses.length !== otherBusses.length) {
    correctBusses = otherBusses.filter(
      (b) => ((t + b.offset) / b.id) % 1 === 0
    );
    t += firstBus.id;
  }

  return t - busses[0].id;
};
