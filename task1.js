var city = "Hyderabad";
var newCity = city.split("");
newCity.splice(0, 5, "Islam");
var replace = newCity.join("");

document.write("City: " + city + "<br>");
document.write("After replacement: " + replace)
