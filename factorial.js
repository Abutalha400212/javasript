function factorial(number)
{
    let result= 1;
    let factor=[];
for(let i=number; i>0; i-- ){
    result=result*i;
}
return result;
}
const report = 12;
const result = factorial(report);
console.log('Factorial OF',report,':',result);