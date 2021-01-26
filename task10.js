var num = +prompt("Enter a random float number to five decimal places");
var num1 = num.toFixed(1);
var num2 = num.toFixed(2);
var num3 = num.toFixed(3);

document.write("The number upto 1 decimal place is: ", num1 +"<br>")
document.write("The number upto 2 decimal place is: ", num2 +"<br>")
document.write("The number upto 3 decimal place is: ", num3 +"<br>")