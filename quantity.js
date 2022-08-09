const array = [12, 34, 45, 67, 87, 83, 82, 90, 97, 95];
function get80UpNumber(numbers) {
    const selected = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > 80) {
            selected.push(number);
        }
    }
    return selected;
}
function getSum80UpNumber(numbers) {
   let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}

const getNumber = get80UpNumber(array);
const sumGetNumber = getSum80UpNumber(getNumber);
console.log('Number of greater than 80:', getNumber);
console.log('Sum of greater the 80:', sumGetNumber);