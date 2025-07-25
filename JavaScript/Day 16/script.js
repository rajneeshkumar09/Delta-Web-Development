/*
    1. String method: stringName.method()
    2. Trim method: stringName.method()
    3. Immutable String: not any change in main string on using methods
    4. toUpperCase & toLowerCase
    5. String method with argument: stringName.method(arg)
    6. indexOf(): stringName.method(arg)
    7. Method Chaining: stringName.method1().method(2)._____._____._____
    8. Slice: stringName.slice(arg)-(start) || stringName.slice(arg1, arg2) - (start, end)- ending index not included in get string so we take the end value +1 in actual value
    9. Replace & Repeat: stringName.replace('searchValue','replaceValue') & stringName.repeat(value) 
    10. Array (Data Structure)
    11. Visualizing Array 
    12. Creating Array
    13. Arrays are Mutable
    14. Array Methods
    15. indexOf & includes methods in Array
    16. Concatenation & Reverse
    17. Slice in Array
    18. Splice in Array
    19. Sort in Array
    20. Array Reference
    21. Constant Array
    22. Nested Array
*/

/* Trim method */
let msg = "  He  llo  ";
// let password = prompt("Enter your password: ");
// console.log(password.trim());
console.log(msg.trim());

/* toUpperCase & toLowerCase */
let strName = "Rajnessh Kumar";
console.log(strName.toLowerCase());

let err = "error";
console.log(err.toUpperCase());

/* indexOf method with argument */
let indexMsg = "ILoveCoding";
console.log(indexMsg.indexOf("Love")); 
console.log(indexMsg.indexOf("love")); 
console.log(indexMsg.indexOf("o")); 
console.log(indexMsg.indexOf("z")); 

/* Method Chaining */
let methodChain = "       hello      ";
console.log(methodChain);
console.log(methodChain.toUpperCase());
console.log(methodChain.toUpperCase().trim());
console.log(methodChain.trim());
console.log(methodChain.trim().toUpperCase());

/* Slice Method */
let sliceMsg = "Apnacollege";
console.log(sliceMsg.slice(0,4));
console.log(sliceMsg.slice(4));
// slice(-num) = slice(length-num)
console.log(sliceMsg.slice(-1));
console.log(sliceMsg.slice(-2));
console.log(sliceMsg.slice(-3));

/* Replace & Repeat method */
let replaceMsg = "ILoveCoding";
console.log(replaceMsg.replace("Love", "do"));
console.log(replaceMsg.replace("o", "x"));
let apnamsg = "apnaapnaapna";
console.log(apnamsg.replace("apna", "college"));
let fruit = "Mango";
console.log(fruit.repeat(2));
console.log(fruit.repeat(5));

/* Array (Data Structure) */
// let student1 = "aman"
// let student2 = "rajneesh"
// let student3 = "abhishek"

let students = ["aman", "rajneesh", "abhishek"];
console.log(students);
console.log(students[2]);

let nums = [2, 4, 6, 8];
console.log(nums);
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[3]);
console.log(typeof nums);
console.log("length",nums.length);

let info = ["rajneesh", 22, 5.4];
console.log(info);
console.log(info[0]);
console.log("length", info[0].length);
console.log(info[0][0]);
console.log("length", info.length);

let emptyArr = [];   //empty array
console.log(emptyArr);
console.log(emptyArr[0]);
console.log(emptyArr.length);

console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] Length :", [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].length);

/* Arrays are Mutable */
let _name = "Rohit";
_name[0] = "m";  //It don't effect the real string value
let fruits = ["mango", "apple", "litchi"];
console.log(fruits); 
fruits[0] = "Banana";
console.log(fruits);
fruits[10] = "papaya"
console.log(fruits);

/* Array Methods */
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
cars.push("toyota")
console.log(cars);
console.log(cars.pop());
console.log(cars);
cars.unshift("Dodge Challenger");
console.log(cars);
console.log(cars.shift());
console.log(cars);

let followers = ["a", "b", "c"];
// block and remove from followers list
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

/* indexOf & includes methods in Array */
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("xuv"));
console.log(cars.indexOf("XUV"));
console.log(cars.includes("audi"));
console.log(cars.includes("toyota"));

let marks = [99, 89, 67, 42, 100];
console.log(marks.indexOf(100));
console.log(marks.indexOf(97));
console.log(marks.includes(67));
console.log(marks.includes(52));

/* Concatenation & Reverse */
let primaryColors = ["red", "green", "blue"];
let secondaryColors = ["orange", "yellow", "violet"];
console.log(primaryColors.concat(secondaryColors));
console.log("Original", primaryColors);
console.log("Original", secondaryColors);
console.log(secondaryColors.concat(primaryColors));
console.log(primaryColors.reverse());
console.log("After reverse, Original", primaryColors);
console.log(secondaryColors.reverse());
console.log("After reverse, Original", secondaryColors);

/* Slice */
let colors = ["red", "yellow", "blue", "Orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));  // colors.length - 2 = 6-2 = 4
console.log(colors.slice(6));
console.log(colors.slice(colors.length));

/* Splice */
console.log(colors.splice(4));  //work same as slice
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "gray"));
console.log(colors);

console.log("cars", cars);
console.log(cars.splice(2));
console.log(cars);
cars.splice(0, 0, "toyota", "xuv", "ferrari");
console.log(cars);
cars.splice(1, 0, "mercedes");
console.log(cars);
cars.splice(1, 0, "gwagan");
console.log(cars);

/* Sort */
console.log(cars.sort());
let chars = ['b', 'd', 'e', 'a'];
console.log(chars.sort());
let sortMarks = [99, 89, 67, 42, 100];
console.log(sortMarks);
console.log("convert all value into string and after it, apply sort method");
console.log(sortMarks.sort());

/* Array References */
// console.log([1] === [1]);    //false
console.log([1] == [1]);
// console.log([] === []);      //false
console.log([] == []);
let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log("Original Array",arr);
console.log("Copy Array",arrCopy);
console.log(arr == arrCopy);
console.log(arr === arrCopy);

/* constant Array */
const g = 10;
// console.log(g=9.8);

const constArray = [1, 2, 3];
console.log(constArray);
constArray.push(4)
console.log(constArray);
constArray.push()
console.log(constArray);
// constArray = ['4', '5', '6'];
// constArray = cars
// console.log(constArray);

/* Nested Array */
let nestedArray = [[2, 4], [3, 6], [4, 8]];
console.log(nestedArray);
console.log(nestedArray.length);
console.log(nestedArray[0]);
console.log(nestedArray[0][0]);
console.log(nestedArray[1][1]);
console.log(nestedArray[1][2]);
console.log(nestedArray[2][0]);
