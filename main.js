// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
var givenName;
// A: undefined 


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: "Tim"  a string


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: "Tim"


// 4.
// What is `greeting` set to?
var greeting = "Hello, how are you? " + givenName;
// A: A string | "Hello, how are you? Tim"


// 5.
// What is `math` set to?
var high = 50;
var low  = 10;
var math = high - low;
// A: 40


// 6.
// What is `math` set to?
math = high - "5";
// A: NaN (Not a number)


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1984;
var today = 2017;
// A:

var age = today - born;
var timAge = "Tim is " + age + "years old";



// 8.
// Adjust this code. Store some information in the following variables.
// A:
var yourName;
var instructorName;

yourName = "Benjamin";
instructorName = "John";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:

instructorName = "Isaac";
yourName = "Ben";

// This statement should read correctly
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
var myNumber = 27;
var myString = "Nintendo";
var myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
var myUndefined = myUndefined;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
var x = (false == 0);
// A. x = true;


// 12.
var y = (false == "");
// A. y = true;


// 13.
var z = (0 == "");
// A. z = true;


// 14.
var a = (null == null);
// A. true;


// 25.
var b = (undefined == undefined);
// A. true;


// 16.
var c = (undefined == null);
// A. true;


// 17.
var d = (null == false);
// A. true;


// 18.
var e = (NaN == null);
// A. true;


// 19.
var f = (NaN == NaN);
// A. true;


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
var thirsty = true;

if (thirsty == true) {
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
var x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False!


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and request an instructor.
