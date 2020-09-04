/* arrow function */

const array = [1, 3, 2, 4, 7, 5, 6];
const filtered = array.filter(n => n < 4);
console.log(filtered);

/* sorting using lambdas */

console.log(array.sort((a, b) => a - b));

const names = ["one", "two", "three"];
const uppernames = names.map(
  n => n.toUpperCase()
)

console.log(uppernames);

