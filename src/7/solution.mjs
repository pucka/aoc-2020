const regex = /(?<id>\w+\s\w+) bags contain (?<nobags>no other bags)?|(?:(?<bags>.+)(?:bag|bags),?)+/gi;
const childRegex = /(?<amount>\d+)(?<id>.+)(?:bag|bags),?/i;

const getTree = (input) =>
  input.reduce((tree, row) => {
    const [id, children] = Array.from(
      row.matchAll(regex),
      (m, k) => m[k === 0 ? 1 : 0]
    );
    tree[id] = {
      children: (children || "")
        .split(",")
        .filter((r) => r)
        .map((i) => {
          const { amount, id } = i.match(childRegex).groups;
          return { amount: Number(amount), id: id.trim() };
        }),
    };
    return tree;
  }, {});

const findBag = (tree, search, arr) => {
  if (arr.length === 0) {
    return false;
  }
  return Boolean(
    arr.find((child) => {
      if (child.id === search) {
        return true;
      }

      return findBag(tree, search, tree[child.id].children);
    })
  );
};

const findNrOfBags = (tree, arr) =>
  arr.reduce(
    (acc, child) =>
      acc +
      child.amount +
      child.amount * findNrOfBags(tree, tree[child.id].children),
    0
  );

export const day7 = (input) => {
  const tree = getTree(input);

  return Object.keys(tree).reduce(
    (totalAmount, key) =>
      findBag(tree, "shiny gold", tree[key].children)
        ? totalAmount + 1
        : totalAmount,
    0
  );
};

export const day7_2 = (input) => {
  const tree = getTree(input);

  return findNrOfBags(tree, tree["shiny gold"].children);
};
