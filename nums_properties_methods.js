// ****************************METHOD***************************

//  it is only for number 

let number  = new Number(100);
console.log(number);

// toString 

 let num = 400;
 console.log( num.toString());
 console.log(typeof num.toString());

 // toExponential()

    let numExpo = 400;
    console.log(numExpo.toExponential()); // 4e+2
    console.log(numExpo.toExponential(2)); // 4.00e+2
    console.log(numExpo.toExponential(3)); //  4.000e+2

    let numExpo1 = 412;
    console.log(numExpo1.toExponential());// 4.12e+2
    console.log(numExpo1.toExponential(2));// 4.12e+2
    console.log(numExpo1.toExponential(3));// 4.12e+2

    // tofixed()

    let numFixed = 456.254552;
    console.log( numFixed.toFixed(2)); //456.25
    
    // toPrecision()
    
    let numPre = 456.854552;
    console.log( numPre.toPrecision(2)); //4.6e+2 // (convert into exponential form)
    console.log( numPre.toPrecision(3)); //457
    console.log( numPre.toPrecision(4)); //456.9


    //toLocaleString() 

    let numLocal =  400000;
  
    console.log(numLocal.toLocaleString("en-US")); //400,00 (USA)
    console.log(numLocal.toLocaleString("en-IN")); //4,00,000(INDIA)
    console.log(numLocal.toLocaleString("de-DE")); // 400.000(Germany)

    
    let numLocal1 = new Date()
    console.log(numLocal1.toLocaleString()) //15/10/2023, 10:00:12 am (current with time )

    // Number.isInteger()

     let numIsInteger = 1000
     console.log(Number.isInteger(numIsInteger)); // true 
     let numIsInteger12 = -1000
     console.log(Number.isInteger(numIsInteger12)); // true 
     

     let numIsInteger1 = 1000.0
     console.log(Number.isInteger(numIsInteger1)); //true
     let numIsInteger11 = 1000.01
     console.log(Number.isInteger(numIsInteger11)); //false


     //Number.isSafeInteger()

     let numSafeInt = 1021021.0;
     console.log(Number.isSafeInteger(numSafeInt)) //true

     let numSafeInt1 = 102102165413442524;
     console.log(Number.isSafeInteger(numSafeInt1)) //false

     let numSafeInt11 = -110;
     console.log(Number.isSafeInteger(numSafeInt11)) //true
     let numSafeInt13 = "-110";
     console.log(Number.isSafeInteger(numSafeInt13)) //false