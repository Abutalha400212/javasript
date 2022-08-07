var fashion = {
Clothing: 10,
Pants:12,
tShirt: 15,
shoes:20,
bodyOil:20,
FasialWash:12
}
var propertyName = Object.keys(fashion);
var propertyValues = Object.values(fashion);
for(i=0;i<6;i++){
    var oneKind = propertyName[i];
var kind = propertyValues[i];
console.log(oneKind,':',kind);
}
console.log(oneKind);
console.log(kind);
console.log(propertyName);
console.log(propertyValues);
  


