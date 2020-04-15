function cToF() {
  var c = document.getElementById("celcius").value;
  c = (9*c + 160)/5;
  var f = document.getElementById("result").innerHTML = c + " ‏°F";

}
