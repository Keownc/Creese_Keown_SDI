
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
 false || false + false

 !(true) = false
 !(false) = true

  */

 // If the price of 305 is less than budget lets buy it
// and if our paycheck os over 500

 var budget = 300;
 var dsPrice = 169;
 var paycheck = 600;

 if(dsPrice<budget && paycheck>500){
  console.log("Buy the 3DS!");

 } else{
  console.log("Do not buy the 3DS! Because you are broken!");

 }