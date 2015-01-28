/*
 *Keown Creese
 *SDI
 *1/24/15
 *Random Numbers Generator
 */

//alert("Testing")

//Created variables for min and max values

var min=prompt("Pleas enter a min value");
while (isNaN(min)||min===""||Number(min)<=Number(max)){
    if (isNaN(min)) {
        min=prompt("Please only use numbers.\nWhat is min value:");
    }else if (mmin==="") {
    min=prompt("Please don't leave blank.\nWhat is min value:");  
    }else{
    min=prompt("Min value must less than max value.\nWhat is min value:");
    }
}

var max=prompt("Please enter a max value");
//validate our max prompt
while (isNaN(max)||max===""||Number(min)>=Number(max)){
    
    //Re- prompt the user for correct information
    if (isNaN(max)) {
        max=prompt("Please only use numbers.\nWhat is the max value")
        }else if (max==="") {
            max=prompt("Please do leave blank.\nWhat is the max value:")
        }else{
            max=prompt("Max value must be greater than min value.\nWhat is the max value:")
        }
    
}




//Create function
function randomizer(mn, mx) {
    
    //Generate a random number
    var randomNum=Math.round(Math.random() *(mx-mn)+Number(mn));
    
    //Return that random number to our main code
    return randomNum;

    
}

//Function call But create a variable to catch the return value

var ranNum=randomizer(min,max);

console.log("Your random number between "+min+" and "+max+" is "+ranNum);

//15 random numbers between our min and max
//Create for loop
for(var i=0;i<15; i++){
    console.log(randomizer(min,max));
    
}