// VARIABLE =>

//var

var b = 10;
{
    var b = 2;
}

console.log("value of b is :" + b);  // 2 

//let

let c =15 ;
{
    let c = 20
    console.log(c); // 20
}
console.log(c); //15

let abcd = "hey"
abcd = "changed value "
console.log(abcd);

//const
const d = 20
 
//  d  = 12; // its give error (if uncomment it )
console.log(d); //  error because value of d constant cannot be changed (d = 12 try to changed  value  )


// DATA TYPE =>

const num = 3; // number 
console.log(typeof num);

const str = "hii" // string 
console.log(typeof str);

const isBoolen = true; // boolean 
console.log(typeof isBoolen);

const arr = [1,2,3] 
console.log( arr);
console.log(typeof arr); //  object; because array is also a object 

const obj = {} // object 
console.log(typeof obj);

let empty;
console.log(empty);  // undefined

const one = null;
console.log(one); // null 

const str1 = " hello ";
const a =2;
console.log( typeof str1 - a); // NaN 

const value  = 451237512152121214n;
console.log(typeof value);  // bigint

const abc = Symbol("hello dear")
console.log(typeof abc);  // symbol