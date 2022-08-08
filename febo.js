const fibo = [12 ,13];
for(let i=2; i<=15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    
}
const legal = fibo.join(',')
console.log(legal);