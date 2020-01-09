
const sum = function(fromN, toN) {
  let sumResult = 0;

  for (let i = fromN; i <= toN; i++) {
    sumResult += i;
  }

  return sumResult;
};

module.exports = sum;