import * as reverseCaptcha from "./01 - captcha";

it("Calculates the sum of the matching digit pairs", () => {
  expect(reverseCaptcha.withOffset("1122")).toEqual(3);
  expect(reverseCaptcha.withOffset("1111")).toEqual(4);
  expect(reverseCaptcha.withOffset("1234")).toEqual(0);
  expect(reverseCaptcha.withOffset("91212129")).toEqual(9);
});

it("Calculates the sum with an offset half way around the list", () => {
  expect(reverseCaptcha.withOpposite("1212")).toEqual(6);
  expect(reverseCaptcha.withOpposite("1221")).toEqual(0);
  expect(reverseCaptcha.withOpposite("123425")).toEqual(4);
  expect(reverseCaptcha.withOpposite("123123")).toEqual(12);
  expect(reverseCaptcha.withOpposite("12131415")).toEqual(4);
});
