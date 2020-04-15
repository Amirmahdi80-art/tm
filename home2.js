function FToc(){
  let f = document.getElementById("fahrenheit").value;
  f = (5*f-16)/9;
  let c = document.getElementById("result2").innerHTML = f + " °C";
}
