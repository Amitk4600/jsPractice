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
