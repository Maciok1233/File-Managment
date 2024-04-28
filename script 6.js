setInterval(function() {
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

if (screenWidth < 1501 || screenHeight < 801) {
  document.getElementById("Mark1").innerText = "";
  document.getElementById("Mark2").innerText = "";
  document.getElementById("ABOUT").innerText = "";
  document.getElementById("ABOUT").style.position = "absolute";
  document.getElementById("CONTACT").innerText = "";
  document.getElementById("CONTACT").style.position = "absolute";
 }
else {
  document.getElementById("Mark1").innerText = "Private";
  document.getElementById("Mark2").innerText = "Private"; 
}
}, 100);
