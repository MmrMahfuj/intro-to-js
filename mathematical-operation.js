var onionPrice = 56;
var eggPrice = 45;
var eggQuantity = 7;
var moneyAvailable = 100;
var orangePrice = 5;

var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;
var orangeQuantity = moneyAvailable / orangePrice;
var newPrice = onionPrice + 30;
// onionPrice = onionPrice + 50;
onionPrice += 50;
var doublePrice = orangePrice * 2;


console.log(onionPrice);
console.log(eggPrice);
console.log(totalPrice);
console.log(onionPrice + eggPrice);
console.log(priceDifference);
console.log(eggPriceMultiplication);
console.log(orangeQuantity);



var realmiMobilePrice = 24;
// realmiMobilePrice = realmiMobilePrice + 10;
// realmiMobilePrice = realmiMobilePrice - 5;

realmiMobilePrice += 10;
realmiMobilePrice -= 5;

console.log(realmiMobilePrice);


var age = 21;
// age = age + 1;
// age += 1;
age++;
console.log(age);


var love = 100;
// love = love - 1;
// love -= 1;
love--;
console.log(love);


// special edition

var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total);


var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total.toFixed(1));


var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(parseFloat(total.toFixed(1)));


var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
console.log(total)


// modulus

var mangoes = 7;
var hangryPerson = 2;
var remaining = mangoes % hangryPerson;
console.log(remaining);