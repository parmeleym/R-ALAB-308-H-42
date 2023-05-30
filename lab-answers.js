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

// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// let turtleUpper = [];
// // const turtleUpper = turtles[0].toUpperCase();
// for (i = 0; i < 4; i++) {
//     turtleUpper.push(turtles[i].toUpperCase());
// }
// console.log(turtleUpper);

////////////////////////////
// Methods, Revisited
////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // Index of Titanic
// for(let i = 0; i <= favMovies.length; i++){
//     if(favMovies[i] === "Titanic"){
//         console.log("The element of Titanic is: " + i);
//     }
// }

// // Sorting
// favMovies.sort();
// console.log(favMovies);

// // Pop
// console.log(favMovies.pop());

// // Push
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// // Reverse
// console.log(favMovies.reverse());

// // Shift
// console.log(favMovies.shift());

// // Unshift
// console.log(favMovies.unshift());
// // Returns value of 18.

// // Splice && Slice Value Store
// let splicedElement = '';
// for(let i = 0; i <= favMovies.length; i++){
//     if(favMovies[i] === 'Django Unchained'){
//         splicedElement = favMovies.splice(i, 1, 'Avatar');
//     }
// }
// console.log(favMovies);
// console.log(splicedElement);

// // Final Results
// console.log("");
// console.log("Final Results:");
// console.log(favMovies);

// // Index of Fast and Furious
// console.log("");
// for(let i = 0; i <= favMovies.length; i++){
//     if(favMovies[i] === 'Fast and Furious'){
//         console.log("Fast and Furious Index: " + i);
//     }
// }

////////////////////////////
// Excited Kitten
////////////////////////////

for(let i = 0; i < 20; i++){
    let random =  Math.floor(Math.random() * 3);
    if(i % 2){
        if(random === 0){
            console.log("...human... why you taking pictures of me...?");
        }else if(random === 1){
            console.log("...the catnip made me do it...");
        }else if(random === 2){
            console.log("...why does the red dot always get away...?");
        }
    }else{
        console.log("Love me, pet me! HSSSSSS!");
    }
}