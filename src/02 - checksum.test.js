import * as checksum from "./02 - checksum";

it("Calculates the checksum for a spreadsheet based on row difference", () => {
  const data = `5\t1\t9\t5
7\t5\t3
2\t4\t6\t8`;
  expect(checksum.calculateRowDifference(data)).toEqual(18);
});

it("Calculates the checksum for a spreadsheet based on a row quotient", () => {
  const data = `5\t9\t2\t8
9\t4\t7\t3
3\t8\t6\t5`;
  expect(checksum.calculateRowQuotient(data)).toEqual(9);
});
