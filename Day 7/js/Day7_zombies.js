/*
 *Keown Creese
 *SDI
 *1/20/15
 *Zombies Attack
 */


//alert("Testing to see if this is connected")

//Zombie Attack
//There is a zombie at Full sail
//It can bite 4 people a day and turn them into zombie
//The c\CDC wants to how many zombie there will in 8 days

var numZombies=1; //how many zombies do we have
var numBites=4; //Numbers bites per zombies per day
var days=8; //Number of days
var daysTake=0

/*
for(var i=1; i<=days; i++){
    
    //How many new zombies get made and when do they go bite people
    //They get bitten and the next day they can bite
    var newZombies=numBites*numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies+=newZombies;
    //report at the end of the day
    console.log("There are "+numZombies+" zombies at the end of the day #"+i+"!");
    
}
*/




//How many days will take to reach a millon zombies?

while(numZombies<=1000000){
    //new zombies
    var newZombies=numZombies*numBites;
    
    //how many zombies we have
    nunmZombies+=newZombies;
    
    //add 1 to the total number of day it takes
    daysTake++;
    
    
    
}

console.log("It takes"+daysTake+"to reach 1 million zombies.")










