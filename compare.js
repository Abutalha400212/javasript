const company =[
    {name:'samsung', camera:20, price:22000, battery:3000, processor:1.79},
    {name:'symphony', camera:12, price:12000, battery:5000, processor:1.69},
    {name:'xiomi', camera:15, price:15000, battery:4000, processor:2.11},
    {name:'iphone', camera:30, price:72000, battery:4500, processor:3.11},
    {name:'htc', camera:25, price:68000, battery:3500, processor:2.11},
    {name:'oppo', camera:30, price:20000, battery:4000, processor:2.79},
    {name:'nokia', camera:35, price:32000, battery:5000, processor:2.79},
    {name:'vivo', camera:40, price:42000, battery:4000, processor:2.19}
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
    const productName = phones[i];
   if(productName.price > cheapest.price){
    cheapest = productName;
   }
    }
    return cheapest;
}
console.log(cheapestPhone(company));