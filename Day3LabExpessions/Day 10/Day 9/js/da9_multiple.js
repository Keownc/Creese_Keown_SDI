/*
 *Keown Creese
 *SDI
 *1/24/15
 *Multiple Functions 
 */

//alert("Testing")


//Prompt the user for width and height
//calculate both the area and perimeter of a rectangle

//First setup area of of rectangle function

function areaRect(w,h) {
    var area=w*h
    return area;
}



function periRect(w,h) {
    // perimeter of a rectangle is 2*width + 2?*height
    var perimeter = 2*w +2*h
    //return the perimeter
    return perimeter;
}

//prompt the user for the width and height
var width = prompt("Please enter the width of your rectangle:");
//validate it
while (width===""||isNaN(width)) {
    width=prompt("Please do not leave blanl and only use numbers.\nWhat is the width:")
    
}

//prompt the user for the width and height
var height = prompt("Please enter the height of your rectangle:");
//validate it
while (height===""||isNaN(height)) {
    height=prompt("Please do not leave blanl and only use numbers.\nWhat is the height:")
    
}

//function call both function ...... One at a time
var resultArea=areaRect(width,height);
var resultPeri=periRect(width, height);

//Report out to the user
console.log("The area of the rectangle is "+resultArea+" and the perimeter is "+resultPeri);


//combined functionn to calculate the perimeter and the area
function combinedRect(w,h) {
    //calc area
    var area= w*h
    //calc peri
    var peri=2*w+2*h
    
    //return Both values!
    return [area, peri];
     
     //example 2
     //create the array
     //var result=[area,per]
    
}


//Function call
var combineResults= combinedRect(width,height);
console.log(combineResults[0]);
console.log(combineResults[1]);
console.log(combineResults);

























