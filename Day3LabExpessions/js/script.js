/*
Keown Creese
1/10/2015
SDI
Lab 3
Section 1
 Instructional Expressions
*/

//calculates how much pizza each partyGoer will get at the party
var slicesOfPizza = 8;
var numberOfPeople = 10;
var pizzaOrdered = 4;

// mutlipity slicesOfPizza * pizzaOrdered
var numberOfSlices = slicesOfPizza * pizzaOrdered;

//Output number of slices at the party
console.log("The number of pizza slices at the party is "+ numberOfSlices);


//Divide numberOfSlices / numberOfPerson
var numberOfSlicePerPerson = numberOfSlices%numberOfPeople;

//Output number of slices per persons
console.log("Each person ate "+numberOfSlicePerPerson + " slices of pizza at the party.");

//The number of slices sparky gets to eat
var sparkyShares = numberOfSlices % numberOfPeople;

//Output Number of slices Sparky gets to eat
console.log("Sparky got "+sparkyShares + " slices of pizza");

//calculate your average weekly grocery shopping spending over the past five weeks
var week1 = 20;
var week2 = 40;
var week3 = 30;
var week4 = 50;
var week5 = 20;

//Total equal
var total = week1 + week2 + week3 + week4 + week5;
var average = total /5;

//Output Answer
console.log("You have spent a total of $"+total + " on groceries over 5 weeks. That is an average of $"+average + " per week");


//calculate the discounted price with and without sales tax
var originalPrice = 276;
var discountPercentages = 15;
var description = "playstationVita";
var saleTaxPer = 5;

//discount equals originalPrice - originalPrice * discountPercentages
//price without tax
var discountPrice = originalPrice - originalPrice * (discountPercentages/100);

//Tax price equals discountPrice + discountPrice * (saleTaxPer/100)
var  taxPrice= discountPrice + discountPrice * (saleTaxPer/100)


























