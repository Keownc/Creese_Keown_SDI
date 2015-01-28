/*
 *Keown Creese
 *SDI
 *Counting Beer
 */

//alert("testing")

//99 bottles of beer on the wall

for(var i=99; i>0; i--){
    
    
    // add a check for the last round of beers
    if (i===1) {
      console.log( i+" bottle of beer on the wall. "+i+" Bottle of beer. You take one down and pass it around, no more bottles of beer on the wall.\nThe end");
    }else{
        console.log( i+" bottles of beer on the wall. "+i+" Bottles of beer. You take one down and pass it around, "+(i-1)+" bottles of beer on the wall");
    }
}