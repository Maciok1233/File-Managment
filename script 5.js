if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  document.getElementById("header1").style.height = "140px";
  document.getElementById("main-button").innerHTML = "🔐";
  document.getElementById("LOG-OUT").innerText = "LG Out";
  document.getElementById("exp").innerText = "";
  document.getElementById("exp").style.position = "absolute";
  document.getElementById("HOME").innerText = "";
  document.getElementById("HOME").style.position = "absolute";
}
