 /*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: natalie peterson
   Date: 2024
*/

$(".minor-section").each(function(index) {
   $(this).append("<button id='button-challenge-" + index + "'> make special </button>");
});



// add a click listener to the button
$(".minor-section button").click(function(){
    //add link to the minor section class
   $(this).parent().toggleClass("special");
   
   console.log("click");
});