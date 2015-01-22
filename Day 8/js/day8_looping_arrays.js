/*
 *Keown Creese
 *SDI
 *1/22/15
 *Looping arrays
 */

//alert("Testing")


//Basic structure of for the loop obe array

//for(var i=0; i<array.length; i++){}

//created an array of scooby Doo Characters
var names=["Scooby", "Shaggy", "Velma", "Fred"];

//Loop through the whole array and tell each one that they solved a case.

for(var i=0; i<names.length; i++){
    
    console.log(i);
    console.log(names[i]);
    console.log("You solved the case "+names[i]);
}

// created an array of bills and add them up
var bills=[50,10,5,20,10];

//created a variable to hold the total
var totalbills=0;

for (var j=0; j<bills.length; j++) {
    
    // ADD each individual bill to the total
    //totalbills=totalbills+bills[j];
    
    //Only care about bills that are equal to or great then $20
    if (bills[j]>=20) {
        totalbills+=bills[j]
        
        
    }
    
    
    
    
}

console.log("The total of the bills is $"+totalbills)
