const names =['abul', 'babul','cabul','habul','mokbul','aramacul','katbul','abul', 'babul','cabul','habul','nabul','bablu']
const numbers =[12,23,45,78,34,12,23,45,78,37,70]
const nameNumbers = names.concat(numbers);

function removeDuplicate(names){
    const unique =[];
    for(let i=0; i<names.length; i++){
        const name =names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(nameNumbers);
console.log(uniqueNumbers);

const my = 'i am very happy';
my[3]='b';
const total = my.length;
console.log(my);
console.log(total);

const array =[2,3,4,5,67];
console.log(array.length);