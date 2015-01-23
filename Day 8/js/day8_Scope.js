/*
 *Keown Creese
 *SDI
 *1/22/15
 *scope
 */

//alert("TESTING");



//Variable scope
//Variable inside and ourside of a function

//try not to use the same variable name
//However in large file this is going to be impossible

//Variable created inside a function can only be seen inside of those functions

//Created a variable for width in our main code

var width=5; //scope outside of the function or main code

//Create a function the calculates the perimeters or a rectangle
function calcPeri() {
    
    var width=10; //scoped to the function calcPeri
    console.log("Inside of the function the value of width is "+width);
    
    var height=20
    var perimeter=width*2 + height*2;
    console.log("Inside of function the perimeter is "+perimeter);
    
}

console.log("Before call "+width);

calcPeri();

console.log("After call "+width)


//This will not
//Can not work becuase a variable declared inside of function from your main code.
console.log("Afte call the perimeter is "+perimeter)












