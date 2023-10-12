// String Conversion
let value  = true;
console.log(typeof value); // boolean 

let str = String(value);
// console.log(typeof str); // string

// Number conversion

let numStr = "123"

let num  = Number(numStr);
// console.log(typeof num); // number 

// Boolean conversion

let bool = "true";
// console.log(typeof bool);
let isBoolen = Boolean(bool); 
// console.log(typeof isBoolen); // boolean

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean("1"));
// console.log(Boolean(""));



// opersations




let str2 = " hello"
let str3 = " Amit"

let st = str2 + str3;
// console.log(st);

// console.log("1" + 2 ); //12
// console.log(1 + "2" );//12
// console.log("1" + 2 + 3 ); //123 here string first then remaining treat as string 
// console.log(1 + 2 + "2" ); // 32  here conversion first then string 


console.log(+true); // 1
console.log(+"");  // 0