const numbers = [...Array(1000).keys()]
const multiples = numbers.filter(item => item % 3 === 0 || item % 5 === 0)
const sum = multiples.reduce((a, b) => a + b)

console.log(sum)
module.exports = sum