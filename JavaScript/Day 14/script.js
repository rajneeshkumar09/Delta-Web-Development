// Using the Console 
/*  
    1. Use REPL : Read-Evaluate-Print-Loop 
    2. Variables
    3. Data Types: Number, Boolean, String, Undefined, Null, Bigint, Symbol
    4. typeof operator
    5. Operations: Addition, Subtraction, Division, Multiplication, Remainder, Exponentiation
    6. NaN (Not a Number) data type
    7. Operator Precedence: () | ** | *, /, % | +, -
    8. let, const, var Keyword
    9. Assignment Operators: +=, -=, *=, /=
    10. Unary Operators: increment(++), decrement(--)
    11. Identifier Rules for variables names
    12. Boolean data type
    13. TypeScript: Static typed where JS is Dynamic typed
    14. String data type
    15. String Indices
    16. Concatenation: Adding string together
    17. null & undefined data type
*/

// Practice 

let age = 23;
console.log(age+2); //after 2 years
console.log(age);

let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
console.log(avg);

let num = 5;
let newNum = num++;
console.log(newNum, num);
newNum = ++num;
console.log(newNum, num);

// Practice Question

/*
let 1age = 5;   //variable names can't start with number
let 2age = 10;  //variable names can't start with number
*/

let age1 = 5;
let age2 = 10;

let marks = 75;
// let isPass = True;  //True is not define
let isPass = true;

// let isPass = "true";    //String

// Lecture Matarial

let firstName = "Tony";
let lastName = 'Stark';
console.log(firstName, lastName);
console.log(typeof firstName, typeof lastName);

let char = 'R';
let nums = '1234';
let empty = "";
console.log(char, nums, empty);
console.log(typeof char, typeof nums, typeof empty);


let names = "TONY STARK";
console.log(names[0])
console.log(names[1])
console.log(names[4])
console.log(names[7])
console.log(names[100])
console.log(names.length)
console.log(typeof names.length)
console.log(names[names.length])
console.log(names[names.length-1])
console.log(names[names.length-2])
console.log(names[names.length-3])
console.log(names[names.length-4])

console.log("Rajneeesh Kumar".length)
console.log("Rajneeesh Kumar"[6])
console.log("Rajneeesh Kumar"[10])

let fname = "Rajneesh";
let lname = "Kumar";
console.log(fname + " " + lname);
console.log("tony" + 2);

let year = null;
year = 2006;
console.log(year);

// Practice Question

let myName = "Rajneesh Kumar";
console.log(typeof myName, myName.length);

let myFirstName = "Rajneesh";
console.log(myFirstName[0]);
console.log(myFirstName[myFirstName.length - 1]);

console.log('apnacollege'+123);  //apnacollege123

let emptyStr = "";
let singleSpaceStr = " ";
console.log(emptyStr.length, singleSpaceStr.length);
