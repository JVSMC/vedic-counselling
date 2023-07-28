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

//Enviar a link
function redireccionar(link) {
  console.log(link);
  window.location.href = link;
}

//Enviar fuera
function redireccionarFuera(link) {
  window.open(link, "_blank");
}

//DownloadFiles
// function downloadFiles() {
//   var enlace1 = document.createElement('a');
//   enlace1.href = 'assets/files/DETERMINAR_PRAKRUTI.pdf';
//   enlace1.download = 'DETERMINAR_PRAKRUTI.pdf';
//   document.body.appendChild(enlace1);
//   enlace1.click();
//   document.body.removeChild(enlace1);


// }

//Form
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      //this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_bwoezf5', 'template_5nmtjla', this)
          .then(function () {
              console.log('SUCCESS!');
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
          }, function (error) {
              console.log('FAILED...', error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
          });
  });
}