var currentDate = new Date();
var b = currentDate.toString();
var c = currentDate.getTime();
var d = c/60000;
document.write("Current Date: " + b + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + c + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + d + "<br>");