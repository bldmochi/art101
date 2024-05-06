// index.js - Lab 8: Anon functions and callbacks
// Author: Natalie Peterson
// Date: 5 May 2024

// define an array of numbers
var someNumbers = [1,69,420,777,89,57,5,18] 
    console.log("My Array: ", someNumbers)

// create a function
function someMath (x) { 
    var results = x * 3
    return results;
}
//test function
    console.log("Testing some math: ", someMath(3))
    console.log("Testing some more math!: ", someMath(6))


//create new anon function mapped to someNumbers
var product = someNumbers.map(function(x) { 
    let product = x*2
    return product; 
})
    console.log("my array times 2: ", product)

// run someNumbers through someMath function
 var mapResults = someNumbers.map(someMath);
  console.log("my array times 3: ", mapResults)

var mapResults =
    "my original array: " + someNumbers + "</br>" +
    "multiplied by 3: " + someNumbers.map(someMath) + "</br>" +
    "multiplied by 2: "+ product;


$("#output").html(mapResults);