function jumps(maze, changeOffset) {
  const mazeInstructions = maze.split("\n").map(Number);
  let position = 0,
    jumpCount = 0,
    offset;

  do {
    // console.log(position, jumpCount, offset);
    offset = mazeInstructions[position];
    mazeInstructions[position] = changeOffset(offset);
    jumpCount++;
    position = position + offset;
  } while (position < mazeInstructions.length);

  return jumpCount;
}

const jumpsWithIncrement = maze => jumps(maze, incrementOffset);
const jumpsWithConditionalIncrement = maze =>
  jumps(maze, conditionalIncrementOffset);

const incrementOffset = offset => ++offset;

const conditionalIncrementOffset = offset =>
  offset >= 3 ? --offset : ++offset;

export { jumpsWithIncrement, jumpsWithConditionalIncrement };
