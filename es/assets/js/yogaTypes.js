// Data to change yoga types
const yogaTypes = {
    dar: {
        tittle: 'Dharma',
        description: 'Es la verdadera vocación de una persona, aquello para lo que nace. Se refiere a la expresión individual de cada persona del propósito de su alma. Cuando se actúa en consecuencia, es un principio que beneficiará no solo a su propio dharma, sino también a su expresión más amplia o universal. Lo que naciste para hacer.'
    },
    art: {
        tittle: 'Artha',
        description: 'Se refiere a los medios y recursos que necesito para desempeñar mi papel en el mundo. ¿Dónde pongo valor? ¿Tengo suficiente? ¿Mis cosas me hacen feliz o me roban la alegría? ¿Tengo miedo de tener más? ¿Tengo miedo de no tener más? ¿Qué significa la riqueza para mí además del dinero? Objetivos, valores, medios y recursos y prosperidad en general para cumplir tu dharma.'
    },
    kam: {
        tittle: 'Kama',
        description: 'Se relaciona con el placer, y eso puede ser sensualidad, sexualidad, pero también es arte, belleza, intimidad, compañerismo, relaciones, creatividad y amabilidad: es lo que trae una sensación de deleite a nuestras vidas. Y puede haber placer incluso en el sacrificio.'
    },
    mok: {
        tittle: 'Moksha',
        description: 'Moksha o liberación, es ampliamente considerado como el pináculo de los purusharthas. Todo el juego es que quieres ser libre; quieres libertad de y libertad para. Libertad del sufrimiento y de aquello que te impide darte cuenta de tu propio poder y conexión con la vida. Y quieres libertad para expresar tu propia creatividad lo más plenamente posible, libertad para vivir plenamente y ser feliz.'
    },
    aro: {
        tittle: 'Arogya',
        description: 'Arogya es una palabra sánscrita que significa "bienestar general" y "salud mental, corporal y espiritual". En términos generales, significa vivir una vida saludable sin enfermedades y tener una salud completa en mente y cuerpo. Arogya se puede utilizar para referirse a una amplia gama de temas, incluidos yoga asana, ayurveda, meditación, pranayama, japa mantra y mucho más.'
    },
};

function yogaType(yogaT){
    let elementsToChange = document.querySelectorAll('.yogaTypeDesc');
    // console.log(yogaT);
    elementsToChange.forEach(element => {
        let key = element.getAttribute('data-key');
        console.log(key);
        element.textContent = yogaTypes[yogaT][key];
    });
}
