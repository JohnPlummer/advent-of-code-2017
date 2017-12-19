import * as memory from "./03 - memory";

it("Calculates the distance", () => {
  expect(memory.distance(1)).toEqual(0);
  expect(memory.distance(12)).toEqual(3);
  expect(memory.distance(23)).toEqual(2);
  expect(memory.distance(1024)).toEqual(31);
});

it("Calculates the first higher value", () => {
  expect(memory.firstHigherNumber(25)).toEqual(26);
  expect(memory.firstHigherNumber(360)).toEqual(362);
});
