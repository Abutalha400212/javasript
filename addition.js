const Input = [12, 23, 35, 67, 89, 90, 12, 34, 65, 89, 97, 28];

function getCalculateNumber(numbers) {
    const evenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0) {
            evenNumber.push(number);
        }
    }
    return evenNumber;
}
function getSumNumber(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = numbers[i];
        sum =sum+index;
    }
    return sum;
}
const evennumber= getCalculateNumber(Input);
const sumEvenNumber = getSumNumber(evennumber)

console.log('Even Number :',evennumber);
console.log('Sum Even Number:', sumEvenNumber);