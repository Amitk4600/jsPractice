let marks = 80;
if(marks <= 80){
    console.log("intelligent boy ");
}

if(marks < 40){
console.log("poor");
}
else{
    console.log("excellent");
}

// real world  example 
// registration 

let firstName = true; // if assign false then else execute because all condition false
let lastName = true;
let password = true;
let comfirmPassword = true;
let email = true;

// nasted if 

if(firstName){
    console.log("your first Name");
    if(lastName){
        console.log("your last Name");
        if(password){
            console.log("your password");
            if(comfirmPassword){
                console.log("your password comfirmed");
                if(email){
                    console.log("your email");
                }
            }

        }
    }
}else{
    console.log("please enter correct details ");
}


// with LOGICAL and (&&)

if(firstName && lastName && password && comfirmPassword && email){
    console.log("your registration success");
} else{
    console.log("try again");
}


// login
// with LOGICAL OR 
let emailid =  true;
let github = false;
let google = true;

if(emailid || github || google){
    console.log("login success");
}

// with ternary operator (? :)

let num = 20;

num < 20 ? console.log("it is less then ") : console.log("greater then ");

// SWITCH and CASE

let dayOfWeek  = 5;

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
   

    default:
        console.log("Holiday");
        break;
}