// index.js - lab 14: JSON
// Author: Natalie Peterson
// Date: 2 JUNE 2024

const URL = "https://icanhazdadjoke.com/";

// create a button listener
  
    $("#activate").click(function(){
      //call ajax
      $.ajax(ajaxObj);
      
    })

  //setup AJAX object

    const ajaxObj = {
      url: URL,
     // data: {}
      type: "GET",
      dataType: "json",
      success: ajaxSuccess,
      error: ajaxError
    }
    
    
  // create AJAX success callbacl

      function ajaxSuccess(data) {
        //console.log("Data:", data);
        // parse JSON
        const joke = data.joke;
        //put joke in output div
        $("#output").html("<p id='joke'>" + joke);
      }
    

  // create AJAX error callback
  function ajaxError(request, error) {
    console.log("Oops:", request, error);
  }
