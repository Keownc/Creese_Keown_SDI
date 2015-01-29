
 /*
Keown Creese
SDI Campus
1/15/2015
Ternary
 */

//alert("Testing to see if this is working")

 //If your gpa is greater than 2.0 you can graduate

 // (condition yo test) ? true code: false code;

 // normal if else statement
 var gpa=prompt("What is your gpa score?");
 while (isNaN(gpa)||gpa===""){
    gpa=prompt("please only use numbers and don't leave blank.\nWhat is your gpa sroce:");
 }

 if(gpa>2){
  console.log("Congrats! You can graduate");
 }else{
  console.log("Sorry your gpa is too low!");

 }

 //ternary
 (gpa>2) ? console.log("Congrats! You can graduate"):console.log("Sorry your gpa is too low!");


 // Decide what book a kid will read
 var age=prompt("What is your age");
  while (isNaN(age)||age===""){
    age=prompt("please only use numbers and don't leave blank.\nWhat is your age:");
 }
 var book;

 // if the child is under 10 - they read Green Eggs and Ham
// Otherwise they can read the Time Machine
// If the kid is older then 15 then the Twilight

 book=(age<10)?"Green Eggs and Ham":"The Time Machine";

 var book2 = (age<10)?"Green Eggs and Ham":(age<15)?"The Time Machine":"The Twilight";
 console.log("You should read"+book);

 console.log(book2);