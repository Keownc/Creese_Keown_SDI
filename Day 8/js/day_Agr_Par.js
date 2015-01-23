/*
 *Keown Creese
 *SDI
 *1/20/15
 *Arguments and Parameters
 */

//alert("Testing");


//Argurments - goes in the function call
//Paramters - goes in the function definition

//Must have the same number of arguments and parameters......usually

//create a function to calculate the area of a retangle

function calcArea(w,h) {//Parameters go here
    
    //var width=10;
    //var height=20;
    //var area=width*height;
    
    var area=w*h;
    var result=h+w
    console.log("The area is "+area);
    console.log("The result is "+result);
}

//call to function
calcArea(10,20);
calcArea();

// Calculate Dog years
//Put in human years, get out dog year
function dogYears(humanAge) {//humanAge parameter
    
    //dog years = human*7
    var dogAge=humanAge*7;
    console.log("Dog age is "+dogAge);

}

//Function call with arguments

dogYears(24);

var userAge=prompt("How old are you");
dogYears(Number(userAge));
