/*
 *Keown Creese
 *SDI
 *1/22/15
 *Return Values
 */

//alert("Testing")

//Created a function to calculate area of rectangle

function calcArea(w,h) { //
    
    //calculate area
    var area=w*h
    //console.log(area);
    //Return the area value to the main code
    // does not return the variable itself
    return area;

    
    
}

// function call

//create a variable to catch the return value

var returnArea=calcArea(77,9);
console.log(returnArea);

//This does not work!!
//console.log(area);

console.log(returnArea);


// created a function to calculate area of a circle
// area= pi*r*r

function circleArea(radius) {
    
    var area= Math.PI*radius*radius
    
    //return this area
    return area;
 
}

// function call
var returnArea1=circleArea(6);
console.log("The area of the circle is "+returnArea1);

// how two circle with the same radius. what is the total area?
var twoArea=returnArea1*2

console.log("The area of the circle is "+twoArea.toFixed(2));

var result2 = circleArea(3);
console.log("The area of a circle with a radius of 3 is "+result2);


// prompt user for radius. then calculate area
var userRad=prompt("Please type in radius:");

//Validate prompt
while (isNaN(userRad)||userRad===""){
    userRad=prompt("Please only use numbers\nType in a radius:");
    
}
//Parse the variable
userRad=parseInt(userRad);

// create a userResults to catch the result
var userResults=circleArea(userRad);

console.log("The area of your circle with a radius of "+userRad+"is"+userResults.toFixed(2));

