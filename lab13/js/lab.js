// index.js - Lab 13: loops
// Author: Natalie Peterson
// Date: 25 May 2024

    for (let i = 1; i <= 200; i++) {
    
        let str = "";
        if (i % 3 == 0) {
          str += "Fizz";
        }
        if (i % 5 == 0) {
          str += "Buzz";
        }  
        if (i % 7 == 0) {
          str += "Boom";
        }
        
        if (str == "") {
          console.log(i);
          $("#output").append("<p class='num'>" + i);
        } else {
          console.log(str + '!');
          $("#output").append("<p class='text'>" + str + '!');
        }
        
        }
   


