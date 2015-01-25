/*
 *Keown Creese
 *SDI
 *1/24/15
 *Functions Assignment
 */

//alert("Testing")


//To calculate the cost spent to go to a theme park

function themePark(g,t,s) {

    //calculator
    var total=g+t+s;
    //return total
    return total;

}

// Anonymous Function to calculate addition cost
var extras=function (m,s){
        
        //calculator for additional cost spent at the theme park
        var total=m+s;
        
        //return  for both total and total2;
        return total;
    
};


//prompt for the cost spent on gas
var gas=prompt("The calculate the cost to go to a theme park.\nHow much money was spent on gas:");

//validation for for gas money
while (isNaN(gas)||gas==="") {
    
    if (isNaN(gas)) {
        gas=prompt("Please only enter numbers.\nHow much money was spent on gas:");
    }else{
        age=prompt("Please do not leave blank.\nHow much money was spent on gas:");
    }
}

//Prompt for the cost of ticket
 var ticket=prompt("What is the cost for the ticket:");

//validation for ticket
while (ticket===""||isNaN(ticket)) {
    
    //An if else statement to see if the user left blank or enter words
    if (isNaN(ticket)) {
    ticket=prompt("Please only enter numbers.\nWhat is the cost of the ticket:");
    
    }else{
        ticket=prompt("Please do not leave blank.\nWhat is the cost of the ticket:");
    }
}

//Prompt for snack bought at the theme park
var snacks=prompt("How money did you spent on snacks");

//valiation for snacks to see if a number was entered
while (isNaN(snacks)||snacks===""){
    
    //An if else statement to see if the user left blank or enter words
    if (isNaN(snacks)) {
    snacks=prompt("Please only enter numbers.\nWhat is the cost of the ticket:");
    
    }else{
        snacks=prompt("Please do not leave blank.\nWhat is the cost of the ticket:");
    }
}




