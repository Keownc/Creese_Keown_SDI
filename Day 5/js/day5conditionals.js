
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

 var kidHeight=30;

 //Created variable for minimum height
 var mimHeight = 48;

  if(kidHeight > mimHeight){
   console.log("You are tall enough to ride.");
  } else{
   // THIS CODE WILL RUN THE TEST IS FALSE
   console.log("Sorry you are too short.")
  }

