/*
Keown Creese
SDI Campus
1/13/2015
Prompting
 */

//alert("Testing");

// Ask user for input - prompt()
//Save the user's response - by creating a variable
var userInput = prompt("Enter your year of birth?");
//validation
while (userInput===""||isNaN(userInput)) {
    //if else statement
    if (userInput==="") {
     userInput = prompt("Please dont leave blank.\nEnter your year of birth?");   
    }else{
    userInput = prompt("Please only enter numbers.\nEnter your year of birth?");   
    }
}
console.log(userInput);

//Calculate the area of a rectangle
//area = lengths * width

//create 2 variable and prompt the user for length and width
var length = prompt("Lets calculate the area of a rectangle.\nPlease enter in the length:");

while (length===""||isNaN(length)) {
    //if else statement
    if (length==="") {
     length = prompt("Please dont leave blank.\nWhat is the length?");   
    }else{
    length= prompt("Please only enter numbers.\What is the length?");   
    }
}

var width = prompt("Lets calculate the area of a rectangle.\nPlease enter in the width");
while (width===""||isNaN(width)) {
    //if else statement
    if (width==="") {
     width = prompt("Please dont leave blank.\nWhat is the width?");   
    }else{
    width= prompt("Please only enter numbers.\What is the width?");   
    }
}

// calculate area
var areaRec = length * width;
console.log("The area of your rectangle with a length of "+length+ "and a width of "+width+ "is "+areaRec);



