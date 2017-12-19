import _ from "lodash";

function distance(cellNumber) {
  // If the spiral is viewed as a set of concentric rings numbered 0,1,2...
  // Each ring has a max value 1,9,25 which is the square of the width 1,3,5...
  // And the width is the ring number * 2 + 1

  // Special case cell 1 :(
  if (cellNumber === 1) return 0;

  // From the square root of the cellNumber
  const sqrt = Math.ceil(Math.sqrt(cellNumber));
  // The next highest odd number will be the width of it's ring
  const ringWidth = sqrt % 2 === 0 ? sqrt + 1 : sqrt;
  // The ring number and max Value can then be calculated
  const ringNumber = (ringWidth - 1) / 2;
  const ringMaxValue = ringWidth * ringWidth;
  // The distance from the next highest corner
  const distanceFromNextCorner = (ringMaxValue - cellNumber) % (ringWidth - 1);
  // The distance from the centre of it's current row
  const distanceFromRowCentre = Math.abs(distanceFromNextCorner - ringNumber);
  // Then the ring number is the distance from the row centre to ring 0 (the port)
  const distance = distanceFromRowCentre + ringNumber;

  return distance;
}

const moves = [
  point => {
    return { x: point.x + 1, y: point.y };
  },
  point => {
    return { x: point.x, y: point.y + 1 };
  },
  point => {
    return { x: point.x - 1, y: point.y };
  },
  point => {
    return { x: point.x, y: point.y - 1 };
  }
];

function createSpiral(spiral, max) {
  // in the spiral we change direction
  // when we reach the limit in the current direction
  // the limit starts at 1 then increments by 1 after
  // every second change in direction
  let direction = 0,
    limit = 1,
    changesInDirection = 0,
    distanceInDirection = 0;
  do {
    ++distanceInDirection;
    // change direction?
    if (distanceInDirection > limit) {
      direction = ++direction % 4;
      distanceInDirection = 1;
      ++changesInDirection;
      if (changesInDirection % 2 === 0) ++limit;
    }
    // add a new cell to the spiral
    let position = moves[direction](_.last(spiral).position);
    let value = sumAdjacentValues(spiral, position);
    spiral.push({
      value,
      position
    });
  } while (_.last(spiral).value <= max);
  return spiral;
}

function sumAdjacentValues(spiral, position) {
  return spiral
    .filter(
      cell =>
        _.inRange(cell.position.x, position.x - 1, position.x + 2) &&
        _.inRange(cell.position.y, position.y - 1, position.y + 2)
    )
    .reduce((acc, cell) => {
      return acc + cell.value;
    }, 0);
}

function firstHigherNumber(max) {
  const firstCell = {
    value: 1,
    position: { x: 0, y: 0 }
  };
  const spiral = createSpiral([firstCell], max);

  return _.last(spiral).value;
}

export { distance, firstHigherNumber };
