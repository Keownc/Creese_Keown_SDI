/*
 *Keown Creese
 *SDI
 *1/24/15
 *Anonyments Functions 
 */

//alert("Testing")

//Anonymous Function
//Widely used in js and jQuery
//Importat in object Oriented Program
//Can be used interchangalby with nomal function, if done right,

//very quick and easy

/*
 *basic sturcture of anon function
 *var functionName =function(Parameters){
    code
 }
 */

//Fuction cal before the nomal function is defined
var results2=triArea(6,7);
console.log("Before the fuction result2 is "+results2);

//function call before the anon function is defined
/*
This does not work!
FUNCTION CALL HAS TO COME AFTER ANON FUNCTION IS DEFINITION

var results4=triAreaAnon(7,8);
console.log("Before the anon function result4 is "+results2)

*/


//Create a nomal function fpr area of triangle
function triArea(b,h) {
    //Area = 1/2b *h
    var area = .5*b*h;
    return area;
}

//function call
var results1=triArea(5,6);
console.log(results1);



//create an anonymos function that calc the area of triangle
var triAreaAnon=function(b,h){
    var area=.5*b*h;
    return area;
};

//function call after defined of anon function
var results3=triAreaAnon(4,5);
console.log("Result of anonymos function after defined is "+results3);

















