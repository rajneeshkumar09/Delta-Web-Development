const prompt = require('prompt-sync')();

/* Question 1 */
let arr = [7, 9, 0, -2];
let n = 3;

console.log(arr.slice(0, n));

/* Question 2 */
console.log(arr.slice(arr.length-n));

/* Question 3 */
let str = prompt("Enter a string: ");
// if (str == "") {
//     console.log("String is blank");
// } else {
//     console.log("String is not blank");
// }

if (str.length == 0) {
    console.log("String is empty");
} else {
    console.log("String is not empty");
}

/* Question 4 */
let strName = prompt("Enter a string: ");
let indexNum = parseInt(prompt("Enter a index number: "));
if (strName[indexNum] == strName[indexNum].toLowerCase()) {
    console.log(`${strName[indexNum]} is lowercase`);
} else {
    console.log(`${strName[indexNum]} is not lowercase`);
}

/* Question 5 */
let leadSpace = "   Abhishek";
console.log(leadSpace.trimStart());
let trailSpace = "Rajneesh    ";
console.log(trailSpace.trimEnd());

/* Question 6 */
let colors = ["red", "yellow", "blue", "Orange", "pink", "white", "violet", "purple"];
let user = prompt('Enter a color: ');
if (colors.includes(user)) {
    console.log(`${user} is in Array`);
} else {
    console.log(`${user} is not in Array`);
}
