const names = ['abdul', 'kabidul', 'mokbul', 'sofikul', 'rafiul', 'mujahidul', 'abdul', 'mokbul', 'korim', 'rafiul', 'sofikul', 'rafiul', 'mujahidul', 'abdul', 'mokbul', 'korim', 'rafiul', 'sofikul', 'abdul', 'kabidul', 'mokbul', 'sofikul', 'rafiul'];
const numbers = [12, 23, 44, 56, 67, 88, 97, 45, 56, 67, 12, 23, 44, 66, 77, 88, 23, 12, 45, 67];
function removeDuplicate(numbers) {
    let unique = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (unique.includes(number) === false) {
            unique.push(number);
        }
    }
    return unique;
}
function sumRemoveDuplicate(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
      sum = sum + number;}
    return sum;
}
const number = removeDuplicate(numbers);
const sumNumber = sumRemoveDuplicate(number);
const name1 = removeDuplicate(names);
const sumName = sumRemoveDuplicate(name1);
console.log('Exact Number :',name1);
console.log('Sum Of Exact Number :',sumName);
console.log('Exact Number :',number);
console.log('Sum Of Exact Number :',sumNumber);