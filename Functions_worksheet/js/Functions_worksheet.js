/*
 *Keown Creese
 *SDI
 *1/22/15
 *Functions worksheet
 */

//alert("Testing")


// function to calculate circumference of a circle
function circleCum(radius) {
    
    //circumference of circle equals PI*D
    var diameter=radius*2
    var circumference=Math.PI*diameter;
    
    //Return the circumference
    return circumference;
}

//prompt for the using to input the radius
var userInput=parseInt(prompt("To calculate the circumference of a circle.\n Please enter the radius:"));

//validation to see if the user enter a number
while(isNaN(userInput)||userInput===""){
    
    userInput=parseInt(prompt("Sorry! I only take numbers.\n Please enter the radius:"));
}


//Return to catch the return
var results=circleCum(userInput);

console.log("The circumference of the circle is "+results.toFixed(2));



//Function to calculate how many bee strings kills an animal 
function beeStung(weight) {
    
    //calculate for bee stings
    var kills=8.666666667*weight
    
}




