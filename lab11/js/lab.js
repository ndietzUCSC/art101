// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
var sortedString;
$("#submit").click(function(){
  var guestName; 
  guestName = $("#user-name").val();
  // now let's sort it
  var guestNameSorted = sortGuestName(guestName);
  // append a new div to our output div
  $("#output").html('<div class="name-output"><p>' + guestNameSorted + '</p></div>');
});
function sortGuestName(guestName) {
  //cast string to array
  var nameArray = guestName.split('');
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //array to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted); 
  sortedString = nameSorted;
  return nameSorted;
}
function namePrint(nameSorted) {
  document.writeln();
}


  

