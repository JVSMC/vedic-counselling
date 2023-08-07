// Data to change language
const language = {
    en: {
        navHome: "Home",
        navService: "Services",
        navServiceOp1: "Personal",
        navServiceOp2: "Companies",
        navContact: "Contact",
        navMedia: "Media",
        navMediaOp1: "Blog",
        navMediaOp2: "Podcast",
    },
    es: {
        navHome: "Inicio",
        navService: "Servicios",
        navServiceOp1: "Personal",
        navServiceOp2: "Empresas",
        navContact: "Contacto",
        navMedia: "Medios",
        navMediaOp1: "Blog",
        navMediaOp2: "Pódcast",
    }
};


// function changeLanguage() {
//     let checkbox = document.getElementById("chboxLan");
//     let elements = document.querySelectorAll('.lang');

//     if (checkbox.checked) { //Spanish checkbox.checked
//         elements.forEach(element => {
//             let key = element.getAttribute('data-key');
//             element.textContent = language['es'][key]
//         });

//     } else {
//         elements.forEach(element => {
//             let key = element.getAttribute('data-key');
//             element.textContent = language['en'][key]
//         });
//     }
// }


function changeLanguage(){
    let checkbox = document.getElementById("chboxLan");
    let actuallink = window.location.href;
    let endPartUrl = actuallink.split('/'); // return an array
    let newUrl = '';
    if (checkbox.checked == true){
        //console.log('--| Hey |--');
        endPartUrl[endPartUrl.length -1] = 'es/' + endPartUrl[endPartUrl.length -1];
        newUrl =  endPartUrl.join('/');
        //console.log(endPartUrl);
        //console.log(newUrl);
        window.location.href = newUrl;
    }else {
        //console.log('--| NoHey |--')
        let x = endPartUrl.indexOf('es');
        endPartUrl.splice(x,1);
        //console.log(endPartUrl);
        newUrl =  endPartUrl.join('/');
        //console.log(newUrl);
        window.location.href = newUrl;
    }
}