// Question 1

let num = 14;

if (num%10 === 0) {
    console.log("Good!");
} else {
    console.log("Bad!");
}

// Question 2

let _name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
alert(`${_name} is ${age} years old.`);

// Question 3

let quarter = 3;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Choose from 1 to 4");
        break;
}

// Question 4

let str = "Rabhishek";

if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log(`${str} is a golden string`);
} else {
    console.log(`${str} is not a golden string`);
}

// Question 5

let numOne = 6;
let numTwo = 7;
let numThree = 8;

if (numOne > numTwo) {
    if(numOne > numThree){
        console.log(`numOne(${numOne}) is a largest number`);
    }
} else if (numTwo > numThree) {
    if (numTwo > numOne) {
        console.log(`numTwo(${numTwo}) is the largest number`);
    }
} else {
    console.log(`numThree(${numThree}) is the largest number`);
}

// Question 6

let sameNumOne = 325;
let sameNumTwo = 47852;

if ((String(sameNumOne)[String(sameNumOne).length - 1]) === (String(sameNumTwo)[String(sameNumTwo).length - 1])) {
    console.log(`${sameNumOne} and ${sameNumTwo} have the same last digit i.e. ${String(sameNumOne)[String(sameNumOne).length - 1]}`);
} else {
    console.log(`${sameNumOne} and ${sameNumTwo} don't have the same last digit`);
}