/*
Write an arrow function where it will do the following:x2

a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements

print the result
*/

const numbers = [2, 4, 5, 8, 7, 9, 10, 25, 85];

const makeNumbersSquaredSumAndAverage = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    const squaredElements = number * number;
    sum = sum + squaredElements;
  }
  return sum / numbers.length;
};

const result = makeNumbersSquaredSumAndAverage(numbers);
console.log(result);
