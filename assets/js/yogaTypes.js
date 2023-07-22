// Data to change yoga types
const yogaTypes = {
    dar: {
        tittle: 'Dharma',
        description: 'Soul purpose and career.'
    },
    art: {
        tittle: 'Artha',
        description: 'Goals, values, means and resources and prosperity in general.'
    },
    kam: {
        tittle: 'Kama',
        description: 'Sexuality, sensuality, happiness, relationships, creativity.'
    },
    mok: {
        tittle: 'Moksha',
        description: 'Liberation of consciousness, Yoga, Vedanta and Self-realization.'
    },
    aro: {
        tittle: 'Arogya',
        description: 'Ayurveda and Yogic psychology, health and wellness for body and mind.'
    }
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
