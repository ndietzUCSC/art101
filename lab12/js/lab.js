// lab.js Name Length Divination
// Author: Norah Dietz
// Date: 12/11/2025
// Assign Tolkien houses with descriptions based on the remainder
function getHex (num) {
  // Get the remainder when divided by 4
  let remainder = num % 4;
  let str = "";

  if (remainder === 0) {
    str = "Stinky Shoes: <br> <h4> Your hex will infuse your target's footwear with the stench of decay and spoiled dairy. </h4>";
  } else if (remainder === 1) {
    str = "Fragile Phone: <br> <h4>Your target's phone screen has a .001% chance to break with each touch.</h4>";
  } else if (remainder === 2) {
    str = "Cognitohazard:<br> <h4>Your target will learn incomprehensible  horrors about existence, and cannot adequetly communicate them.</h4>";
  } else if (remainder === 3) {
    str = "Generalized Anxiety Disorder: <br> <h4>Your target will develop symptoms of Generalized Anxiety Disorder, as defined in the DSM-5.</h4>";
  }

  return str;
}

// attach click handler to submit button
$("#button").click(function() {
  // get the value in the #input text box, asign to a varaiable name
  let name = $("#input").val();
  console.log(name);
  // get the length of the name
  let nameLength = name.length;
  console.log(nameLength);
  // get the hex
  let hex = getHex(nameLength);
  console.log(hex);
  // add hex to output div
  $("#output").html("<h1>" + "YOU MAY NOW INFLICT: <br>" + hex + "</h1>");
});