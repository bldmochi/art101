 /*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: natalie peterson
   Date: 2024
*/

// add button in challenge section
$(".minor-section").append("<button id='button-challenge'> make special </button>");

// add a click listener to the button
$("#button-challenge").click(function(){
    //add link to the minor section class
   $(this).parent().toggleClass("special");

});