function simpleInterest (principal,interestRate,time){
  var  multiple= (principal*interestRate*time)/100;
    return multiple
}
var total= simpleInterest(12,0.7,5);
console.log(total)