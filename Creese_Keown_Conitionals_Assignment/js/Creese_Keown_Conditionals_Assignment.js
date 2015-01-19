/*
 *Keown Creese
 *SDI
 *1/17/15
 *Condiitional Assignment
 *Day 6
 */


//alert("Test to see if this connected.");

//Traveling
//Notes to self
//age to travel 19 and old
//Their is a 10% discount for people between the ages of 35 and older

//How much are you willing to spent.
//Your location is

//miami=200-449
//New York>=450

//How much people is traveling?
//2 <=50
//5>=75


//totalbill=cost1+ person

//cost1=250
//discount= cost*=10
//totalDiscount=discount/=100
//change=check-cost1

//cost2=450
//discount2= cost2*=10
//totalDiscount= discount2/=100
//change=check-cost2


var age=parseInt(prompt("What is your age?"));
var check;
var persons;


var totalPersons=persons*25

//calculator for the trip to Maimi
var cost=250;
var cost1=cost+totalPersons;
var discount1=cost1*=10;
var totalDiscount=dicount/=100;
var totalCost=cost-totalDiscount;
var totalCost1=totalCost+totalPersons;

//Calculator for the trip to New York
var cost2=450;
var cost3=cost2+totalPersons;
var discount=cost*=10;
var totalDiscount1=discount1/=100;
var totalCost2=cost1-totalDiscount1;
var totalCost3=totalCost2+totalPersons;

//Calculator for change
var change;
var change1=check-totalCost3;
var change2=check-cost3;
var change3=check-totalCost1;
var change4=check-cost1;



if (age>=19) {
    
    check=parseInt(prompt("How much are you willing to spent?"));
    if (check>450) {
        console.log("Your Travel plan is for New York.");
        
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
        
        change=(age=>35)?"The total cost for this trip is $"+totalCost3+"and your change is $"+change1+".":"The total cost for this trip is $"+Cost3+"and your change is $"+change2+".";
        console.log(change);
        
    } else if (250<=check&&check<=450) {
        console.log("Your Travel plan is set for Maimi");
        
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
        
        change=(age=>35)?"The total cost for this trip is $"+totalCost1+"and your change is $"+change3+".":"The total cost for this trip is $"+Cost1+"and your change is $"+change4+".";
        console.log(change);
        
    }else {
        console.log("Sorry you donot have sufficient funds to go on a trip.")
    }
    
} else if (age>=1) {
    console.log("You are not old enough to pass this point.")
} else {
      console.log("You did not enter your age.")
}

   

// console.log("Your final destination is Maimi. The cost for this trip is $250 and your change is $"+total1);
//console.log("You do not have enough fund for this trip!");
//parseInt(prompt("Your destination is New york!\nEnter your check amount!"));

    


//var age=parent(prompt("To Find a destination.\nHow much are you willing to spent","400"));
//var check;

//var total1= check-


