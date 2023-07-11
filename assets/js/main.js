//Component import
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

/* Change color Navbar */
window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navText');
  let changeLanguaje = document.querySelector('.switch');
  let footer = document.querySelector('.change-color');

  //Positions

  let footerPosition = footer.offsetTop;
  let scrollPosition = window.scrollY;

  if ((scrollPosition + 10) >= footerPosition) { //scrollPosition > 0 && scrollPosition < footerPosition
    navbar.classList.add("changeColor");
    changeLanguaje.classList.add('changeColorSw');
    // console.log('Change color to white');
  }else {
    
    navbar.classList.remove("changeColor");
    changeLanguaje.classList.remove('changeColorSw');
    // console.log('Change color to transparent');
  }
});