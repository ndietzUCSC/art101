// index.js - Lab 8 Code, anons and callbacks
// Author: Norah Dietz
// Date: November 2025


let anArray = [1, 4, 7, 8, 9];

function aFunction(x) {
  var results = x + x;
  console.log(results);
  return results;
}

anArray.map(aFunction);

var mapResults = anArray.map(function anotherFunction(x){
           var results =  x+5;
           return results;
          })
          
$("#output").html(mapResults);



