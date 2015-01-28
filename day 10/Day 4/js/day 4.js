/*
Keown Creese
SDI Campus
1/13/2015
Day 4 In Class Assignments
Arrays
 */

//alert("Test to see if this connecting");

// Create a basic array
var avengersNames=["Thor","Captain America","Iron Man"];

//print it out to the console
console.log(avengersNames);

//print ot one specific item
console.log(avengersNames[1]);

//Switch a team member - Iron man for spider
avengersNames[2]="Spider-Man";

console.log(avengersNames);

//add a team member
avengersNames[3]="Black Widow"

//print it out
console.log(avengersNames);

//use a variable as an index #
var num=2;
console.log(avengersNames[num]);

//length property
//Dot syntax - fancy for use a period
console.log(avengersNames.length);

//last index # is the length - 1

//next open space? is the length

//recruit a new team member
avengersNames[avengersNames.length]="Powerman";
console.log(avengersNames);
console.log(avengersNames.length);

// pick oranges and track how much we have

var orangesBins=[12, 20, 14];

//how many bins of oranges did we pick in total
var total=orangesBins[0] + orangesBins[1]+ orangesBins[2];
console.log("The total number of oranges bins is " + total);


// Advanced Arrays

var fruitBowl= ["Orange", "Tomato", "Strawberry"];

// Property - Length - how many items are in the arrays
console.log(fruitBowl.length + " items in our fruit bowl");

// A method of arrays

// push - insert an item at the of our array
// array name.push(item to push)

fruitBowl.push("Apple");

//see fruit bowl
console.log(fruitBowl);

// push another fruit
fruitBowl.push("Kiwi");
console.log(fruitBowl);

//pop - take off the last in an array and returns it
//arrayName.pop()
// create a variable to catch the return value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

// splice - is used for removing or adding into an existing array
//arrayNames.spice(index # positions to start from, # of the item to remove, items to put in
fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);

// adding more item
fruitBowl.splice(1,0,"Tangerine","Mango","Grapes");
console.log(fruitBowl);














