/*
 *Keown Creese
 *SDI
 *1/22/15
 *Validating Prompts take2
 */

//alert("Testing")


//User leaves it blank
//Returns an empty text string""
var movie=prompt("What is your favorite movies?");

while(movie===""){
    //Then the user left the prompt blank
    //Repromptthe user
    movie=prompt("PLease dont leave this blank.\nWhat is your farorite movies?");
    
}

// Test to see if the user typed in a number or not

//isNAN() - is Not a number
//Text strings returns true
//numbers returns false

var ticketPRice=prompt("How much is a movie ticket");

while(isNaN(ticketPRice)){
    
    // User did not type in a number
    // reprompt for a number
    ticketPRice=prompt("Please in a number.\nWhat is the cost of a movie ticket?");
    
}

// use both Validation in the same while loop
var age=prompt("To get into R rated movies we must know your age.\nHow old are you");

//Validate that prompt is not blank and is a number

while(isNaN(age)||age===""){
    //the user tyoed in a text string or left it blank
    
    console.log("Inside of while loop");
    
    //Test to see what went wrong
    if (isNaN(age)) {
        age=prompt("Please only use numbers!\nHow old are you?")
    }else{
        ge=prompt("Please do not leave blank.\nWhat is your age?");
    }
    
    
}

//Validate something specific
var movieGenre=prompt("Do you want to see any action movie or comedy?");

//Validate that the user typed in one of the 2 genres
movieGenre=movieGenre.toLowerCase();

while(movieGenre!="comdey"&&movieGenre!="action"){
    movieGenre=prompt("Only type in comdey or action.\n What genre do you want to watch?");
    
}



















