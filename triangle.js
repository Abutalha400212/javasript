const side1 = 5;
const side2 = 4;
const side3 = 7;
const s = (side1+side2+side3)/2;

area =(s* (s-side1) * (s-side2) *(s-side3)) ;
const squreOfArea = Math.sqrt(area);
const fixed = squreOfArea.toFixed(3);
console.log(fixed);