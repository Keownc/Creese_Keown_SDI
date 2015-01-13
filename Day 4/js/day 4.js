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
