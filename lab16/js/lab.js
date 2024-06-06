// index.js - Lab 16
// Author: Natalie Peterson
// Date: 5 June 2024

// Constants
const URL = "https://xkcd.com/info.0.json"
// Functions
$("#button").click(function(){
  //call ajax
  $.ajax(comicObj);
  
})
// Using the core $.ajax() method
var comicObj = {

  // The URL for the request (from the api docs)
  url: "URL",
  // The data to send (will be converted to a query string)
  // data: { 
  //         // here is where any data required by the api 
  //         //   goes (check the api docs)
  //         id: 123,
  //         api_key: "blahblahblah",
  //       },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      const title = comicObj.title;
      const image = comicObj.image;
      const alt = comicObj.alt
    
        console.log(data);

        $("#output").html("<h3>" + title);
        $("#output").append("<img src='" + image + "' />")
        $("#output").append("<p class='atrb'>" + alt);
  
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
}