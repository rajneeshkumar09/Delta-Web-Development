/* 
    1. consol.log()
    2. Linking JS File
    3. Template Literals: ``(Backticks)
    4. Operations in JS
    5. Comparison Operator: >, >=, <, <=, ==, !=
    6. Comparison for non-number
    7. Conditional Statements: if-else, nested if-else, switch
    8. If Statement
    9. else if Satatement
    10. else Statement
    11. Nested if-else Statement
    12. Logical Operator: &&, ||, !
    13. truthy & falsy : 1 or 0
    14. Switch Statement
    15. Alerts & Prompts
*/

console.log("Hello!");
console.log(1+2);
let num = 123;
console.log('num');
console.log(num);
console.log('Hello', "World", num, (1+5));
// console.log('Rajneesh Kumar');
// console.log('Num', num);

let a = 10;
let b = 5;
console.log('Sum of a & b is ', a+b);

let pencilPrice = 10;
let erasorPrice = 5;
// let output = 'The Total price is : ' + (pencilPrice + erasorPrice) + "Rupees.";
let output = `The Total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);

// Arithmatic Operator
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary Operator
console.log(a++);   //10
console.log(++a);   //12    

// Assignment Operator
let c = a;
console.log(c);     //10

// Comparison Operator
let age = 18 ;
console.log(age < 18);  //false
console.log(age > 18);  //false
console.log(age <= 18); //true
console.log(age >= 18); //true
console.log(age == 18); //true
console.log(age != 18); //false
console.log(0 > -99);

num = 5
str = '5'
console.log(num == str);    // == : Compare the values
console.log(num === str);    // == : Compare the type of values

//Comparison for non-number

console.log('Comparison for non-number');
console.log('P' < 'p');

// Cond itional Statements

/* If Statement */
console.log('Before my if statement');
let myAge = 23;
if (myAge >= 18) {
    console.log('You can vote');
    console.log('You can Drive');
    let a = 5;
    console.log(7 * a);
}
if (myAge<18) {
    console.log("You can't vote");
    
}
console.log('after my if statement');

let firstName = "Rajneesh"
if (firstName == "Rajneesh kumar") {
    console.log(`Welcome ${firstName}`);
}

/* else if Statement */
let my_Age = 23;
if (my_Age >= 18) {
    console.log('You can Drive');
} else if (my_Age >= 18) {
    console.log("You can Drive2");
} else if (my_Age < 18) {
    console.log("You can't Drive");
}

let marks = 45;
if (marks >= 80) {
    console.log('A+');
}
else if (marks >= 60) {
    console.log('A');
}
else if (marks >= 33) {
    console.log('B');
}
else if (marks < 33) {
    console.log('F');
}


let month = "january";
// let month = "april";
if (month === "january") {
    console.log('winter is here');
}
else if (month === "april") {
    console.log('summer is here');
}

/* else statement */
let _myAge = 13;
if (_myAge >= 18) {
    console.log('You can Drive');
}else {
    console.log("You can't Drive");
}

/* Nested if-else Statement */

let _marks = 82;

if (_marks >= 33) {
    console.log('Pass');
    if (_marks > 80) {
        console.log('Grade : O');
    } else {
        console.log('Grade : A');
    }
    
} else {
    console.log('Better luck next time');
}

// Logical operator

let $marks = 75;
if ($marks >= 33 && $marks >= 80) {
    console.log('Pass');
    console.log('A+');
}
if ($marks >= 33 || $marks >= 80) {
    console.log('Passed');
    console.log('B+');
}
if (!$marks<45) {
    console.log('Not Operator Used');
}

if (($marks>33 && marks<=80) || !false) {
    console.log('Multiple statements');
}

// truthy & falsy

if(undefined){
    console.log('It has true value');
} else {
    console.log('It has false value');
}

if(" "){
    console.log('It has true value');
} else {
    console.log('It has false value');
}

let nums = -10;
if(nums){
    console.log('num is not equal to 0');
} else {
    console.log('num is equal to 0');
}

// Switch Statement

let trafficLightColor = "red";

switch (trafficLightColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Light is broken")
        break;
}
console.log("After switch statement");

// Alerts & Prompts

// alert("This is a simple alert")
console.log("This is a simple log");
console.error("This is a error msg");
console.warn("This is a warning msg");

let $firstName = prompt("Enter your first name : ");
let $lastName = prompt("Enter your last name : ");
// console.log("Welcome", $firstName, $lastName, "!");
let msg = "Welcome " + $firstName + " " + $lastName + "!";
alert(msg)