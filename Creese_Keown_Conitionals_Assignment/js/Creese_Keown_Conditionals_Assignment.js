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

//To calculate the number of persons going on this trip.
var number;


//variable to calculator for the trip to New York
var costA=400;
var costB;
var totalCost1;
var discount1;

//calculator for the trip to Miami
var costC=200;
var costD; 
var totalCost;
var discount;


//variable to calculator for change
var change;
var change1; 
var change2;
var change3; 
var change4; 


// An if, else if, else statement for the age limit to travel
if (age>=19) {

    // A prompt if you pass the age test
    check=parseInt(prompt("How much are you willing to spent?"));
    // An if, else if, else statement for the amount of funds required to go on this trip
    if (check>450) {
        //Another prompt if your check is more than $450
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
        //Calculator for change set to New york
        number= persons *=15;
        costB= costA + number;
        costB2=costB;
        discount1=costB *=10;
        discount1/=100;
        totalCost1= costB2 - discount1;
        
        change1= check - totalCost1;
        change2= check - costB2;
        change1.toFixed(2);
        change2.toFixed(2);
        //A ternary to print the change.
        change=(age>=35&&persons>=1)?"The total cost for this trip is $"+totalCost1+" and your change is set for $"+change1+".":(persons>=1)?"The total cost for this trip is $"+costB2+" and your change is set for $"+change2+".":"You did not enter the number of person going on this trip.\nPlease try again.";;
        console.log("Your Travel plan is for New York.\n"+change);
        
    } else if (250<=check&&check<=450) {
        //Another prompt if your check is more than $250 but less than or equal to $450
        persons=parseInt(prompt("Please enter the amount of people traveling on this trip."));
       //Calculator for change set to Miami
        number1= persons *=15; 
        costD= costC + number1;
        costD2=costD;
        discount=costD *=10;
        discount/=100;
        totalCost= costD2 - discount;
        
        change3= check - totalCost;
        change4= check - costD2;
        change3.toFixed(2);
        change4.toFixed(2);
        //A ternary to print the change.
        change=(age>=35&&persons>=1)?"The total cost for this trip is $"+totalCost+" and your change is set for $"+change3+".":(persons>=1)?"The total cost for this trip is $"+costD2+" and your change is set for $"+change4+".":"You did not enter the number of person going on this trip.\nPlease try again.";
        console.log("Your Travel plan is set for Miami.\n"+change);

    }else {
        console.log("Sorry you do not have sufficient funds to go on a trip.")
    }
    
} else if (age>=1) {
    console.log("You are not old enough to pass this point.")
} else {
      console.log("You did not enter your age.")
}


//I entered 23 and was prompted to enter check where i entered 400 and was prompted to persons entered 3 and got a result of $245 total cost and change $155.
//I entered 23 and was prompted to enter check where i entered 900 and was prompted to persons entered 2 and got a result of $430 total cost and change $470.
//I entered 37 and was prompted to enter check where i entered 320 and was prompted to persons entered 2 and got a result of $207 total cost and change $113.
//I entered 36 and was prompted to enter check where i entered 780 and was prompted to persons entered 4 and got a result of $414 total cost and change $366.
//I entered 46 and was prompted to enter check where i entered 500 and was prompted to persons entered 6 and got a result of $441 total cost and change $56.

//I entered 36 and was prompted to enter check where i entered 600 and was prompted to persons entered nothing and receive a note of you did not enter number of persons.
//I entered 36 and was prompted to enter check where i entered 450 and was prompted to persons entered nothing and receive a note of you did not enter number of persons.
//I entered 23 and was prompted to enter check where i entered 300 and was prompted to persons entered nothing and receive a note of you did not enter number of persons.
//I entered 20 for age, nothing for check, received a note you do not have sufficient funds.

//I entered 18 and received a note you are not old enough to pass this point.
//I entered nothing for age and received a note you did nit enter age.