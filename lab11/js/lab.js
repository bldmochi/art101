/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Natalie Peterson
   Date: 16 May 2024
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

  // click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();

    userNameSorted = sortString(userName);

    // append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

    console.log("click")
});

$("#emo").on("click ",
    function changeColor() {
        $("body").toggleClass("newBody");

        $(".content").removeClass("content");

        $(".minor-section").toggleClass("newSection");

        $("h1").addClass("text");

        $("#button1").append('<button id="more"> make more emo! </button>');

        console.log("click");

});

$("body").on("click", "#more",
    function () {
        $(".text").toggleClass("text2");
        $(".newSection").toggleClass("border");

        console.log("click2");

});


