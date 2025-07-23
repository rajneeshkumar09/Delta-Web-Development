// Question 1

let str = "bhishek";
if ((str[0] === 'a' || str[0] === 'A') && str.length > 3) {
    console.log(`${str} is good string.`);
} else {
    console.log(`${str} is not good string.`);
}

// Question 2

let num = 12;

if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log('safe');
} else {
    console.log('unsafe');
}
