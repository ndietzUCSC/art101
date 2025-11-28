// lab.js - purpose and description here
// Author: Norah Dietz
// Date: November 2025

// Constants

// Functions
// make buttons for challenge, problems, and results sections
$("#challenge").append("<button id='button-challenge'>Challenge Button</button>");
$("#problems").append("<button id='button-problems'>Problem Button</button>");
$("#results").append("<button id='button-results'>Results Button</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
    console.log("challenge clicked");
});
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
    console.log("problems clicked");
});
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
    console.log("results clicked");
});