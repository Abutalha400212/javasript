function getSumOffAnArray(numbers){
    let sum =0;
    for(let i=0; i< numbers.length; i++){
        const index =i;
        const element = numbers[index];
        sum = sum +element;
        console.log(sum);
    }
    return sum;
}

function getOddNumberOffAnArray(numbers){
const evenNumber =[];

    for(let i=0; i< numbers.length; i++){
        const index =i;
        const element = numbers[index];
       if(element%2 ===0){
        console.log(index,element);
        evenNumber.push(element);
       }
    }
    return evenNumber;
}

const myNumbers = [12,65,45,78,32,45,91];
const evenNumber= getOddNumberOffAnArray(myNumbers);
const sumEvenNumber= getSumOffAnArray(evenNumber);


console.log('Odd Number',evenNumber);
console.log('Odd Number Sum:',sumEvenNumber);
