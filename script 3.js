let bug = 0;
let checkTest = 0;
let Test3 = 0;

document.getElementById("LOG-OUT").style.position = "absolute";
   document.getElementById("LOG-OUT").style.opacity = 0;
   document.getElementById('searchbar').style.opacity = 0;
   document.getElementById('searchbar').disabled = true;

    let myElement = document.getElementById("image");
    let Test = 0;
    let Test2 = 0;
    let czasTrzymania = {};
    let czasTrzymaniaLimit = 4; // czas trzymania w sekundach
    let czasTrzymaniaInterval = {};
    let oryginalneTeksty = {};

function function2() {
if (Test2 == 1) {
function1();
Test = 1;
document.getElementById('searchbar').style.opacity = 1;
document.getElementById('searchbar').style.position = "relative";
document.getElementById('searchbar').disabled = false;
myElement.addEventListener("click", function() {
location.reload();
  });
 }
}

function exp_on() {
  if (Test3 == 1) {
  confirm = confirm("Warning! This is expermental software. It may contain bugs. Do you want to continue?");
  if (confirm == true) {
  checkTest = 1;
  function1();
   }
    else {location.reload();}
  }
  else {alert("Not accesible at the momment");}
}

  let obiekty = document.getElementsByClassName('myDiv');

  function function1() {
    if (checkTest == 1) {
    
      for (let i = 0; i < obiekty.length; i++) {
        let obiekt = obiekty[i];
        czasTrzymania[obiekt.id] = 0;
        oryginalneTeksty[obiekt.id] = obiekt.innerText; // Store the original text

        obiekt.addEventListener('mouseover', function() {
            czasTrzymania[obiekt.id] = 0;
            obiekt.style.opacity = 1; // Ensure opacity is set to 1 when hovering

            czasTrzymaniaInterval[obiekt.id] = setInterval(function() {
                czasTrzymania[obiekt.id]++;
                if (czasTrzymania[obiekt.id] >= czasTrzymaniaLimit) {
                    czasTrzymania[obiekt.id] = 0;
                    clearInterval(czasTrzymaniaInterval[obiekt.id]);
                    obiekt.style.opacity = 0; // Set opacity to 0 before changing text
                    setTimeout(function() {
                        let onClickAttribute = obiekt.getAttribute('href');
                        let text = obiekt.innerText;
                        let newText = text;

                        if (onClickAttribute !== null && onClickAttribute !== undefined && onClickAttribute.trim() !== '') {
                            if (onClickAttribute.endsWith('.png') || onClickAttribute.endsWith('.jpg') || onClickAttribute.endsWith('.zip')) {
                                obiekt.innerText = newText + " (ok)";
                              bug = bug + 1;
                            } else {
                                obiekt.innerText = newText + " (incorrect file format)";
                              bug = bug + 1;
                            }
                        } else {
                            obiekt.innerText = newText + " (empty)";
                          bug = bug + 1;
                        }
                        obiekt.style.opacity = 1; // Set opacity back to 1 after changing text

                      if (bug > 1) {
                          location.reload();
                      }
                      
                    }, 500);
                }
            }, 1000); // Check every second
        });

        obiekt.addEventListener('mouseout', function() {
          if (bug = 1) {
            bug = 0;
          }
          if (czasTrzymaniaInterval[obiekt.id] > 3000) {
            bug = bug - 1;
          }
            czasTrzymania[obiekt.id] = 0;
            clearInterval(czasTrzymaniaInterval[obiekt.id]);
            obiekt.style.opacity = 0; // Set opacity to 0 before restoring original text
            setTimeout(function() {
                obiekt.innerText = oryginalneTeksty[obiekt.id]; // Restore original text
                obiekt.style.opacity = 1; // Set opacity back to 1 after restoring original text
            }, 500);
        });
    }
  }
}

// JavaScript code for searching

function search_animal() {
  if (Test == 1) {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('animals');

  for (i = 0; i < x.length; i++) {

    if (!x[i].innerText.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}
}
