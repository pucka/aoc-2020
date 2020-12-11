const findJolt = (input, start, jolt) => {
  const i = input.findIndex((nr) => nr - start === jolt);
  return i > -1 ? [i, input[i]] : [];
};

const getJoltArrays = (input) => {
  let start = 0;
  const oneJolts = [];
  const threeJolts = [];

  while (input.length) {
    const [index, nr] = findJolt(input, start, 1);
    if (nr) {
      start = nr;
      oneJolts.push(nr);
      input.splice(index, 1);
    } else {
      const [index, nr] = findJolt(input, start, 3);
      if (nr) {
        start = nr;
        threeJolts.push(nr);
        input.splice(index, 1);
      }
    }
  }
  return [oneJolts, threeJolts];
};

const prepareInput = (input) => {
    const arr = [...input.map((nr) => Number(nr)).sort((a, b) => a - b)];
    return [...arr, arr.slice(-1)[0] + 3];
}
export const day10 = (input) => {
  const [oneJolts, threeJolts] = getJoltArrays(prepareInput(input));

  return oneJolts.length * threeJolts.length;
};

const findPath = (input, acc, start, jolts) => {
  const arr = jolts.map((jolt) => {
    const [index, nr] = findJolt(input, start, jolt);
    if (nr !== undefined) {
      return findPath(input.slice(index), [...acc, nr], nr, jolts);
    } else {
      return null;
    }
  });
  return [...acc, ...arr];
};

export const day10_2 = (input) => {
  // const jolts = [1, 2, 3];
  // const arr = prepareInput(input)

  // const arrs = [];
  // arr.forEach((i) => {
  //   const tmpArr = [];
  //   jolts.forEach((jolt) => {
  //       const [index, nr] = findJolt(input, start, jolt);
  //       if (nr !== undefined) {

  //           return nr;
  //       }
  //   })
  // });
  return 0;
};
