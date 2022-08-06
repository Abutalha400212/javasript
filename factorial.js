function factorial(number)
{
    let result= 1;
    let factor=[];
for(let i=number; i>0; i-- ){
    result=result*i;
}
return result;
}
const result = factorial(9);
console.log(result);