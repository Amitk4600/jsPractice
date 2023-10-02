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