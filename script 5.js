
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  document.getElementById("header1").style.height = "90px";
  document.getElementById("exp").innerText = "";
  document.getElementById("exp").style.position = "absolute";
  document.getElementById("ABOUT").innerText = "";
  document.getElementById("ABOUT").style.position = "absolute";
  document.getElementById("CONTACT").innerText = "";
  document.getElementById("CONTACT").style.position = "absolute";
  document.getElementById("HOME").innerText = "";
  document.getElementById("HOME").style.position = "absolute";
  document.getElementById("searchbar").setAttribute("size", "1.5");
  document.getElementById("LOG-OUT").style.fontSize = "13px";
  document.getElementById("LOG-OUT").style.top = "2px";
  document.getElementById("image").style.height = "34px";
  document.getElementById('div2').style.width = '320px';
  document.getElementById("Mark1").innerText = "";
  document.getElementById("Mark2").innerText = "";
  document.getElementById("LOGO").style.top = "13px";

  const boxes = document.querySelectorAll('#box');
  for (let i = 0; i < boxes.length; i++) { boxes[i].style.width = '320px'; }
 }
