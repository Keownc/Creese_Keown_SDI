/*
 *Keown Creese
 *SDI
 *1/20/15
 *Loops worksheet
 *For Loop
 */


//alert("testing to see if this is connected")

var persons=prompt("How many person is in the class?");

// loop to test for number of persons
while (isNaN(persons)||persons==="") {
        
    persons=prompt("Please enter the number of persons in the class?");
}

//Prompt for time it take
var cake=prompt("How long do it takes for a person to finish an assignment?");
        
 while (isNaN(assignments)||assignments==="") {
    var time=prompt("What is the total amount of time set for the assignment?");
 }    
 
 //
 var time=prompt("What is the total amount of time set for the assignment?");
 
 while(isNaN(time)||time===""){
    
    time=prompt("Please enter the total amount of time set for this assignment?");
 }
 
 //
for (i=persons; i<=time; i++) {
    
    
      persons-=assignments
      time-=assignments
      
      console.log("The total number of persons remaindering in the class at the class at the end of "+time+"is"+persons);
}


        
        
/*
    
    if (isNaN(persons)||persons==="") {
        
    persons=prompt("Please enter the number of persons in the class?");
   
    }else{
        var assignments=prompt("How long do it takes for a person to finish an assignment?");

    }if (isNaN(assignments)||assignments==="") {
        
        assignments=prompt("Please enter how long it takes a person to complete an assignment?");
    
    }else{
        var time=prompt("What is the total amount of time set for the assignment?");

    }if (isNaN(time)||time==="") {
        time=prompt("Please enter the total amount of time set for this assignment?");
    }
*/