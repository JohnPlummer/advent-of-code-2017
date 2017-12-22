import * as reallocation from "./06 - reallocation";

it("Reallocates blocks", () => {
  expect(reallocation.reallocate("0\t2\t7\t0")).toEqual({
    cycles: 5,
    loopLength: 4
  });
});
