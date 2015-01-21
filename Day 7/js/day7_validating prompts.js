/*
 *Keown Creese
 *SDI
 *1/20/15
 *day 7
 *Validating Prompts
 */

//alert("Testing")


var userInput=prompt("Please type in your name:");

// Valiadting prompt with condition
if (userInput==="") {
    // User did not type anything in
    userInput=prompt("Please do not leave blank, Typr in your name?");
}


//Instead use a while loop!
//Check the input multiple as many as it takes

var firstName=prompt("Please type in your Name");

while (firstName==="") {
    //The user typed in nothing
    //Reprompt for firstName
    firstName=prompt("Please type in your first name and DO NOT leave blank");
}



// Test to see if it is a number
//IsNAN()- test what is inside of(). Is it not a number?


//Number returns false
//Everything else returns true

console.log(isNaN("Monkey")); // Returns true
console.log(isNaN(7)); // Return false

// Lets ask the use their age
var age=prompt("Please enter your age:");

//Validate that the user typed in a number
while(isNaN(age)|| age===""){
    //This code runs anytime that the age is not a number
    //Reprompt the user for a number
    age=prompt("Only use numbers, please enter you age: ")
}


 var choice=prompt("Please type in Yes or No:");
 
 //Convert to lower case
 choice=choice.toLowerCase();
 
 while (choice!="yes"&&choice!="no") {
    
    choice=prompt("Please only type in yes or no!");
    //
    
    
 }












