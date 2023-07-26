// Data to change yoga types
const yogaTypes = {
    dar: {
        tittle: 'Dharma',
        description: 'Is the true calling of a person, what they are born to do. It refers each person\'s individual expression of his / her soul\'s purpose. When acted upon, it is a principle that will benefit not just your own dharma but the larger or universal expression of it as well. What you were born to do.'
    },
    art: {
        tittle: 'Artha',
        description: 'Refers to means and resources that I need to play my role in the world. Where do I place value? Do I have enough? Are my things making me happy, or are they stealing my joy? Am I afraid of having more? Am I afraid of not having more? What does wealth mean to me besides money?goals, values, means and resources and prosperity in general to fulfill your dharma'
    },
    kam: {
        tittle: 'Kama',
        description: 'Relates to pleasure, and that can be sensuality, sexuality, but it\'s also art, beauty, intimacy, fellowship, relationships, creativity and kindness—it\'s what brings a sense of delight to our lives. And there can be pleasure even in sacrifice.'
    },
    mok: {
        tittle: 'Moksha',
        description: 'Moksha or liberation, is widely considered to be the pinnacle of the purusharthas. The whole game is that you want to be free; you want freedom from and freedom to. Freedom from suffering and from that which is blocking you from realizing your own power and connection to life. And you want freedom to express your own creativity as fully as possible, freedom to live fully and be happy.'
    },
    aro: {
        tittle: 'Arogya',
        description: 'Arogya is a Sanskrit word that means "overall well-being" and "health of mind, body and spirit." Generally speaking, it means living a healthy life without disease and having complete health in mind and body. Arogya can be used to refer to a wide range of topics, including yoga asana, Ayurveda, meditation, pranayama, japa mantra and much more.'
    },
    mor: {
        tittle: 'Approach',
        description: 'Vedic counseling is based upon an understanding of dharma, or our individual nature, and karma or our patterns of action, and how we can achieve all the main goals of life, including right relationship, right vocation and the fulfillment of all our duties and responsibilities to the whole of life. Such foundational Vedic knowledge is necessary for any Vedic or yogic applications.'
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
