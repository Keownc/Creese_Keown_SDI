
 /*
Keown Creese
SDI Campus
1/15/2015
Conditionals
 */

//alert("Testing to see if this is working")


 //Basic Conditional Statement

 // Create a boolean variable to test
 var oldEnough = true;

 //If the child is old enough, then print to the console, You can ride.

 /*
 Basic Structure of if statement

 if(condition to test){
 Code to run if the condition is true
 }else{
 Code to run if the condition is false
 }
  */

 if(oldEnough){
  //code inside of {} will run if the test is true
  //This code will be skipped if the test is false
  console.log("you can ride the coaster");
 }

 console.log("What comes after the if statement.");

 //Relational Expressions

 // If the Kid is over 48" tall, then he can ride.

 var kidHeight=47;

 //Created variable for minimum height
 var mimHeight = 48;

 //Create a variable for a shoe lift
 var shoeLift = 2;
 // is the child tall enough with the shoe lift?



  if(kidHeight + shoeLift > mimHeight){
   console.log("You are tall enough to ride.");
  } else{
   // THIS CODE WILL RUN THE TEST IS FALSE
   console.log("Sorry you are too short.")
  }

//What Ride can the kid go on based on his height
 //if the kid 48 + then Space Mountain
 //if 40+ 40+ then Buzz Lightyear Ride
 // Anything short - Winnie the Pooh

 var childHeight =prompt("What is your height?");
 
 while (isNaN(childHeight)||childHeight==="") {
   childHeight=prompt("Please don't leave blank and only use numbers.\nWhat is your height:")
 }

 if(childHeight>=48) {

  console.log("You can ride Space Mountain, Buzz Lightyear and Winnie Pooh");

 }else if(childHeight>=40) {

  console.log("You can ride Buzz Lightyear and Winnie the Pooh");

 }else{
    console.log("You can only ride Winnie Pooh");
   }


 /*
 If, else if, else statement

 if(condition to test){

 code to run if condition 1 is true

 } else if(condition2 to test){

 Condition2 will only be tested if condition1 if false

 code to run if condition2 is true

 }else {

 code to run if condition1 and condition2 are false
 }
  */

