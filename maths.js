console.log(Math);

// 
let ab = -45;
console.log("absolute ",Math.abs(ab));

let round = 4.5;
console.log("round",Math.round(round));
console.log("upper value ",Math.ceil(round));
console.log("upper lower",Math.floor(round));


console.log("minimum value", Math.min(2,5,7,6,1,));
console.log("maximum value", Math.max(2,5,7,6,1,));


console.log("random ",Math.random());
console.log("random ",Math.random()* 10);
console.log("random ",(Math.random()* 10)+1);

let min = 10;
let max = 30;

console.log(Math.floor(Math.random( ) * (max - min +1 )) +min);