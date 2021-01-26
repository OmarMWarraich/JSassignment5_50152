var a = new Date();
var b = a.toString();
var c = b.slice(16,18);
// var date1 = new Date();
var setHour = a.setHours(c+1);
document.write("current date: " + a + "<br>");
document.write("1 hour ago, it was " + b + "<br>")
