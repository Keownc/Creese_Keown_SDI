//alert("JavaScript works!");

/*
 *Keown Creese
 *SDI
 *01/17/15
 *Day 6
 */

// Is my steak done?

/*
 *120 and under is undersooked
 *120-124 - steak is rare
 *125-129- steak is medium rare
 *130-139 - steak is medium
 *140-149- steak is medium-well
 *150-165 - steak is well done
 *>165 burnt to a crisp
 */
/*
var steakTemp = 451;
var steakDone;

if (steakTemp < 120) {
    steakDone = " not done "
} else if (steakTemp<=124) {
    steakDone = "Rare steak"
} else if (steakTemp<=129) {
    steakDone = "medium-rare"
} else if (steakTemp<=139) {
    steakDone = "medium"
} else if (steakTemp<=149) {
    steakDone = "medium-well"
} else if (steakTemp<=165) {
    steakDone = "Well done"
} else {
    steakDone="burnt to a crisp"
}
console.log("The steak is "+steakDone+".")

//another example
//if (steakTemp < 120) {
//    console.log("The steak is not done yet.")
//} else if (steakTemp<=124) {
//    consol.log("Rare steak.")
//} else if (steakTemp<=129) {
//    console.log("medium-rare.")
//} else if (steakTemp<=139) {
//    console.log("medium")
//} else if (steakTemp<=149) {
//    console.log("medium-well")
//} else if (steakTemp<=165) {
//    console.log("Well done")
//} else {
//    console.log("burnt to a crisp")
//}


//get ourside temperture
var airTemp = parseInt(prompt("What's the outside temperture?","65"));

//create the variable for the water temperature
var waterTemp;

// conditional to see what to do
if (airTemp>=85) {
    console.log("Let's go to the beach!");
    waterTemp = parseInt(prompt("What's the temperture of the water?", "75"));
    if (waterTemp>=75) {
        console.log("Let's go in the water.");
    } else {
        console.log("Let's build a sandcastle.");
    }

} else {
    console.log("We're going to the movies.");
}

*/









//Round()
//Normal rounding.5 and up

var num1= 9.544;
console.log(num1);
num1=Math.round(num1);
console.log(num1)

//floor(x)
// Returns x, rounded down to the nearest intergar/ whole number
var num2=6.888;
console.log(num2);
num2=Math.floor(num2);
console.log(num2);

//ceil(x)
//Returns x rounded up to the next interger/whole number
var num3=4.111;
console.log(num3);
num3=Math.ceil(num3);
console.log(num3);

//random()
//Returns a number between 0 and 1
var num4=Math.round(Math.random()*100);
console.log(num4);

//Random number between two numbers
//Math.rando()*(max-min)+min
var num5=Math.round(Math.random()*(80-50)+50);
console.log(num5);


var arrOfItems=["Chips Ahoy", "Oreos","E.L. Fudge","Thin Mints"];

var randomCookie=Math.floor(Math.random()*(arrOfItems.length));

console.log("My current favorite is "+arrOfItems[randomCookie]);

console.log(Math.PI);
console.log(Math.SQRT2);






