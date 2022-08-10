const numbers = [12, 23, 44, 56, 67, 80];
const selected= numbers.splice(2,4);
console.log(numbers);
const maxTotal = Math.max(...numbers);
const minTotal = Math.min(...numbers);
console.log(maxTotal);
console.log(minTotal);