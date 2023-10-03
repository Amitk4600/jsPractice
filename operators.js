// Arithmetic Operators:
/* 
        + (Addition)
        - (Subtraction)
        * (Multiplication)
        / (Division)
        % (Modulus, remainder)
        ** (Exponentiation, ES6)

*/

let a = 12;
let b = 6
console.log("result is :"+ (a + b));
console.log("result is :"+ (a - b));
console.log("result is :"+ (a * b));
console.log("result is :"+ (a / b));
console.log("result is :"+ (a % b));
console.log("result is :"+ (a ** b));

// POst -Increment opretor 

let incre = 4;
let incre1 = incre++
console.log("increment value ",incre);

//pre-increment 
let preIncre = 4;
let preIncre1 = ++preIncre
console.log("pre - increment value ",preIncre);


// Post-Decrement oprator 

let decre = 4;
let decre1 = decre--
console.log("decrement value ",decre);

// Pre-Decrement oprator 

let preDecre = 4;
let preDecre1 = --preDecre
console.log("pre -decrement value ",preDecre);

// Comparison Operators:
/* 
        == (Equality)
        === (Strict equality)
        != (Inequality)
        !== (Strict inequality)
        > (Greater than)
        < (Less than)
        >= (Greater than or equal to)
        <= (Less than or equal to)
*/

//  > (Greater than)
let num1 = 12;
let num2  = 5;
let result  = num1 > num2;
console.log("greater " + result);

// < (Less than)
let num3 = 12;
let num4  = 5;
let result1  = num3 < num4;
console.log("less than " + result);

// == (Equality)

let xyz = 1;
let abc= "1";
 let abc1= 1;

let ans  = xyz == abc == abc1;
console.log("it is equal",ans); // true

// === (Strict equality)


let xyz1 = 1;
let abc2= "1";


let ans1  = xyz1 === abc2;
console.log("it is Strict equal",ans1); //false

// != (Inequality)
let x = 1;
let y= "1";
let z= x != y;
console.log(z);  // false

// !== (Strict inequality)

let x1 = 1;
let y1= "1";
let z1= x1 !== y1;
console.log(z1); // true


// Logical Operators 

/* 
        && (Logical AND)
        || (Logical OR)
        ! (Logical NOT)
        
        */
       
       
       
       //    && (Logical AND)
       
       let number  = 4;
       let number1  = 6;
       let resultOfLogic = (number < 6) && (number1 < 7);

       console.log("Logical AND result :-",resultOfLogic); // true
       
       //    || (Logical OR)

let resultOfLogicalOr = (number < 6) || (number1 > 7);
    console.log("Logical OR result :-",resultOfLogicalOr); // true 

    //    ! (Logical NOT)

  let age = 21;
 let isUnderAge = !(age >=18);
 console.log("you are eligible ", isUnderAge);
