/*
Capitalize Challenge

instructions:
Take the variable myString and capitalize the first letter of the word using some of the methods 
talked about in the past lessons. Put the result in a variable called myNewString.

*/

const myString = 'developer';

let myNewString = myString;
// Solution 1
myNewString = myNewString.charAt(0).toUpperCase() + myNewString.substring(1);
// Solution 2
myNewString = myNewString[0].toUpperCase() + myNewString.substring(1);
// Solution 3
myNewString = `${myNewString[0].toUpperCase()}${myNewString.substring(1)}`;
// Solution 4
myNewString = `${myNewString[0].toUpperCase()}${myNewString.slice(1)}`;

console.log(myNewString);
