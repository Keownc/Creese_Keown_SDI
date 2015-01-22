/*
 *Keown Creese
 *SDI
 *1/20/15
 *Loops worksheet
 *Do while
 */


//alert("testing to see if this is connected")

//class



var question=prompt("Is july 4th is independence day?");



do {
    console.log("The answers is "+question);
    
    question=prompt("Is july 4th is independence day?");

}while (question!="true"&&question!="false"){
        if (question==="true") {
            console.log("Your answer is correct.");
        }else{
            console.log("Your answer is wrong.")
        }
        
}