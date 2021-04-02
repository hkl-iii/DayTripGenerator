"use strict";

function grabRandomValueFromArray(collection){
    return collection[Math.floor(Math.random()*collection.length)];
}

let cities = ["tokyo", "hong kong", "riodejaneiro", "london"];
    console.log(grabRandomValueFromArray(cities));
let example = grabRandomValueFromArray(cities);
    //console.log(example);
    //console.log(example);
  
     

/*function foodSpots(restaurantsP){
    return restaurantsP[Math.floor(Math.random()*restaurantsP.length)];
}*/

let restaurantsP = ["bbq", "ramen", "burgers", "pizza", "sushi"];
console.log(grabRandomValueFromArray(restaurantsP));



// /*function transpoMode(ttypes){
//     return ttypes[Math.floor(Math.random()*ttypes.length)];
// }*/

let ttypes = ["car", "walk", "taxi", "bus"];
console.log(grabRandomValueFromArray(ttypes));



// /*function entSpots(entOps){
//     return entOps[Math.floor(Math.random()*ttypes.length)];
// }*/

let entOps = ["movies", "magic show", "art gallery", "tourist attractions"];
console.log(grabRandomValueFromArray(entOps));

//let question = prompt("Do you like? Type 'y' or 'n'");
let tripComplete = false

while (tripComplete == false){

let question = prompt("Do you like? Type 'y' or 'n'");
    if(question !== "y"){
    console.log(grabRandomValueFromArray(cities));
    console.log(grabRandomValueFromArray(restaurantsP));
    console.log(grabRandomValueFromArray(ttypes));
    console.log(grabRandomValueFromArray(entOps));
}
else{
    tripComplete = true;
    console.log("Trip Completed!")
}
}
