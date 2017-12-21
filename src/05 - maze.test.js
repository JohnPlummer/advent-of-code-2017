import * as maze from "./05 - maze";

it("Counts the jumps to leave the maze", () => {
  expect(
    maze.jumpsWithIncrement(`0
3
0
1
-3`)
  ).toEqual(5);
});

it("Counts the jumps to leave the maze", () => {
  expect(
    maze.jumpsWithConditionalIncrement(`0
3
0
1
-3`)
  ).toEqual(10);
});
