function maxInArray(numbers){
    let shortest = numbers[0];
    for(let i=0 ; i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        if(element < shortest){
            shortest = element;
        }
    }
    return shortest;
}
const heights = [167, 190, 120, 165, 137,86];
const tallest = maxInArray(heights);
console.log('shortest number is',tallest);