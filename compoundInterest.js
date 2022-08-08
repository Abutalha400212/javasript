// Compound interest//
const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;

function compoundInterest(p, t, r, n){
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
}
const SI = compoundInterest(principal, time, rate, n);
console.log(SI);
