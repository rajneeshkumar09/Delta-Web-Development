// Traffic Light System

// let color = 'red';
// let color = 'yellow';
let color = 'green';

/* Using If Statement */
if (color == 'red') {
    console.log('Stop! Light color is red');
}
if (color == "yellow") {
    console.log("Slow Down. Light color is Yellow");
}
if (color == "green") {
    console.log("Go. Light color is Green");
}

/* Using else if Statement */
let $color = "red";

if ($color == 'red') {
    console.log('Stop! Light color is red');
} else if ($color == "yellow") {
    console.log("Slow Down. Light color is Yellow");
} else if ($color == "green") {
    console.log("Go. Light color is Green");
}

/* else statement */
let _color = "blue";

if (_color == 'red') {
    console.log('Stop! Light color is red');
} else if (_color == "yellow") {
    console.log("Slow Down. Light color is Yellow");
} else if (_color == "green") {
    console.log("Go. Light color is Green");
} else {
    console.log('Traffic light is broken');
}
