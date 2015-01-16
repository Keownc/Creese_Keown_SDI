
 /*
Keown Creese
SDI Campus
1/13/2015
Conditional Worksheet
 */

//alert("Testing to see if this is working")


 //
 var travel=["Mpg","Percent","Gas","Destination"];
var distance=parseInt("What is ");
var mpg=parseInt("What is your"+travel[0]+"?");
 var percent=parseInt("What is your current"+travel[1]+"?");
 var gallons=parseInt("How much"+travel[2]+"can you car take!");

 var transportation = mpg/gallons;
 var gasStation =200;
 var tank= percent/100;

 if(tank*transportation>gasStation){
console.log("Yes, you can make it without stopping for gas!");
 }else{
  console.log("You only have"+ +"gallons of gas in your tank, better get gas now while you can!");
 }