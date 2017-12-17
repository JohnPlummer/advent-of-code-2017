import * as data from "./data";
import * as reverseCaptcha from "./src/01 - captcha";
import * as checksum from "./src/02 - checksum";

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
