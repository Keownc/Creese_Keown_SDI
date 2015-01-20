/*
 *Keown Creese
 *SDI
 *Day 7
 *Whileloop
 *1/20/15
 */

//alert("Testing to see if this is running!")

//Basic while loop
// The while loop, loops through a block code as long as a condition is true

/*
 *var i=0
 *while(condition ){
    
    code that runs while condition is true
    incremental change to the counting variable
    Or infitie loop!!!
    
 }
 */

var counter =0; //intialiaing counter

while(counter<20){
// code that will run as long as counter <20
console.log(counter+" Somethings just never end");

//change for the counter variable
counter++;

}


// Do while Loop
//The code will run AT LEAST once before checking thr conditioon.

var i=0;

do{
    //This code will run before the condition is checked.
    //It will also run as long as the condition is true.
    console.log("The number is "+i);
    
    i++;
    
}while (i<10); 




















