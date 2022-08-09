var property = {
    name: 'samsung',
    price: 20000,
    Storage: 64,
};


var number = [12, 23, 34, 56, 78, 90];
number[1] = 32
number.push(93);
number.pop();
number.unshift(12);
number.shift();
console.log(number);

property.name = 'symphony';
property.price = 4500;
console.log(Object.keys(property));
console.log(Object.values(property));
console.log(property);

