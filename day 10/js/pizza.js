/*
 *Keown Creese
 *SDI
 *1/27/15
 *Pizza Functions 
 */

//alert("Testing")

//Calculate how pizzz=a costs per sq in and how per slice

//prompt
//radius of pizza
//cost of pizza
//# of slice per pizza

var pizzaRadius=prompt("What is the radius of your pizza?");
//validation
while (pizzaRadius===""||isNaN(pizzaRadius)){
    //reprompt
    pizzaRadius=prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza?");
}
//do while validation
do {
    //prompt user
    var pizzaCost=prompt("How much does your pizza cost in total?");
}while (pizzaCost===""||isNaN(pizzaRadius));

var pizzaSlices=prompt("How many slice are in your pizza?");

while (pizzaSlices===""||isNaN(pizzaSlices)) {
    pizzaRadius=prompt("Please do not leave blank and only use numbers.\nHow many slice are in your pizza?");
}



//function call the start the lordfunction
var results=lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

//console.log
console.log("Your pizza per sq in costs $"+results[0]+" that comes out to $"+results[1]+" per slice")




//create a function that will start all of the other function
function lordFunction(radius,cost,slices) {
    //calculate the area
    var area= pizzaArea(radius);
    //calculate  the cost per area
    var areaCost = pizzaSqInCost(cost,area);
    
    //
    var slicesPrice=pricePerSlices(cost,slices);
    return [areaCost, slicesPrice];
    
    
}



//Create a function that calculate the area of the pizza
function pizzaArea(r) {
    //area PI* r*r
    var area=Math.PI*r*r;
    return area;
}


//Create a function that calculate the pizza per sq in of the pizza
function pizzaSqInCost(price,area) {
    //price/area
    var costPerIn=price/area;
    //round to 2 dec
    costPerIn=costPerIn.toFixed(2);
    return costPerIn;
}
//Function that calculate the prize per slice
function pricePerSlices(price,slice) {
    //price/slice
    var costPerSlice=price/slice;
    costPerSlice=costPerSlice.toFixed(2);
    return costPerSlice;
}