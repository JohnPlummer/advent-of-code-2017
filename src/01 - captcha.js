import _ from "lodash";

function withOffset(numbers) {
  const initial = numbers.split("").map(Number);
  const offset = [..._.tail(initial), _.head(initial)];
  return getSum(initial, offset);
}

function withOpposite(numbers) {
  const initial = numbers.split("").map(Number);
  const opposite = [
    ...initial.slice(initial.length / 2),
    ...initial.slice(0, initial.length / 2)
  ];
  return getSum(initial, opposite);
}

function getSum(array, offsetArray) {
  return _.zip(array, offsetArray)
    .filter(pair => {
      return pair[0] === pair[1];
    })
    .reduce((total, pair) => {
      return total + pair[0];
    }, 0);
}

module.exports = {
  withOffset,
  withOpposite
};
