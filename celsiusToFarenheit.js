function celsiusToFarenheit (number1){
var convertedToFarenheit = number1* 9/5 + 32;
var message = number1 + '\xB0C is'+' '+ convertedToFarenheit+'\xB0F.';
console.log(message);
}
function farenheitToCelsius (number2){
var convertedToCelsius = (number2-32)* 5/9;
var message = number2 + '\xB0F is'+' '+ convertedToCelsius+'\xB0C.';
console.log(message);
}


celsiusToFarenheit(20);
farenheitToCelsius(90);