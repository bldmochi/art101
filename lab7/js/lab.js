// index.js - Lab 7: Arrays and Objects
// Author: Natalie Peterson
// Date: 1 May 2024

function firstFunction() {
    var userName = window.prompt ("write your name in here now!!!!!");
    console.log("userName = ", userName);
    return userName.split('').sort().join('');
}
   

document.writeln("i fixed your name: ", 
    firstFunction(), "</br>");