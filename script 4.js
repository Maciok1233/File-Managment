let user = getCookie("username");
if (user != "") {
  let element0 = document.getElementById('image');
   element0.ondblclick();
   document.getElementById("div").style.animationPlayState = "running";
   document.getElementById("div").style.pointerEvents = "auto";
   document.getElementById("div2").style.pointerEvents = "none";
   Test2 = 1;
}