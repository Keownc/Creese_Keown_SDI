
 /*
Keown Creese
SDI Campus
1/13/2015
Casting
 */

//alert("Testing")

//casting one variable type to be another variable type
 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //Number variable or value to cast - treats anything inside of the () as a #

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //String() - anything inside () is treated as a text string
 var areaCode = 407;
 var firstPart = 203;
 var secondPart =1234;

 var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
 console.log(phoneNumber);


 var phoneNumber2 = "("+String(areaCode)+")" + String(firstPart) +"-"+ String(secondPart);
 console.log(phoneNumber2);

 var phoneNumber3 = "("+areaCode+")"+firstPart +"-" +secondPart;
 console.log(phoneNumber3);

 // Parsing Integers
 //parseInt() - it looks through a text string and returns an integer.
 //only the first number in a string is returned
 //text string has to start with a number
//leading and trailing spaces are allowed
 //If it can't find the Integer then it returns NaN
 //NaN - Not aa NUmber

 var a = parseInt("40 years old");
 console.log(a);

 var b = parseInt("I am 40 years old.");
 console.log(b);


var c = Number("40 years old");
console.log(c);

 //prompts only returns strings
 var shoesHad = prompt("How many pairs shoes did you own before?");
 var shoesBought = prompt("How many pairs of shoes did you buy?");

 //add shoesHad and shoesBought for the total number

 var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
 console.log(totalShoes);




