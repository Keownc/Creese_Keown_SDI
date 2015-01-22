/*
 *Keown Creese
 *SDI
 *1/20/15
 *Loops worksheet
 *Do while
 */


//alert("testing to see if this is connected")

//class



//var persons=prompt(Enter number of persons in the class room:)


 var takeoff=prompt("Count down for a rocket to lanuch! ")
 
 var count=0
 
 while (isNaN(takeoff)||takeoff==="") {
    
    takeoff=prompt("Please enter a Number")
    
 }if (count===0) {
    console.log("Lift off")
    
 }else if (count<=10) {
    takeoff=prompt("Please enter the next value")
    console.log("Take off in "+takeoff)
   count++
 }
    
   

