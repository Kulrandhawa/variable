var firstName = prompt("What is your name?");
var lastName = prompt("What is you last name?");
var fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
fullName += "!!";
var characterCount = fullName.length;
alert("The string \"" + fullName + "\" is " + characterCount + " characters long.");
