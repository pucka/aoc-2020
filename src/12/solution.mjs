const CMD = {
  N: "S",
  S: "N",
  W: "E",
  E: "W",
  R: 1,
  L: -1,
  F: null,
};

const rotate = (cmd, units, face) => {
  const dirs = ["N", "E", "S", "W"];
  if (CMD[cmd] === -1) {
    dirs.reverse();
  }
  const step = (units / 360) * dirs.length;

  return dirs[(dirs.findIndex((i) => i === face) + step) % dirs.length];
};

const setInstructions = (pos, cmd, units) => {
  const newPosition = pos.dir === cmd ? pos.pos + units : pos.pos - units;
  return {
    dir: newPosition < 0 ? (pos.dir === cmd ? CMD[cmd] : cmd) : pos.dir,
    pos: Math.abs(newPosition),
  };
};

const exec = (pos, cmd, units) => {
  switch (cmd) {
    case "N":
    case "S":
      return {
        ...pos,
        y: setInstructions(pos.y, cmd, units),
      };
    case "E":
    case "W":
      return {
        ...pos,
        x: setInstructions(pos.x, cmd, units),
      };
    case "F":
      return exec(pos, pos.face, units);
    case "L":
    case "R":
      return {
        ...pos,
        face: rotate(cmd, units, pos.face),
      };
  }
};

export const day12 = (input) => {
  let position = {
    y: {
      dir: "N",
      pos: 0,
    },
    x: {
      dir: "E",
      pos: 0,
    },
    face: "E",
  };

  input.forEach(
    (inst) =>
      (position = exec(position, inst.substr(0, 1), Number(inst.substr(1))))
  );

  return position.x.pos + position.y.pos;
};

export const day12_2 = (input) => {
  let ship = {
    y: {
      dir: "N",
      pos: 0,
    },
    x: {
      dir: "E",
      pos: 0,
    },
  };

  let waypoint = {
    y: {
      dir: "N",
      pos: 1,
    },
    x: {
      dir: "E",
      pos: 10,
    },
  };

  input.forEach((inst) => {
    const cmd = inst.substr(0, 1);
    const units = Number(inst.substr(1));

    if (cmd === "F") {
      ship = exec(ship, waypoint.y.dir, waypoint.y.pos * units);
      ship = exec(ship, waypoint.x.dir, waypoint.x.pos * units);
    } else if (cmd === "R" || cmd === "L") {
      const rotateY = rotate(cmd, units, waypoint.y.dir);
      const rotateX = rotate(cmd, units, waypoint.x.dir);

      if (rotateY === "E" || rotateY === "W") {
        const oldY = { ...waypoint.y };
        waypoint.y = { ...waypoint.x, dir: rotateX };
        waypoint.x = { ...oldY, dir: rotateY };
      } else {
        waypoint.y.dir = rotateY;
        waypoint.x.dir = rotateX;
      }
    } else {
      waypoint = exec(waypoint, cmd, units);
    }
  });

  return ship.x.pos + ship.y.pos;
};
