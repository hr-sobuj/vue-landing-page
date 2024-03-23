import growIcon1 from './../../images/home/grow/icon1.svg';
import growIcon2 from './../../images/home/grow/icon2.svg';
import growIcon3 from './../../images/home/grow/icon3.svg';


const home = {};

home.navContent = {
    "links": [
        {
            "url": "/",
            "name": "Home"
        },
        {
            "url": "/pages",
            "name": "Pages"
        },
        {
            "url": "/pricing",
            "name": "Pricing"
        },
        {
            "url": "/portfolio",
            "name": "Portfolio"
        },
        {
            "url": "/blog",
            "name": "Blog"
        },
        {
            "url": "/contact",
            "name": "Contact"
        }
    ],
    "btnTxt": "Get Started Free"
};

home.heroContent = {
    "title": "Smart-Thinking & Innovative Solution.",
    "description": "Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.",
    "btn1": "Discover More",
    "btn2": "Explore Service",
    "points": [
        "Get 15 days free trial",
        "No credit card is required",
        "Cancel anytime"
    ]
};

home.growContent = {
    'title': 'How To Grow Your Business',
    'description': 'Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.',
    'card': [
        {
            'icon': growIcon1,
            'title': 'Active User Analytics',
            'description': 'Class aptent taciti sociosqu litora torquen conubia nostram.'
        },
        {
            'icon': growIcon2,
            'title': 'Smart Coding Development',
            'description': 'Morbi eget aliquet finibus, best condimentum aliquet quam.'
        }
        ,
        {
            'icon': growIcon3,
            'title': 'User Friendly Interface',
            'description': 'Quisque magna, sollicitudin vitae, lobortis feugiat arcu.'
        }
    ]
}


home.securityContent = {
    title: 'Better Security To Better Protection An Experience Of Strength.',
    description: 'Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.',
    extra: [
        {
            title: 'Well Organised User Interface',
            description: 'Etiam id euismod odio. Ut euismod sem a lacus fringilla.',
        },
        {
            title: 'Completely Bug Free',
            description: 'Cras eleifend leo ac varius tristique suspendisse.',
        }
    ]
}


export default home;