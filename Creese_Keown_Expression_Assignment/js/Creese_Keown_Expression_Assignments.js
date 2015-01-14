
 /*
Keown Creese
SDI Campus
1/13/2015
Expression Assignment
 */

//alert("Testing to see if this is working")


 //Created an array for gear bought at a store
 var gear = ["iphone6", " Memory Card", "and iphone Case"];

 // Add a prompt to ask the user to enter their given value
 var iphone6 = parseInt(prompt("To calculate the cost of a half priced gear.\nWhat is the price of a iphone6.\nPlease do not add dollar sign."));
 var memoryCard = parseInt(prompt("To calculate the cost of a half priced gear\nWhat is the price of a Memory Card.\nPlease do not add dollar sign."));
 var iphoneCase = parseInt(prompt("To calculate the cost of a half priced gear.\nWhat is the price of a iphone case.\nPlease do not add dollar sign."));


 //Created the the average cost
 // iphone is given at half price
 // Tax is to be added
 iphone6 /=2;
 var totalCost= iphone6 += memoryCard += iphoneCase;
 var totalFinCost = totalCost + (totalCost*=15/100);

 //Rounded off to two decimal places
 totalAvgCost = totalFinCost.toFixed(2);

 //Print the cost
 console.log("The total amount spent on "+gear+ " is $"+totalFinCost+" after the iphone6 was given at half price \n and 15% taxes has been add to the bill.");

