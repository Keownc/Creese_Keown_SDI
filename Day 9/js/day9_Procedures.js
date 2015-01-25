/*
 *Keown Creese
 *SDI
 *1/24/15
 *Procedures
 */

//alert("Testing")

//This is a basic or nomal function
function calcArea(width, height) {
    var area=width*height
    return area;
}

//function call
var results=calcArea(4,5);
console.log(results);

//This is a procedure
//It does not return a value
//list of steps to do

function calcAreaP(width, height) {
    
    //calculation
    var area=width*height
    console.log(area);
    //It will not have a return
}

//function call for procedure
calcAreaP(6,7);

alert("Test"); //procedures
var userInput=prompt("ask a questions");
//prompting is function