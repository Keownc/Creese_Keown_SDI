/*
Keown Creese
1/10/2015
Day 3 Coding
 */

// Single lined Comment

//This is an alert
//alert("Testing to see if this is connected!");

//Console.log _ allow programmers to see information
console.log("This is the console.");


//Declare a variable
//Use the keyword of var
var whatever1;   //Declaration of a variable
whatever1 = 42; // Definition of a variable

console.log(whatever1);

//Declare and define a variable
var a = 2;
console.log(a);

//simple math
a = a+3;
console.log(a);

var b;
b= a+3
console.log(b);
console.log(a);

//Find our age
var YearOfBirth=1992;

//age is calculated by current year minus year born
var currentYear=2015;

var age = currentYear - YearOfBirth;
console.log(age);

//Math
//+,-,*,/

//find area of triangle

//1/2 * base * height
var base = 8;
var height = 10;
var areaTriangle = 1/2 * base * height;
console.log(areaTriangle);

//Modulo - %
//Gives remainder

var remainder = 32%10;
console.log(remainder);

//Find if even or odd
// modulo by 2 %2
//1 if it is odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

// Assignment Operators
/*
= Assignment
++ Add1 to the variable
-- subtracts 1 from the variable
 += (number) addition Assignment
-= (number) subtracts Assignments
/= (number) Dividition assignment
*= (num) multiplication Assignment

 */

var counter = 1 ;
counter++; // counter = counter + 1;
console.log(counter);

counter--; //counter = counter - 1;
console.log(counter);

counter +=3; //counter + 3;
console.log(counter);

counter -=2; // counter= counter - 2;
console.log(counter);

counter /= 2; //counter = counter / 2
console.log(counter);

counter *=4; //counter same as counter *4
console.log(counter);

//String is any text variable
// " is used at the beginning and end of the string"
//Used to distinguish between variables name and random text
//single 'quotes' double quotes are used,
//But must match

var kermit = "light green";

var frogName = "kermit";

console.log(frogName);

// Double quote or single quote
// can use a escaping character \ blackslash in
//front of the apostrophe

var phrase = 'I don\'t know';
console.log(phrase);

// multi-lines by using in - new line character
var phrase2 = "I don't know! \nYou never know!";
console.log(phrase2);

// Boolean
// KIND of light switch - either on or off
// true or false - NOT "TRUE" OR "FALSE"

var yes = true;
var nope = false;

// THIS IS NOT A BOOLEAN
var wrong = "true";

// order of Operations
// PEMDAS - PLEASE EXCUSE MY DEAR AUNT SALLY
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

// Find quiz average

var quiz1 =87;
var quiz2 = 100;
var quiz3 = 70;

// Average - add them divide how many there are
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

//Do Not overuse parenthesis
// var perimeter = ((length*2) + (width*2));

// Concatenation - combining text strings
// use the + plus sign for text and not just numbers

var firstName ="kermit";
var lastName = "The Fog";

//Concatenate the first and last name in to a full name
var fullName = firstName +" "+ lastName;
console.log(fullName);

console.log(fullName +" is not my favorite muppet");


var d = "6";
var e = "7";

var combine = d+e;
console.log(combine);

// Constant values are always UPPERCASE
var PI =3.14;

//Round to decimal place
// toFixed(#) - # is how the decimal places what we want

var num = 5.67345345;
num = num.toFixed(2);
console.log(num);




















