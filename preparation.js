const numbers = [12, 23, 45, 56, 67, 90]
const spliceNumber = numbers.splice(1, 4);


function sumSpliceNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
const sumation = sumSpliceNumber(numbers);
const sumation2 = sumSpliceNumber(spliceNumber);
console.log('Splice Number:', spliceNumber);
console.log('Sum of Splice Number:', sumation2);
console.log('Rest Number of Array:', numbers);
console.log('Sum of rest Number in Array:', sumation);