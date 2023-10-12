//*************************  Primitive **************************** 
// Stack memory use in premitive data type  

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
// heap memory in non- premitive 
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

// console.log(typeof bigNum);
// console.log(typeof id);


// memory

// stack 

let nameValue =  " amit";
let otherName  =  nameValue;

otherName = " kumar "

console.log(nameValue);
console.log(otherName);


// heap 

let user = {
    name : "amit",
    id : "abc@gmail.com"
}

let user1 = user;

user1.id = "amit@yahoo.com";

console.log(user);