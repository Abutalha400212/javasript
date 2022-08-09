const numbers = [124, 235, 354, 576, 677, 878, 889]

function oddNumber(numbers) {
    const requirement = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]

        if (number % 2 === 0) {
            requirement.push(number);
        }
    }
    return requirement;
}


function evennumber(numbers) {
    const requirement2 = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number %2 !== 0) {
            requirement2.push(number);
        }
    }
    return requirement2;
}

const oddNumbers = oddNumber(numbers);
const evennumbers = evennumber(numbers);

console.log('Array Of Odd Number:', oddNumbers);
console.log('Array Of Even Number:', evennumbers);