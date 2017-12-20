function validCount(passphraseList) {
  return passphraseList.split("\n").filter(passphrase => {
    const words = passphrase.split(" ");
    return new Set(words).size === words.length;
  }).length;
}

function validCountWithAnagrams(passphraseList) {
  return passphraseList.split("\n").filter(passphrase => {
    const words = passphrase.split(" ");
    const sortedWords = words.map(word => {
      return word
        .split("")
        .sort()
        .join();
    });
    return new Set(sortedWords).size === sortedWords.length;
  }).length;
}

export { validCount, validCountWithAnagrams };
