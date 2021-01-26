var a = new Date();
var b = a.toString();
var c = b.slice(11,15);
// console.log(c)
var age = +prompt("Please Enter Your Age");
var birthYear = c - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br>")