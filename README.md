# VARIABLE 
1. var => it is function-scoped . variable declared with "var" , which means they are accessible thoughtout the entire function in which they are declared . if declared outside of a function , they become global variables.
2. let => block-scoped
3. const => block-scoped

# note :-
1. "let" and "const" are block-scoped . variable declared with "let " and "const", it means they are accessible within the block (in curly braces  "{}") in which they are defined. This makes "let " and "const " more predictable and less error-prone than "var".

2. "var " and "let " can be re assigned :- change  the value of variable declared with "var " and "let " at any time after it is declared .

3. "const" declare variables with fixed , unchangeable value. Once assigned, the value of a "const " variable cannot be reassigned.

# DATA TYPE 
=> 8 data type in js.
1. number => float , integer 
2. string => represents textual data. " " and '  ' both are same in js 
3. boolean => true and false
4. object =>  key-value pairs of collection of data, array also a object .
5. undefined => a variable have no value;
6. null => special keyword denoting a null value
7. Symbol =>  it is immutable (can't changed ) and are unique .
8. bigint => an integer with arbitrary precision.

# Note :-
   1.  Primitive data types:- String, bollean, undefined,number,null
   2.  non-primitive data types:- object,array.

   # Naming conventions:-
    => variables names should begin with either a letter or an underscore( _ ) or dollar sign( $ ).
    1. let name = "amit";
    2. let Name = "amit";
    3. let _name = "amit";
    4. let $name = "amit";

    . variables names should not begin with number or special characters except the underscore and dollar  sign.

    . keywords are reserved words that have a specific meaning and cannot be used as variables.

    . keywords like if, else for should not be used as  variable names.

    . Variables names are case-sensitive. That means name and Name are different variable names.

    . To ensure consistency in naming variables adopt one of the following naming conventions in naming variables.

# for example :-
      let myName =  "amit"  => camel case.
      let MyName = "amit" => pascal case.
      let my_name = "amit" => snake case.
      let 
    
# OPERATORS:-

1. Arithmetic Operators:-

    a.   + (Addition) => add on two operands.

    b.  - (Subtraction) => subtraction on two operands.

    c.   * (Multiplication) => multiply  on two operands.
    
    d.   / (Division) => division on two operands (divide the numerator by the denominator).
    
    e.   % (Modulus, remainder) =>  it gives a remainder of an integer division. 
    
    f.   ** (Exponentiation) => give the power of the first operator raised to the second operator.
    
    #   for example :- 
    
         Exponentiation 
         
                       let a = 3;
                       let b = 2;
                       console.log (3 ** 2) // 9 (3 raised to the power of 2).

2. Comparison Operators:

   a.     == (Equality)

   b.     === (Strict equality)

   c.     != (Inequality)

   d.     !== (Strict inequality)

   e.     > (Greater than)

   f.     < (Less than)

   g.     >= (Greater than or equal to)

   h.     <= (Less than or equal to)


3. Logical Operators:

      a.      && (Logical AND)

      b.      || (Logical OR)

      c.      ! (Logical NOT)

4. Assignment Operators:

        a.     = (Assignment)

        b.    += (Addition assignment)

        c.    -= (Subtraction assignment)

        e.    *= (Multiplication assignment)

        f.    /= (Division assignment)

        g.    %= (Modulus assignment)

        h.    **= (Exponentiation assignment)

5. Bitwise Operators:

        a.   & (Bitwise AND)

        b.   | (Bitwise OR)

        c.   ^ (Bitwise XOR)

        d.  ~ (Bitwise NOT)

        e.  << (Left shift)

        f.  >> (Right shift)

        g.  >>> (Unsigned right shift)

6. Conditional (Ternary) Operator:

            ? : (Conditional or ternary operator)

7. Type Operators:

        a.    typeof (Returns the type of a value)

        b.    instanceof (Checks if an object is an instance of a particular class or constructor).

# MEMORY 

  1. Stack =>
            . it is use in premitive data type.
            . original value not change, but provide a copy  

   # example 

            let abc = "hello";
            let str = abc;

            str = "good morning ";

            console.log (abc) // hello
            console.log (str) // good morning

            
  2. Heap => 
            .it is use in non-premitive data type.
            . original value will be changed.

   # example 
                 
                 let userOne = {
                        name : "amit",
                        emailId : "amit@gmail.com"
                 }

                 let userTwo = userOne ;

                 userTwo.name = "Anil";

                 console.log (userOne ) // name: 'Anil', id: 'amit@gmail.com'



# Conditional Statements :-

1. if =>  Code to execute if the condition is true.

2. else => Code to execute if the condition is false.

3. elseif => .Code to execute if the condition1 is true 
          .Code to execute if the condition1 is false than condition2 is true.    
          .Code to execute if the condition1 is false than condition2 is false than else excute .

4. switch => .The switch expression is evaluated once.
             .The value of the expression is compared with the values of each case.
             .If there is a match, the associated block of code is executed.
             .If there is no match, the default code block is executed.

 5. Ternary Operator =>            

# String 

 . storing and manipulating text. 
 
 . Zero or more characters written inside quotes(single and double , we can writte in both ways).

 . it is count from zero
   first position 0
   2nd position 1.
 
 . all method return a new string. they don't modify the original string.
 
 . String is immutable can't be changed.


 # example
              const str =  "Hello";
              console.log(str ); // Hello;

# methods 
        there are following methods in strings


 1.       String length :-
                       . it provide length of string.
# example                    
                let text =  "This is a sample text in JavaScript."
                console.log("the length of message is :",text.length); //36

 2.       String slice():-
                        . Extract a part of a string and extracted part in a new string  
                        

 # example 
                       slice(startIndex, endIndex);

                 let text =  "This is a sample text in JavaScript."
                     let txt = text.slice(10,16) 
                     let txt1 = text.slice(10) 
                     let txt2 = text.slice(-10,-1) 
                     console.log(txt)// sample
                     console.log(txt1)// sample text in JavaScript."
                     console.log(txt2)// avaScript.
                 
 3.        String substring():- 
                                it same as slice().

# example 
                     substring(startIndex, endIndex);
                     let text =  "This is a sample text in JavaScript."
                     let txt = text.substring(10,16)  
                      console.log(txt) // sample
                     
 // 4.      String substr() => Deprecated: This feature is no longer recommended. 


  5.      String replace() => 
                            . replaces a specified value with another value in a string.

                            . this method replaces only the first match.

# example 
                     
                     let txt = " it is chair."
                     let change =  txt.replace("chair", "pen");
                     let change1 =  txt.replace(/chair/i, "pen");  // =>  for case  insensitive use regular expression.
                    
                     console.log(change) // it is pen
                     console.log(change1) // it is pen

  6.      String replaceAll()=>
                               .  this method replaces all  match  character.

# example 

                                 let myText = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

                                console.log("replace all dog with hen :=",myText.replaceAll("dog","hen")); //The quick brown fox jumps over the lazy hen. If the hen reacted, was it really lazy?
  7.     String toUpperCase()=>
                               . this method convert all character in upper case

# example 
                                let txt = "hello"
                                console.log(txt.toUpperCase()); // HELLO
  8.      String toLowerCase() => 
                                  . this method convert all character in lower case

# example 

                                 let txt = "HELLO"
                                console.log(txt.toLowerCase()); // hello
  9.     String concat()=>
                         . join to string .


# example 
                           let txt  = "hello,"
                           let txt1  = "how are you "
                           let txt2 = txt.concat(txt1);
                           console.log(txt2); // hello,how are you

  10.      String trim() =>
                        .it is remove  whitespace from both side of a character 
 
# example 

                                     let txt  = "        hello,               ";
                                      console.log(txt.trim()); //hello, // here space remove both side

  11.     String trimStart()=> 
                             . remove  whitespace from start.

# example 
                                        let txt  = "        hello,               ";
                                      console.log(txt.trimStart()); //hello,       

  12.      String trimEnd() =>  
                             . remove  whitespace from end.

# example 
                                        let txt  = "        hello,               ";
                                      console.log(txt.trimEnd()); //        hello,

  13.      String padStart()
    

# example 
                                 let num = "5";
                                console.log("pad:=>",num.padStart(4,0)); //0005
                           
  14.      String padEnd()

# example 
                               let num = "5";
                            
                                console.log("pad:=>",num.padEnd(5,0)); // 50000

  15.      String charAt() => 
                           . return the character at the specified index in a string.

# example 

                         let text = "hello"
                          console.log(text.charAt(2)) // l

  16.      String charCodeAt() =>
                          . return the unicode  or ascii value of the charcter at the specified index in a string.


# example 

                         let text = "hello"
                          console.log(text.charCodeAt(2)) // 76 (unicode or ascii value )


  17.      String split()=> 
                         . string can convert in array with split() method.


# example 
               a.           let team = "India, Aus,pak"
                                const s = team.split("");
                                console.log(s); // ["I", "n", "d", "i", "a", ",", "A", "u", "s", ",", "P", "a", "k"] =>  all character seprate.

                b.                 let team = "India Aus pak"
                                const s = team.split(" ");
                                console.log(s); // ['India', 'Aus', 'pak']

                c.                 let team = "India Aus pak"
                                const s = team.split("Aus");
                                console.log(s); // ['India', 'pak']



  18.      String indexOf() => 
                            .  return the index (position) the first occurrence of a string in  a string.

                            . if nothing found in a string then return -1.

                            .  cannot take powerful search values (regular expressions).

# example 
                                const text = "Hello, World!";
                                const position = text.indexOf("World");

                                console.log(position); // Outputs: 7
19.        String lastIndexOf()=> 
                            .  return the index (position) the last occurrence of a string in  a string.
                            . if nothing found in a string then return -1.
 # example
                                let t = "hello world "
                                console.log(t.lastIndexOf("d")); // 10

20.        String search() =>
                            .cannot take a second start position argument.
                            .search() method searches a string for a string (or a regularr expression ) and returns the position of the match.
 # example  
                           let txt = "hello world "
                                console.log(t.search("world")); // 6                        
                                console.log(t.search(/world/)); // 6                        
21.        String match() =>
                             . return the result of matching a string against a regular expression.

# example

                           let mat = "returns the result of matching a string against a regular expression.";
                                const reg = /matching/;
                                let result = mat.match(reg)
                                console.log("-----------",result);


                                let mat1= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz-1234567890";
                                const reg1  = /[C-K]/gi
                                let result1 = mat1.match(reg1)
                                console.log("match global",result1);


22.        String matchAll() =>
                              . returns as iterator containing the results of matching a string againsr a string (or a regular expression).

# example
                                 let strMatchAll = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."
                               
                                let strRes  = strMatchAll.matchAll("and");
                                console.log("matchAll -----------", Array.from(strRes));




                                let strMatchAll1 = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."
                               let strReg = /["and"]/gi
                                let strRes1  = strMatchAll1.matchAll(strReg);
                                console.log("matchAll1 -----------", Array.from(strRes1));


24.        String includes()=> 
                                . return true if a string contains a specified value.otherwise false

                                . it is case sensitive.
# example
                               
                               let txt =  "return true if a string contains a specified value";
                               console.log(txt.includes("value")) // true
                              
                              
                               let txt =  "return true if a string contains a specified value";
                               console.log(txt.includes("VALUE")) // false


25.        String startsWith()=> 
                               . returns true if a string begins with a specified value.

                               . it is case sensitive.
# example

                               let txt =  "return true if a string contains a specified value";
                               console.log(txt.startsWith("return")) // true         

                               let txt =  "return true if a string contains a specified value";
                               console.log(txt.startsWith("Return")) // false        
                              
                               let txt =  "return true if a string contains a specified value";
                               console.log(txt.startsWith("true")) // false      

26.        String endsWith()=>
                                . return true if a string ends with a specified value.otherwise false

                                . it is case sensitive.
# example

            let txt =  "return true if a string contains a specified value";
                               console.log(txt.endsWith("value")) // true    
            
            
            let txt =  "return true if a string contains a specified value";
                               console.log(txt.endsWith("value.")) // false   


# NUMBER METHODS

1. tostring() =>
                . return a number as string 

# example

        let num  = 400;
        console.log(num.toString()); // 400

2. toExponential() =>
                    .  convert a number to its exponential form. 

# example

        let num  = 400;
        console.log(num.toExponential()); // 4e+2         

3. toFixedl() =>
                    .  return a string representing the given number using fixed-point notation. 

# example

        let num  = 456.254552;
        console.log(num.toFixed(2)); // 400.00    

4.  toPrecision() =>
                    .  return a string representing a number rounded to precision significant digits.(it return in round off value ) 

# example

        let num  = 456.854552;
        console.log(num.toPrecision(2)); //   4.6e+2                                
        console.log(num.toPrecision(3)); //    457                             
        console.log(num.toPrecision(4)); //    456.9   

5.  toLocaleString()  =>
                    .  retun a string with a language-senitive representation of the given number.

# example

        let num  = 456854552;
       console.log(numLocal.toLocaleString("en-US")); //456,854,552 (USA)
    console.log(numLocal.toLocaleString("en-IN")); //45,68,54,552(INDIA)
    console.log(numLocal.toLocaleString("de-DE")); // 456.854.552(Germany)

       let numLocal1 = new Date()
    console.log(numLocal1.toLocaleString()) //15/10/2023, 10:00:12 am (current with time )

6.    Number.isInteger()=>
                         . return a boolean value .
                         . Returns true if the argument is an integer

# example
            let numIsInteger = 1000
            console.log(Number.isInteger(numIsInteger)); // true 
            let numIsInteger12 = -1000
            console.log(Number.isInteger(numIsInteger12)); // true 
            

            let numIsInteger1 = 1000.0
            console.log(Number.isInteger(numIsInteger1)); //true
            let numIsInteger11 = 1000.01
            console.log(Number.isInteger(numIsInteger11)); //false


7.  Number.isSafeInteger()=>
                            .Returns true if the argument is a safe integer.
                            

# example 

            let numSafeInt = 1021021.0;
            console.log(Number.isSafeInteger(numSafeInt)) //true

            let numSafeInt1 = 102102165413442524;
            console.log(Number.isSafeInteger(numSafeInt1)) //false   

             let numSafeInt11 = -110;
              console.log(Number.isSafeInteger(numSafeInt11)) //true
              
              let numSafeInt13 = "-110";
              console.log(Number.isSafeInteger(numSafeInt13)) //false

# NUMBER PROPERTIES 

1.         MAX_VALUE =>
                       . constnt representing the largest possible number.
                        

 # example 
            let x = Number.MAX_VAlue;
            console.log(x) // 1.7976931348623157e+308;

2.         MIN_VALUE =>
                       . constnt representing the lowest  possible number.


 # example 
            let x = Number.MIN_VALUE;
            console.log(x) // 5e-324


3.         MAX_SAFE_INTEGER =>
                       . constnt representing the maximum safe integer (2**53 - 1).

                      


 # example 
            let x = Number.MAX_SAFE_INTEGER;
            console.log(x) // 9007199254740991


4.         MIN_SAFE_INTEGER =>
                       . constnt representing the maximum safe integer -(2**53 - 1).


 # example 
            let x = Number.MIN_SAFE_INTEGER;
            console.log(x) // -9007199254740991

5.   POSITIVE_INFINITY and NEGATIVE_INFINITY =>
                                           . 	Infinity (returned on overflow)
                                           .	Negative infinity (returned on overflow)

 # example 
                        let pi = 1/0
                        console.log(pi); //Infinity

                        let pi1 = Number.POSITIVE_INFINITY
                        console.log(pi1); //Infinity

                        let ni = -1/0
                        console.log(ni); //-Infinity

                        let ni1 = Number.NEGATIVE_INFINITY
                        console.log(ni1); //-Infinity

# MATHS 
         . math library come with js by default.                        

 # example 

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


# DATE 
      . it a object 

      . months froms 0 to 11;

       .  January = 0
       .  December = 11

      . the year should have 4 digits. For compatibility, 2 digits also accepted 19xx e.g 98 is the 
        same as 1998 here, but always using 4 digit is stongly encouraged.

      . you can't omit month. If you supply only one parameter it will be treated as milliseconds.

      . javascript stores dates as miliseconds since january 1 1970.

      .if hr/min/sec/ms is absent, they are asummed to be equal 0.

      // 6 number use for year, month, day, hour, minute, second

 # example 

                const myDate = new Date(2018, 11, 24, 10, 33, 30);
                console.log(myDate);

                // 5 number use for year, month, day, hour, minute

                const newDAte = new Date(2023, 11, 24, 10, 33);
                console.log(newDAte);

                // 4 number use for year, month, day, hour

                const newDAte1 = new Date(2023, 11, 24, 10);
                console.log(newDAte1);

                // 3 number use for year, month, day

                const newDAte2 = new Date(2023, 11, 24);
                console.log(newDAte2);

                // 2 number use for year, month

                const newDAte3 = new Date(2023, 11);
                console.log(newDAte3);


                const newDAte4 = new Date(2023);
                console.log(newDAte4);

                const newDAte5 = new Date(99, 10, 18);
                console.log(newDAte5);

                const createDate = new Date(100000000000)
                console.log(createDate);

                const createDate1 = new Date(0)
                console.log(createDate1);

# METHODS

 # example 

                const mDate = new Date()

                console.log(mDate.toString()); // Wed Oct 18 2023 15:12:57 GMT+0530 (India Standard Time)

                console.log(mDate.toLocaleString()); // 18/10/2023, 3:49:47 pm

                console.log(mDate.toDateString()); //Wed Oct 18 2023

                console.log(mDate.toUTCString()); // Wed, 18 Oct 2023 09:43:47 GMT

                console.log(mDate.toISOString()); // 2023-10-18T09:44:32.587Z



                const fDate =  Date.now();
                console.log(fDate); // 1697622881879

                const date = new Date("2023-10-18");
                console.log(date.getTime()); //1697587200000
                console.log(date.getDate()); // 18
                console.log(date.getDay()); // 3
                console.log(date.getMonth()); //  2023
                console.log(date.getFullYear()); //

                // convert ms to sec 

                console.log(Math.floor(Date.now()/1000)); //1697623380
                const currentDate = new Date();

# get method

 # example 


                const year = currentDate.getFullYear();
                console.log(year);         // 2023


                const month = currentDate.getMonth(); // 0-based (0 = January, 11 = December)
                console.log(month); //9


                const day = currentDate.getDate();
                console.log(day);   //18


                const hours = currentDate.getHours();
                console.log(hours);  // 15


                const minutes = currentDate.getMinutes();
                console.log(minutes); // 40


                const seconds = currentDate.getSeconds();
                console.log(seconds); // 11


                const milliseconds = currentDate.getMilliseconds();
                console.log(milliseconds); //126

                const zone = currentDate.getTimezoneOffset();
                console.log(zone); // -330 (the time zone difference in minute)


                const formatDate = currentDate.toLocaleString('default',{

                weekday : 'long',
                year : "2-digit",
                day:   '2-digit'
                })
                console.log(formatDate); //Wednesday 18 23

# set method

 # example 
 

                const myDate = new Date();


                myDate.setFullYear(2023);    // Set the year to 2023
                console.log(myDate);

                myDate.setMonth(11);        // Set the month to December (0-based, so 11 represents December)
                console.log(myDate);

                myDate.setDate(25);         // Set the day of the month to the 25th
                console.log(myDate);

                myDate.setHours(14);        // Set the hours to 14 (2 PM)
                console.log(myDate);

                myDate.setMinutes(30);      // Set the minutes to 30
                console.log(myDate);

                myDate.setSeconds(0);       // Set the seconds to 0
                console.log(myDate);

                myDate.setMilliseconds(0);  // Set the milliseconds to 0

                console.log(myDate);

