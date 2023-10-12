//*************************  Primitive ****************************

/* **************************************************************** */

// string => call by value 

const str = "call by value "

// number

const score  = 100
const scoreValue = 100.3

// boolean

const isLogedIn = false;

// null 
const nullNum = null;

//undefined

let value;
// symbol => it is use for unique

const id = Symbol('1233')
const otherId = Symbol('1233')

// console.log(id === otherId);

// bigint

const bigNum = 435313445522242n
// 


// ****************************Reference (NOn -premitive)******************************

// array 

 const arr = ["heros", "naagraj"];

// objects


 let obj= {
    name: "amit",
    age : 29
}

// functions

const myfunction = function(){
console.log("hello world");
}

myfunction();

// find data type 

console.log(typeof bigNum);
console.log(typeof id);