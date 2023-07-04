/* eslint-disable func-names */
module.exports.sortTwoNums = function (a, b) {
  if (a > b) return { min: b, max: a };
  return { min: a, max: b };
};
