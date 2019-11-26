console.log("test1");
const sum = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const division = (x, y) => x / y;

//module.exports.sum = sum
module.exports = {sum : sum, substract : substract, multiply : multiply, division : division}