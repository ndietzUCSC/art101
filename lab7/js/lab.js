// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortGuestName() {
  var guestName = window.prompt("Hello, what's your name?");
  console.log("guestName = ", guestName);
  //cast string to array
  var nameArray = guestName.split('');
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //array to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted; 
}
  document.writeln("oh crap I dropped the letters into my sorting machine and they got all...sorted up... See? </br> ",
  sortGuestName(), "</br>");

