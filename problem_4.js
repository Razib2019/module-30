/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array.
c) Find the maximum number from the new array and return the result
Print the result
*/

const numbersArray1 = [1, 2, 4];
const numbersArray2 = [5, 7, 8, 9];

const maximumNumber = (numbersArray1, numbersArray2) => {
  const newArray = [...numbersArray1, ...numbersArray2];
  const maximumNumber = Math.max(...newArray);
  return maximumNumber;
};

const result = maximumNumber(numbersArray1, numbersArray2);
console.log(result);
