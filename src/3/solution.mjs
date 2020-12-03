//slope = [[],[]]
export const nrOfTrees = (input, slope) =>
  slope.reduce((acc, [columnStep, rowStep]) => {
    let leftStartIndex = columnStep;
    let rowNr = rowStep;
    let trees = 0;
    while (input[rowNr]) {
      if (input[rowNr].charAt(leftStartIndex % input[rowNr].length) === "#") {
        trees++;
      }
      leftStartIndex += columnStep;
      rowNr += rowStep;
    }

    return trees * acc;
  }, 1);
