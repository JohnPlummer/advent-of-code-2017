const reallocate = blocksText => {
  const blocks = blocksText.split("\t").map(Number);
  let cycles = 0,
    patterns = [],
    distribution;

  const findPattern = pattern => {
    return blocks.toString() === pattern.toString();
  };

  do {
    patterns.push([...blocks]);
    ++cycles;
    const highest = Math.max(...blocks);
    let indexHighest = blocks.findIndex(x => x === highest);
    blocks[indexHighest] = 0;
    for (let i = 1; i <= highest; i++) {
      ++blocks[(indexHighest + i) % blocks.length];
    }
  } while (!patterns.some(findPattern));
  const loopLength = cycles - patterns.findIndex(findPattern);
  return { cycles, loopLength };
};

export { reallocate };
