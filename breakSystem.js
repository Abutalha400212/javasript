const numbers = [1, 4, 5, -1, -5, -9, 5, 7];
function countForBreak(numbers) {
    let Exit = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > 0) {
            Exit.push(number);
        }
        else {
            break;
        }
    }
    return Exit;
}
console.log(countForBreak(numbers));