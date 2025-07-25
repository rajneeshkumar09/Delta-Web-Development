/* Question 1 */

let startArray = ['January', 'July', 'March', 'August'];
// startArray.splice(0, 1);
// startArray.splice(1, 0, "June");
startArray.splice(0, 2, "July", "June");
console.log(startArray);

/* Question 2 */
let languages = ['C', 'C++', 'HTML', 'JavaScript', 'Python', 'Java', 'C#', 'SQL'];
console.log(languages.reverse().indexOf("JavaScript"));
console.log(languages);
