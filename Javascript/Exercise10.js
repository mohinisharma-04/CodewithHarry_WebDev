/*  Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

without being dependent on arrays, we will only use strings and functions to generate the business name.

*/

//SOLUTION EXAMPLE 1
//Adjectives
const adjNames = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};

//Shop Names
const shopNames = {
    4: "Engine",
    5: "Foods",
    6: "Garments"
};

//Trademark
const trademarkNames = {
    7: "Bros",
    8: "Limited",
    9: "Hub"
};

//Randomizer Object
const randomness = {
    randomAdj: Math.random() * 15,
    randomShop: Math.random() * 15,
    randomTrademark: Math.random() * 15
};

//This function randomizes Adjectives based on the relevent odds
function randomAdj(){
    if (randomness.randomAdj >= 0 && randomness.randomAdj <= 5) {
        return adjNames[1];
    } else if (randomness.randomAdj > 5 && randomness.randomAdj <= 10) {
        return adjNames[2];
    } else {
        return adjNames[3];
    }
}

//This function randomizes Shop Names based on the relevent odds
function randomShop(){
    if (randomness.randomShop >= 0 && randomness.randomShop <= 5) {
        return shopNames[4];
    } else if (randomness.randomShop > 5 && randomness.randomShop <= 10) {
        return shopNames[5];
    } else {
        return shopNames[6];
    }
}

//This function randomizes Trademark Names based on the relevent odds
function randomTrademark(){
    if (randomness.randomTrademark >= 0 && randomness.randomTrademark <= 5) {
        return trademarkNames[7];
    } else if (randomness.randomTrademark > 5 && randomness.randomTrademark <= 10) {
        return trademarkNames[8];
    } else {
        return trademarkNames[9];
    }
}

//inside the template literal, each of the above function is caleed whixh peints as a result in the console
// alert(`Generated Business Name: ${randomAdj()} ${randomShop()} ${randomTrademark()}`); //to run in browser
console.log(`Generated Business Name: ${randomAdj()} ${randomShop()} ${randomTrademark()}`); //to run in node terminal