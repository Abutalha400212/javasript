const Input = [12, 23, 35, 67, 89, 90, 12, 34, 65, 89, 97, 28];
Input.push(12,34,67,89,23,12,35,75,87);
Input.pop(12, 23, 35, 67, 89, 90, 12, 34, 65, 89, 97, 28);
console.log(Input);

function getCalculateNumber(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 != 0) {
            oddNumber.push(number);
        }
    }
    return oddNumber;
}
function getSumNumber(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = numbers[i];
        sum =sum+index;
    }
    return sum;
}
const oddnumber= getCalculateNumber(Input);
const sumOddNumber = getSumNumber(oddnumber)

console.log('Odd Number :',oddnumber);
console.log('Sum Odd Number:', sumOddNumber);