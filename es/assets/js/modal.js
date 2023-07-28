const ayurvevaBullets = {
    PA: {
        iconC: 'fas fa-user',
        tittle: 'Enfoque Personalizado',
        description: 'Ayurveda reconoce que cada individuo es único, con distintas necesidades y desequilibrios. Al comprender su constitución mente-cuerpo única (dosha), Ayurveda ofrece recomendaciones personalizadas para restablecer el equilibrio y promover el bienestar general.'
    },
    HH: {
        iconC: 'fas fa-heart',
        tittle: 'Curación Holística',
        description: 'Ayurveda adopta un enfoque holístico, tratando la causa raíz en lugar de simplemente abordar los síntomas. Considera la salud como una integración armoniosa de cuerpo, mente y espíritu, centrándose en la interconexión de estos aspectos.'
    },
    MC: {
        iconC: 'fas fa-brain',
        tittle: 'Conexión Mente-Cuerpo',
        description: 'Ayurveda reconoce la profunda conexión entre la mente y el cuerpo. Reconoce que el bienestar emocional y la salud mental tienen un impacto significativo en la salud física y viceversa. A través de prácticas ayurvédicas como la meditación, el yoga y el pranayama (ejercicios de respiración), puede nutrir esta conexión mente-cuerpo, reduciendo el estrés, la ansiedad y promoviendo una sensación de calma y claridad general.'
    },
    NS: {
        iconC: 'fas fa-leaf',
        tittle: 'Natural y Sostenible',
        description: 'Ayurveda aprovecha el poder curativo de la naturaleza. Enfatiza el uso de remedios naturales, preparaciones a base de hierbas y prácticas de estilo de vida para restablecer el equilibrio y apoyar las capacidades curativas innatas del cuerpo.'
    },
    PL: {
        iconC: 'fas fa-shield-alt',
        tittle: 'Prevención y Longevidad',
        description: 'Ayurveda no se trata solo de curar dolencias sino también de prevenirlas. Te empodera con el conocimiento para tomar decisiones conscientes que promuevan la longevidad y la vitalidad. Al incorporar los principios ayurvédicos en su vida, puede fortalecer su sistema inmunológico, mejorar la digestión y mejorar la resistencia general contra las enfermedades.'
    },
};

const workplaceBullets = {
    EL: {
        iconC: 'fa-solid fa-crown',
        tittle: 'Mejorando el Liderazgo',
        description: 'El liderazgo efectivo es crucial para el éxito organizacional. Las técnicas de asesoramiento védico brindan información valiosa sobre el desarrollo del liderazgo, ayudando a los ejecutivos y gerentes a desbloquear su potencial innato.'
    },
    TC: {
        iconC: 'fas fa-hands-helping',
        tittle: 'Trabajo en Equipo y Eolaboración',
        description: 'Construir equipos cohesionados y de alto rendimiento es clave para lograr los objetivos comerciales. El asesoramiento védico ofrece estrategias para cultivar dinámicas de equipo saludables, comunicación efectiva y colaboración. Nuestro enfoque de bienestar facilita ejercicios de creación de equipos, talleres y programas de capacitación que promueven la comprensión, la confianza y la sinergia entre los miembros del equipo, lo que lleva a un mejor desempeño y compromiso.'
    },
    SW: {
        iconC: 'fas fa-heart',
        tittle: 'Reducción del Estrés y Bienestar',
        description: 'Las demandas del mundo corporativo pueden afectar el bienestar y la productividad de los empleados. El asesoramiento védico integra técnicas de manejo del estrés, prácticas de atención plena y recomendaciones de estilo de vida para apoyar el bienestar físico, mental y emocional de sus empleados.'
    },
    AV: {
        iconC: 'fas fa-compass',
        tittle: 'Alineación de Propósito y Valores',
        description: 'Conectar a los empleados con un mayor sentido de propósito y alinear sus valores con la misión de la empresa fomenta un sentido de realización y compromiso. La sabiduría védica proporciona conocimientos profundos sobre la autorrealización y la vida con propósito. A través de talleres y orientación, ayudamos a sus empleados a explorar su propósito individual y alinearlo con los objetivos colectivos de su organización, creando un sentido de significado compartido e impulsando el desempeño impulsado por la pasión.'
    },
    RC: {
        iconC: 'fas fa-handshake',
        tittle: 'Resolviendo conflicto',
        description: 'Los conflictos dentro de los equipos o entre individuos pueden impedir el progreso y obstaculizar la productividad. Vedic Counseling ofrece herramientas efectivas para manejar conflictos, mejorar la comunicación interpersonal y promover la comprensión.'
    },
    EC: {
        iconC: 'fas fa-comments',
        tittle: 'Mejorar la Comunicación',
        description: 'Nuestros servicios brindan estrategias de resolución de conflictos, talleres de comunicación y orientación para fomentar un ambiente de trabajo positivo donde prosperan la colaboración y la innovación.'
    },
};

function ayurveda(typeService, data) {
    let elementsToChange = document.querySelectorAll('.modalChange');
    let iconToChange = document.getElementById('iconModal');
    //console.log(data);
    //console.log(ayurvedaType);
    if (data == 'ayurvevaBullets'){
        //console.log(ayurvevaBullets[ayurvedaType]['iconC']);
        iconToChange.className = ayurvevaBullets[typeService]['iconC'];
        elementsToChange.forEach(element => {
            let key = element.getAttribute('data-key');
            //console.log(key);
            //console.log(ayurvevaBullets[ayurvedaType][key]);
            element.textContent = ayurvevaBullets[typeService][key];
        });
    }else if (data == 'workplaceBullets'){
        iconToChange.className = workplaceBullets[typeService]['iconC'];
        elementsToChange.forEach(element => {
            let key = element.getAttribute('data-key');
            element.textContent = workplaceBullets[typeService][key];
        });
    }
}

//Open Modal
function openModal(topic, dataBase) {
    var modal = document.getElementById('myModal');
    modal.style.display = "flex";
    ayurveda(topic, dataBase);
}
//Close Modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}
