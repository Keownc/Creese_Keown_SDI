/*
 *Keown Creese
 *SDI
 *1/24/15
 *Functions Assignment
 */

//alert("Testing")


//To calculate the cost spent to go to a theme park
// function for themepark calculation
function themePark(g,t,s) {

    //calculator
    var total= g + t + s;
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
var gas=parseInt(prompt("The calculate the cost to go to a theme park.\nHow much money was spent on gas:"));

//validation for for gas money
while (isNaN(gas)||gas==="") {
   gas=parseInt(prompt("Please only enter numbers.\nHow much money was spent on gas:"));
   
}

//Prompt for the cost of ticket
 var ticket=parseInt(prompt("What is the cost for the ticket:"));

//validation for ticket
while (ticket===""||isNaN(ticket)) {
    
    ticket=parseInt(prompt("Please only enter numbers.\nWhat is the cost of the ticket:"));
  
}

//Prompt for snack bought 
var snacks=parseInt(prompt("How money did you spent on snacks"));

//valiation for snacks to see if a number was entered
while (isNaN(snacks)||snacks===""){
      
    snacks=parseInt(prompt("Please only enter numbers.\nWhat is the cost of the ticket:"));   
}

//Prompt for the cost spent to watch in movie in the park
var movie=parseInt(prompt("What is the cost spent to watch a movie at the park."));

//validation for cost spent on the movie
while (isNaN(movie)||movie===""){
    
    movie=parseInt(prompt("Please only enter numbers.\nWhat is the cost to watch a movie:"));  

}

//Prompt for the cost spent to watch in movie in the park
var souvenir=parseInt(prompt("What is the cost spent to watch a movie at the park."));

//validation for cost spent on the movie
while (isNaN(souvenir)||souvenir===""){
    
    souvenir=parseInt(prompt("Please only enter numbers.\How much money was spent on souvenir:"));
    
}




//Function call to themepark function
var results1=themePark(gas,ticket,snacks);

//Function call to anonymous extra
var results2=extras(movie,souvenir);

//calculator for total cost 
var grandTotal=results1+results2;

//print output
console.log("The total cost spent to go to the themepark is $"+results1+"\nand you spent an addition cost of $"+extras(movie,souvenir)+" to watch a movie \nand/or bought souvenirs at the park giving you a grand total of $"+grandTotal);


//I entered nothing for the gas prompt and received prompt saying please only enter numbers.
//I entered a word type and received prompt saying please only enter numbers.
//I entered 40. A prompt appeared asking for ticket price.
//I entered nothing and received prompt saying please only enter numbers.
//I entered a word type and received prompt saying please only enter numbers.
//I entered 80 and a next prompt asked for snack bought.
//I entered nothing and received prompt saying please only enter numbers.
//I entered a word type and received prompt saying please only enter numbers.
//I entered 35 a next prompt asked for movie cost
//I entered nothing and received prompt saying please only enter numbers.
//I entered a word type and received prompt saying please only enter numbers.
//I entered 45 a next prompt asked for souveniers.
//I entered nothing and received prompt saying please only enter numbers.
//I entered a word type and received prompt saying please only enter numbers.
//I enter 20 and received an output of 155,65,220
//I enter 35,90,0,0,30 and received an output of 125,30,155


