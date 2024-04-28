setInterval(function() {
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

if (screenWidth < 1501 || screenHeight < 801) {
  document.getElementById("Mark1").innerText = "";
  document.getElementById("Mark2").innerText = "";
 }
}, 100);
