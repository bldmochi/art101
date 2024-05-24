// index.js - Lab 12: conditionals
// Author: Natalie Peterson
// Date: 23 May 2024

function sortingHat (str) {
    let length = str.length;
    let numofHouses = 4;
    let remainder = length % numofHouses;
    if (remainder == 0)
        {
        return ("my chemical romance!");
      }
       else if (remainder == 1) {
         return ("AJR (sorry)");
       }
       else if (remainder == 2) {
        return ("the smiths!");
      } 
      else {
      return ("paramore!");
      }  
    }


$("#button").click(function(){

    let input = $("#input").val();
    let house = sortingHat(input) ;
    newText = "<p> The sorting hat has sorting you into " + house + "</p>"
    document.getElementById("output").innerHTML = newText
    console.log("click")
})