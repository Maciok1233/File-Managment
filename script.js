document.addEventListener('contextmenu', event => event.preventDefault());

function myFunction2() {
  alert("This page is password protected. Please enter the password to view the content.");


  var password;
  var pass1="xd";

  password=prompt('Please enter your password to view this page!',' ');

  if (password==pass1) {
     document.getElementById("div").style.animationPlayState = "running";
     document.getElementById("div").style.pointerEvents = "auto";
     document.getElementById("div2").style.pointerEvents = "none";
     function1();
     Test2 = 1;  
     document.getElementById('body1').style.overflow = "visible";   
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     document.getElementById('div2').style.width = '200px';
     document.getElementById("main-button").innerHTML = "🔓";
    }
    else {
      document.getElementById("main-button").innerHTML = "Files Unlocked 🔓";
    }
  }
  else if (password = " " || "") {
     }
  else
     {
      alert('Incorrect Password!');
      }

    }
