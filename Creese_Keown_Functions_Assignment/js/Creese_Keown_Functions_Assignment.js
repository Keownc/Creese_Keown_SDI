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

//Prompt for the cost spent to watch in movie in the park
var movie=prompt("What is the cost spent to watch a movie at the park.");

//validation for cost spent on the movie
while (isNaN(movie)||movie===""){
    //An if else statement to see if the user left blank or enter words
    if (isNaN(movie)) {
    movie=prompt("Please only enter numbers.\nWhat is the cost to watch a movie:");
    
    }else{
        movie=prompt("Please do not leave blank.\nWhat is the cost to watch a movie:");
    }
}

//Prompt for the cost spent to watch in movie in the park
var souvenir=prompt("What is the cost spent to watch a movie at the park.");

//validation for cost spent on the movie
while (isNaN(souvenir)||souvenir===""){
    //An if else statement to see if the user left blank or enter words
    if (isNaN(souvenir)) {
    souvenir=prompt("Please only enter numbers.\How much money was spent on souvenir:");
    
    }else{
        souvenir=prompt("Please do not leave blank.\nHow much money was spent on souvenir:");
    }
}




//Function call to themepark function
var results1=themePark(gas,ticket,snacks);

//Function call to anonymous extra
var results2=themePark(gas,ticket,snacks)+extras(movie,souvenir);

//calculator for total cost 
var grandTotal=results1+results2;

//print output
console.log("The total cost spent to go to a themepark is $"+results1+"\nand you spent the following addition cost to watch movie \nand bought souvenir at the park giving you a grand total of $"+grandTotal);





