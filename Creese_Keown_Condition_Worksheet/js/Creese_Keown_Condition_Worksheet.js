
 /*
Keown Creese
SDI Campus
1/13/2015
Conditional Worksheet
 */

//alert("Testing to see if this is working")


 //Expressions with Conditionals

 var mpg=parseInt(prompt("What is your mpg?"));
 var percent=parseInt(prompt("What is your current percent of gas"));
 var gallons=parseInt(prompt("How much gallon can you car take!"));

  var destination=200;

 //mpg= distance/gallons

 var gas = gallons*(percent/100);
 var distance= mpg*gas;

 if(distance>destination){
  console.log("Yes, you can make it without stopping for gas!");
 }else{
  console.log("You only have "+gas+"gallons of gas in your tank, better get gas now while you can!");
 }

