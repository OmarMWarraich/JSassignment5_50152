var int = +prompt("Enter a positive integer:");

if (int >= 0) {
    
    document.write("number: " + int + "<br>");
    document.write("round value: "+Math.round(int)+ "<br>");
    document.write("floor value: " + Math.floor(int) + "<br>");
    document.write("ceil value: " + Math.ceil(int) + "<br>");
}
else{
    alert("Please type a positive integer")
}