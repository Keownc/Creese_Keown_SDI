
 /*
Keown Creese
SDI Campus
1/13/2015
Expression Assignment
 */

//alert("Testing to see if this is working")


 //Created an array for groceries in a basket
 var gear = ["iphone6", " memory card", "and iphone case"];

 // Add a prompt to ask the user to enter their given value
 var iphone6 = parseInt(prompt("To calculate the cost spent on a half-priced gear.\n What is the price of a iphone6.\n Please do not add dollar sign."));
 var memoryCard = parseInt(prompt("To calculate the cost spent on a half-priced gear\n What is the price of a Memory Card.\nPlease do not add dollar sign."));
 var iphoneCase = parseInt(prompt("To calculate the cost spent on a half-priced gear.\n What is the price of a iphone case.\nPlease do not add dollar sign."));

//Iphone is given at half price.
 iphone6 /=2;
// Add three items to find the cost before tax
 var totalCost= iphone6 += memoryCard += iphoneCase;
 // Total cost after tax is to be added
 var totalFinCost = totalCost + (totalCost*=15/100);

 //Rounded off to two decimal places
 totalAvgCost = totalFinCost.toFixed(2);

 //Print the cost
 console.log("The total amount spent on "+gear+ " is $"+totalFinCost+" after the iphone6 was given at half price \n and 15% taxes has been add to the bill.");

//I enter 200 for the iphone6, 60 for the memory card, 35 for the iphone cast and received an answer of $224.25.;
 //I enter 320 for the iphone6,  120 for the memory card, 60 for the iphone cast and received an answer of $391.;
 //I enter 400 for the iphone6, 75 for the memory card, 55 for the iphone cast and received an answer of $379.50.;
 //I enter 240 for the iphone6, 55 for the memory card, 82 for the iphone cast and received an answer of $295.55.;
 //I enter 284 for the iphone6, 100 for the memory card, 75 for the iphone cast and received an answer of $364.55.;