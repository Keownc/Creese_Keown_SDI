/*Keown Creese
 *SDI
 *Final Exam
 *1/29/15
 */


//Prompt for the user to enter cost of item
var cost=prompt("What is the cost of the item?");

//Validation for the prompt
while (isNaN(cost)||cost==="") {
 
    cost=prompt("Please don't leave blank and only use numbers.\nWhat is the cost of the item:");
}

//Prompt for discount
var discount=prompt("What is your discount?");

//validation for discount
while (isNaN(discount)||discount===""||discount<0||discount>=100) {
    
    discount=prompt("Please don't leave blank and only use numbers more 0 but less than 100.\nWhat is your discount:");

}

function totalCost(c,d) {
    //calculator for discount.
    var discount=c*(d/100);
    //calculator for discount price.
    var discountPrice =c-discount; 
    //return discountPrice
    return discountPrice;

}

var results=totalCost(cost,discount);

console.log("The Final cost of an item that cost $"+cost+" with a discount of "+discount+"% is $"+results);


//tested original cost 50 discount 20 and got 40
//tested original cost 30 discount 40 and got 18


