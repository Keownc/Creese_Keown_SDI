/*
 *Keown Creese
 *SDI
 *1/17/15
 *Conditional Assignment
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
var number;

//calculator for the trip to Miami
var costC=200;
var costD; 
var totalCost;
var discount;
//Calculator for the trip to New York
var costA=400;
var costB;
var totalCost1;
var discount1;


//Calculator for change
var change;
var change1; 
var change2;
var change3; 
var change4; 



if (age>=19) {
    
    check=parseInt(prompt("How much are you willing to spent?"));
    if (check>450) {
        console.log("Your Travel plan is for New York.");
        
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
        
        number= persons *=15;
        costB= costA + number;
        costB2=costB
        discount1=costB *=10;
        discount1/=100;
        totalCost1= costA - discount1;
        
        change1= check - totalCost1;
        change2= check - costB2;
        change1.toFixed(2);
        change2.toFixed(2);
        
        change=(age>=35)?"The total cost for this trip is $"+totalCost1+" and your change is $"+change1+".":"The total cost for this trip is $"+costB2+" and your change is $"+change2+".";
        console.log(change);
        
    } else if (250<=check&&check<=450) {
        console.log("Your Travel plan is set for Miami.");
        
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
        
        number= persons *=15; 
        costD= costC + number;
        costD2=costD;
        discount=costD *=10;
        discount/=100;
        totalCost= costC - discount;
        
        change3= check - totalCost;
        change4= check - costD2;
        change3.toFixed(2);
        change4.toFixed(2);
        
        change=(age>=35)?"The total cost for this trip is $"+totalCost+" and your change is $"+change3+".":"The total cost for this trip is $"+costD2+" and your change is $"+change4+".";
        console.log(change);
        
    }else {
        console.log("Sorry you do not have sufficient funds to go on a trip.")
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


