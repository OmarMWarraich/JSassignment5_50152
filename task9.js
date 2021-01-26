
let str = "<p><strong><em>Only print this</em></strong></p>"
str = str.replaceAll("\\<.*?\\>", "");
document.write("Output:\n",str)