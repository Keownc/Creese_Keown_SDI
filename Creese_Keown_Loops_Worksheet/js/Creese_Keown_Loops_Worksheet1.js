/*
 *Keown Creese
 *SDI
 *1/20/15
 *Loops worksheet
 *Do while
 */


//alert("testing to see if this is connected")

//class







do {
    question=prompt("Is july 4th is independence day?");

    console.log("You answered "+question);
    
}while (question!="true"&&question!="false"){
        if (question==="true") {
            console.log("Your answer is correct.");
        }else{
            console.log("Your answer is wrong.")
        }
        
}