import * as passphrase from "./04 - passphrase";

it("Counts valid passphrases", () => {
  expect(
    passphrase.validCount(`aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`)
  ).toEqual(2);
});

it("Counts valid passphrases allowing for anagrams", () => {
  expect(
    passphrase.validCountWithAnagrams(`abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`)
  ).toEqual(3);
});
