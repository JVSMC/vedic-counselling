const ayurvevaBullets = {
    PA: {
        iconC: 'fas fa-user',
        tittle: 'Personalized Approach',
        description: 'Ayurveda recognizes that each individual is unique, with distinct needs and imbalances. By understanding your unique mind-body constitution (dosha), Ayurveda offers personalized recommendations to restore balance and promote overall wellbeing.'
    },
    HH: {
        iconC: 'fas fa-heart',
        tittle: 'Holistic Healing',
        description: 'Ayurveda takes a holistic approach, treating the root cause rather than merely addressing symptoms. It views health as a harmonious integration of body, mind, and spirit, focusing on the interconnectedness of these aspects.'
    },
    MC: {
        iconC: 'fas fa-brain',
        tittle: 'Mind-Body Connection',
        description: 'Ayurveda recognizes the profound connection between the mind and the body. It acknowledges that emotional well-being and mental health significantly impact physical health and vice versa. Through Ayurvedic practices such as meditation, yoga, and pranayama (breathing exercises), you can nurture this mind-body connection, reducing stress, anxiety, and promoting a sense of overall calm and clarity.'
    },
    NS: {
        iconC: 'fas fa-leaf',
        tittle: 'Natural and Sustainable',
        description: 'Ayurveda harnesses the healing power of nature. It emphasizes the use of natural remedies, herbal preparations, and lifestyle practices to restore balance and support the body\'s innate healing abilities'
    },
    PL: {
        iconC: 'fas fa-shield-alt',
        tittle: 'Prevention and Longevity',
        description: 'Ayurveda is not only about healing ailments but also about preventing them. It empowers you with the knowledge to make conscious choices that promote longevity and vitality. By incorporating Ayurvedic principles into your life, you can strengthen your immune system, improve digestion, and enhance overall resilience against diseases'
    },
};

const workplaceBullets = {
    EL: {
        iconC: 'fa-solid fa-crown',
        tittle: 'Enhancing Leadership',
        description: 'Effective leadership is crucial for organizational success. Vedic Counselling techniques provide valuable insights into leadership development, helping executives and managers unlock their innate potential.'
    },
    TC: {
        iconC: 'fas fa-hands-helping',
        tittle: 'Team Building and Collaboration',
        description: 'Building cohesive and high-performing teams is key to achieving business objectives. Vedic Counselling offer strategies to cultivate healthy team dynamics, effective communication, and collaboration. Our wellness approach facilitate team-building exercises, workshops, and training programs that promote understanding, trust, and synergy among team members, leading to improved performance and engagement.'
    },
    SW: {
        iconC: 'fas fa-heart',
        tittle: 'Stress Reduction and Well-being',
        description: 'The demands of the corporate world can take a toll on employee well-being and productivity. Vedic Counselling integrates stress management techniques, mindfulness practices, and lifestyle recommendations to support the physical, mental, and emotional well-being of your employees.'
    },
    AV: {
        iconC: 'fas fa-compass',
        tittle: 'Aligning Purpose and Values',
        description: 'Connecting employees to a higher sense of purpose and aligning their values with the company\'s mission fosters a sense of fulfillment and engagement. Vedic wisdom provides profound insights into self-realization and purposeful living. Through workshops and guidance, we help your employees explore their individual purpose and align it with the collective goals of your organization, creating a sense of shared meaning and driving passion-driven performance.'
    },
    RC: {
        iconC: 'fas fa-handshake',
        tittle: 'Resolving Conflict',
        description: 'Conflict within teams or between individuals can impede progress and hinder productivity. Vedic Counselling offers effective tools to manage conflicts, improve interpersonal communication, and promote understanding'
    },
    EC: {
        iconC: 'fas fa-comments',
        tittle: 'Enhancing Communication',
        description: 'Our services provide conflict resolution strategies, communication workshops, and guidance to foster a positive work environment where collaboration and innovation thrive.'
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
