import _ from "lodash";

function calculateRowDifference(sheet) {
  return calculate(sheet, rowDifference);
}

function calculateRowQuotient(sheet) {
  return calculate(sheet, rowQuotient);
}

function calculate(sheet, getRowValue) {
  return sheet
    .split("\n")
    .map(row => {
      const sortedRow = row
        .split("\t")
        .map(Number)
        .sort((a, b) => a - b);
      return getRowValue(sortedRow);
    })
    .reduce((total, difference) => {
      return total + difference;
    }, 0);
}

function rowDifference(row) {
  return _.last(row) - _.first(row);
}

function rowQuotient(row) {
  const divisor = _.head(row);
  const quotient = _.tail(row).reduce((result, dividend) => {
    if (dividend % divisor === 0) {
      return dividend / divisor;
    } else {
      return result;
    }
  }, 0);

  return quotient > 0 ? quotient : rowQuotient(_.tail(row));
}

module.exports = {
  calculateRowDifference,
  calculateRowQuotient
};
