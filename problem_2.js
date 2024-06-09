/*
Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the name of your friends.

b) Check if the length of each element is even, push elements with even lengeth to a new array and return the result

Print the result
*/
const friends = [
  "Mamun",
  "Sagor",
  "Galib",
  "Santo",
  "Mostafizur",
  "Rontuu",
  "Toton",
];
const friendsArray = (friends) => {
  const newArray = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      newArray.push(friend);
    }
  }
  return newArray;
};

const result = friendsArray(friends);
console.log(result);
