/*
Micahel Parmeley
05/30/2023
R-ALAB 308H.4.2
*/

////////////////////////////
// Easy Going
////////////////////////////

// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

////////////////////////////
// Fizz Buzz
////////////////////////////

// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBUzz");
//     }
//     else if(i % 3 ==0){
//         console.log("Fizz");
//     }
//     else if(i % 5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

////////////////////////////
// Wild Wild Life
////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ach-To"];
// const dart = ["D'Art", "Demogorgon Dog", 2, "Upside Down"];

// let newAge = 0;

// for(let i = 0; i < plantee.length; i++){
//     if(typeof plantee[i] == 'number'){
//         newAge = plantee[i];
//         newAge += 1;
//         plantee[i] = newAge;
//     }
// }
// console.log(plantee);

// let newHomeTown = "Gotham City";

// for(let i = 0; i < wolfy.length; i++){
//     if(i == 3){
//         wolfy[i] = newHomeTown;
//     }
// }
// console.log(wolfy);

// let secondTown = "Hawkins";

// dart.push(secondTown);
// console.log(dart);

// let replaceName = "Gameboy";

// for(let i = 0; i < wolfy.length; i++){
//     if(wolfy[i] == "Wolfy"){
//         wolfy[i] = replaceName;
//     }
// }
// console.log(wolfy);

////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
let turtleUpper = [];
// const turtleUpper = turtles[0].toUpperCase();
for (i = 0; i < 4; i++) {
    turtleUpper.push(turtles[i].toUpperCase());
}
console.log(turtleUpper);