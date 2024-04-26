function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function deleteCookie() {
  let user2 = "";
  setCookie("username", user2, 30);
}




function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
     user = "2";
     document.getElementById("LOG-OUT").style.position = "relative";
     document.getElementById("LOG-OUT").style.opacity = 1;
     document.getElementById("div").style.pointerEvents = "auto";
     document.getElementById("div2").style.pointerEvents = "none";
     document.getElementById('body1').style.overflow = "visible";
     function1();
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     document.getElementById("main-button").innerHTML = "🔐";
    }
    else {
      document.getElementById("main-button").innerHTML = "Files Unlocked 🔓";
    }
  } 
  
  else {
    user = prompt("Please enter password:", "");
    if (user == "Macko3214") {
    if (user != "" && user != null) {
      setCookie("username", user, 30);
      var element0 = document.getElementById('image');
      element0.ondblclick();
      location.reload();
    }
  }
    else if (user == " " || user == null) {}
    else {alert("Incorrect Password!");}

  }
}