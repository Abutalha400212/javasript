var shoopingCart =
{
    Quantity: 5,
    price: 1000,
    Mobile: 2,
    cars: 5
}
console.log(shoopingCart);
var keysSoft = Object.keys(shoopingCart);
console.log(keysSoft[0]);
var keyvalues = Object.values(shoopingCart);

console.log(keysSoft);
console.log(keyvalues);
var propertyName = 'price';
var propertyValues = shoopingCart[propertyName]
console.log(propertyName,propertyValues);