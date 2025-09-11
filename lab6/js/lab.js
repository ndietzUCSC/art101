//Lab 6 Arrays and Objects
// Author: Norah Dietz
// Date: 9/10/25

// Constants
//array of transport modes

//object creation for transport modes
myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "Silver",
  year: 2010,
  age: function() {
    return 2025 - this.year;
  }
}
sandals = {
  make: "Birkenstock",
	model: "Arizona",
	color: "Black/Silver",
	year: 2025,
	age: function() {
    return 2025 - this.year;
	}
}
boots = {
  make: "Doc Martens",
	model: "1460",
	color: "Black",
	year: 2017,
	age: function() {
    return 2025 - this.year;
	}
}
harrysCar = {
  make: "Toyota",
	model: "Matrix",
	color: "Silver",
	year: 2006,
	age: function() {
    return 2025 - this.year;
	}
}
myTransport =[myMainRide, sandals, harrysCar, boots];

//output


// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  
  document.writeln("<h3>Types of transportation I use: </h3>");
  myTransport.forEach(element => {
    document.writeln("<li>" + element.make + " " + element.model + "</li>");
  });
  // the code that makes everything happen
}

// let's get this party started
main();
