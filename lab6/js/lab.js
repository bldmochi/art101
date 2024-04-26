// index.js - Lab 6: Arrays and Objects
// Author: Natalie Peterson
// Date: 26 April 2024

// Define Variables
var myTransport = ["Honda Civic", " city bus", " loop bus ",];

var myMainRide = {
  make : 'Honda',
  model : 'Civic',
  color : 'Silver',
  year : 2007,
  age : function() {
    return 2024 - this.year;
  },
  
};
 //output
document.writeln("Kinds of transport I use: " + myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");