let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side');
let exit = document.querySelector('.exit');
let sideLinks = document.querySelectorAll('.side__link');

//When user clicks on burger icon, the side menu is revealed
burger.onclick = function() {
  burger.style.display = "none";
  exit.style.display = "block";
  sideMenu.style.display = "block";
}

//When the user clicks on the X, the side menu is hidden
exit.onclick = function() {
  sideMenu.style.display = "none";
  exit.style.display = "none";
  burger.style.display = "block";
}

//When any of the links are clicked, the side menu is hidden 
for (let i = 0; i < sideLinks.length; i++) {
    sideLinks[i].addEventListener('click', function() {
        sideMenu.style.display = "none";
        exit.style.display = "none";
        burger.style.display = "block";
    });
}