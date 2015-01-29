
 /*
Keown Creese
SDI Campus
1/15/2015
Logic Operators
 */

//alert("Testing to see if this is working")

 /*
 true && true = true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !(true) = false
 !(false) = true

  */

 // If the price of 305 is less than budget lets buy it
// and if our paycheck os over 500

 var budget =prompt("What is your budhet?");
 var dsPrice = prompt("What is the ds price?");
 var paycheck = prompt("How much is your paycheck?");

 if(dsPrice<budget && paycheck>500){
  console.log("Buy the 3DS!");

 } else{
  console.log("Do not buy the 3DS! Because you are broken!");

 }


 //let buy a smart tv if it is lees than OR we won the lottery

 var tvPrice = 540;
 var tvBudget = 500;
 var wonLottery = false;
 if(tvPrice<tvBudget || wonLottery){
  console.log("Let's go buy a tv!");

 }else{
  console.log("Stick with your small tv!")
 }











