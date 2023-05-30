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

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBUzz");
    }
    else if(i % 3 ==0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}