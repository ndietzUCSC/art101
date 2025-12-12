// index.js - Fizz Buzz
// Author: Norah Dietz
// Date: 12/11/2025

// Constants
var str = "";


$("#button").click(function(){
  for (var i = 0; i <= 200; i++) {
    str += i + ". ";
    
    // check for multiples and build string
    var output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    if (i % 7 == 0) output += "Boom";
    
    str += output; // add output if exists, otherwise print the number
    str += "<br>";
  } 
  $("#output").append(str);
});
