function sumDigits() {
    var value = document.getElementById("thenumber").value,
        sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  
  var rezultat = document.getElementById("result");
  rezultat.value = sum;
}