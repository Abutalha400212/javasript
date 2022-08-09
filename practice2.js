const numbers = [124, 235, 354, 576, 677, 878, 889]

function oddNumbers(numbers) {
    const requirement = [];
  const requirement2 =[];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]

        if (number % 2 === 0) {
            requirement.push(number);
        }
        else {
            requirement2.push(number);
            console.log(requirement2);
        }
    }
    return requirement;
}

console.log(oddNumbers(numbers));