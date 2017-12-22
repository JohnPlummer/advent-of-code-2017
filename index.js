import * as data from "./data";
import * as reverseCaptcha from "./src/01 - captcha";
import * as checksum from "./src/02 - checksum";
import * as memory from "./src/03 - memory";
import * as passphrase from "./src/04 - passphrase";
import * as maze from "./src/05 - maze";
import * as reallocation from "./src/06 - reallocation";

//day 1
console.log(
  "Day 1 (reverseCaptcha) sum of the matching digit pairs: ",
  reverseCaptcha.withOffset(data.day01)
);
console.log(
  "Day 1 (reverseCaptcha) sum with an offset half way around the list: ",
  reverseCaptcha.withOpposite(data.day01)
);

//day 2
console.log(
  "Day 2 (checksum) sum of the range of row values: ",
  checksum.calculateRowDifference(data.day02)
);

console.log(
  "Day 2 (checksum) sum of the quotient of 2 row values: ",
  checksum.calculateRowQuotient(data.day02)
);

//day 3
console.log(
  "Day 3 (spiral memory) distance to the port is: ",
  memory.distance(data.day03)
);

console.log(
  "Day 3 (spiral memory) next highest cell value: ",
  memory.firstHigherNumber(data.day03)
);

// day 4
console.log(
  "Day 4 (passphrases) valid count: ",
  passphrase.validCount(data.day04)
);

console.log(
  "Day 4 (passphrases) valid count with anagrams: ",
  passphrase.validCountWithAnagrams(data.day04)
);

// day 5
console.log(
  "Day 5 (maze) jump count with increment: ",
  maze.jumpsWithIncrement(data.day05)
);

console.log(
  "Day 5 (maze) jump count with conditional increment: ",
  maze.jumpsWithConditionalIncrement(data.day05)
);

// day 6
console.log(
  "Day 6 (reallocation) loop found in: ",
  reallocation.reallocate(data.day06)
);
