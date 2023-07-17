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

// --| Navbar |--

/* Change color Navbar */
window.addEventListener('scroll', function () {
  let navBar =  document.querySelector('.navbar');
  let navLogo =  document.querySelector('.logo');
  let navText = document.querySelector('.navText');
  let changeLanguaje = document.querySelector('.switch');
  let footer = document.querySelector('.change-color');

  //Positions
  let footerPosition = footer.offsetTop;
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0 && scrollPosition < (footerPosition - 50) ){
    navBar.classList.add("navBlur");
  }else if ((scrollPosition + 10) >= footerPosition) { //scrollPosition > 0 && scrollPosition < footerPosition
    navBar.classList.remove("navBlur");
    navBar.classList.add("navBlur2");
    navLogo.classList.add("changeColorLogo");
    navText.classList.add("changeColor");
    changeLanguaje.classList.add('changeColorSw');
    // console.log('Change color to white');
  }else {
    navText.classList.remove("changeColor");
    navLogo.classList.remove("changeColorLogo");
    navBar.classList.remove("navBlur");
    navBar.classList.remove("navBlur2");
    changeLanguaje.classList.remove('changeColorSw');
    // console.log('Change color to transparent');
  }
});

/* sidenav */
function openNav() {
  // document.getElementById("firstPart").classList.add('seeSidenav');
  if (window.innerWidth > 480 && window.innerWidth < 960){
    document.getElementById("firstPart").classList.toggle('seeSidenav');
    
  }else if (window.innerWidth < 480){
    document.getElementById("secondPart").classList.toggle('seeSidenav');
  }

  const elementos = document.querySelectorAll(".navOpenBlur");
    // Recorrer los elementos seleccionados
    elementos.forEach(elemento => {
        // Realizar acciones con cada elemento
        if (elemento.style.filter === "brightness(0.7)") {
          // Si el filtro está aplicado, quitarlo
          elemento.style.filter = "none";
        } else {
          // Si el filtro no está aplicado, agregarlo
          elemento.style.filter = "brightness(0.7)";
        }
    });

}
// Verificar el ancho de la pantalla cuando se cambia el tamaño de la ventana
//window.addEventListener('resize', openNav);
