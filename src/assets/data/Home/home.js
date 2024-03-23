import appStoreImg from '@/assets/images/footer/app-store.png';
import playImg from '@/assets/images/footer/google-play.png';
import instagramIcon from '@/assets/images/footer/instagram.svg';
import linkedinIcon from '@/assets/images/footer/linkedin.svg';
import twitterIcon from '@/assets/images/footer/twitter.svg';
import appImg from '@/assets/images/home/app/app-img.png';
import brandImg1 from '@/assets/images/home/brands/img-1.png';
import brandImg2 from '@/assets/images/home/brands/img-2.png';
import brandImg3 from '@/assets/images/home/brands/img-3.png';
import brandImg4 from '@/assets/images/home/brands/img-4.png';
import chooseImg from '@/assets/images/home/choose/choose-img.png';
import chooseShape1 from '@/assets/images/home/choose/shape-1.svg';
import chooseShape2 from '@/assets/images/home/choose/shape-2.svg';
import chooseShape3 from '@/assets/images/home/choose/shape-3.svg';
import chooseShape4 from '@/assets/images/home/choose/shape-4.svg';
import growIcon1 from '@/assets/images/home/grow/icon1.svg';
import growIcon2 from '@/assets/images/home/grow/icon2.svg';
import growIcon3 from '@/assets/images/home/grow/icon3.svg';
import heroImg1 from '@/assets/images/home/hero/hero-img-1.png';
import heroImg2 from '@/assets/images/home/hero/hero-img-2.png';
import heroImg3 from '@/assets/images/home/hero/hero-img-3.png';
import performanceShape from '@/assets/images/home/performance/arrow-shape.svg';
import performanceImg from '@/assets/images/home/performance/performance.png';
import securityImg from "@/assets/images/home/security/security-img.png";
import Logo from '@/assets/images/logo.png';

const home = {};

home.navContents = {
    logo: {
        src: Logo,
        alt: 'Logo',
    },
    links: [
        {
            url: '/',
            name: 'Home'
        },
        {
            url: '/pages',
            name: 'Pages'
        },
        {
            url: '/pricing',
            name: 'Pricing'
        },
        {
            url: '/portfolio',
            name: 'Portfolio'
        },
        {
            url: '/blog',
            name: 'Blog'
        },
        {
            url: '/contact',
            name: 'Contact'
        }
    ],
    btnTxt: 'Get Started Free'
};

home.heroContents = {
    heroImg1: {
        src: heroImg1,
        alt: 'Hero Image 1'
    },
    heroImg2: {
        src: heroImg2,
        alt: 'Hero Image 2'
    },
    heroImg3: {
        src: heroImg3,
        alt: 'Hero Image 3'
    },
    title: 'Smart-Thinking & Innovative Solution.',
    description: 'Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.',
    btn1: 'Discover More',
    btn2: 'Explore Service',
    points: [
        'Get 15 days free trial',
        'No credit card is required',
        'Cancel anytime'
    ]
};

home.brandContents = {
    sliderItems: [
        { src: brandImg1, alt: 'Brand Image 1' },
        { src: brandImg2, alt: 'Brand Image 2' },
        { src: brandImg3, alt: 'Brand Image 3' },
        { src: brandImg4, alt: 'Brand Image 4' },
        { src: brandImg3, alt: 'Brand Image 3' },
    ]
}

home.growContents = {
    title: 'How To Grow Your Business',
    description: 'Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.',
    cards: [
        {
            icon: growIcon1,
            title: 'Active User Analytics',
            description: 'Class aptent taciti sociosqu litora torquen conubia nostram.'
        },
        {
            icon: growIcon2,
            title: 'Smart Coding Development',
            description: 'Morbi eget aliquet finibus, best condimentum aliquet quam.'
        },
        {
            icon: growIcon3,
            title: 'User Friendly Interface',
            description: 'Quisque magna, sollicitudin vitae, lobortis feugiat arcu.'
        }
    ]
}


home.securityContents = {
    title: 'Better Security To Better Protection An Experience Of Strength.',
    description: 'Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.',
    extras: [
        {
            title: 'Well Organised User Interface',
            description: 'Etiam id euismod odio. Ut euismod sem a lacus fringilla.',
        },
        {
            title: 'Completely Bug Free',
            description: 'Cras eleifend leo ac varius tristique suspendisse.',
        }
    ],
    securityImg: {
        src: securityImg,
        alt: 'Security Image'
    }
}

home.performanceContent = {
    title: 'Performance Is The Key To Most People Achieving A Better Future',
    description: 'Etiam euismod odio euismod lacus fringilla hendrer.',
    accordion: {
        items: [
            {
                title: 'Custom Edit Tool Application',
                description: 'Cupidatat laboris non duis non et deserunt in nisi do consequat excepteur.'
            },
            {
                title: 'Built In Safty Chat Mode Enabled',
                description: 'Fugiat culpa nulla eu cupidatat occaecat nisi.'
            },
            {
                title: 'Foster Trust Builds System Always Open',
                description: 'Do ut fugiat pariatur pariatur ipsum fugiat occaecat tempor voluptate nostrud excepteur sint.'
            },
            {
                title: 'Foster Trust Builds System Always Open',
                description: 'Do ut fugiat pariatur pariatur ipsum fugiat occaecat tempor voluptate nostrud excepteur sint.'
            },
            {
                title: 'Create Auto Layouts In App Interface',
                description: 'Amet minim elit nulla exercitation in aute adipisicing aliquip do consequat reprehenderit.'
            }
        ],
    },
    performanceImg: {
        src: performanceImg,
        alt: 'Performance Image'
    },
    performanceShape: {
        src: performanceShape,
        alt: 'Performance Shape'
    }
}

home.choose = {
    title: 'Why Will You Choose Our Application',
    description: 'Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.',
    chooseImg: {
        src: chooseImg,
        alt: 'Choose Image'
    },
    cards: [
        {
            icon: chooseShape1,
            title: 'Creative Ideas',
            description: 'Class aptent taciti sociq u litora torquen conub.'
        },
        {
            icon: chooseShape2,
            title: 'Awesome Design',
            description: 'Integer a elit pellentesqu e semper sem ultricies.'
        },
        {
            icon: chooseShape3,
            title: 'Best Features',
            description: 'Fusce risus lorem pulvin ar eu posuere vitae.'
        },
        {
            icon: chooseShape4,
            title: 'Easy Solutions',
            description: 'Aenean eget nulla eu dui malesuad convallis vel.'
        },
    ]
}

home.app = {
    title: 'Ready To Use Our App With No Hidden Malware',
    description: 'Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus velit quis. Nunc mollis venenatis metus nec aliquet.',
    appImg: {
        src: appImg,
        alt: 'App Image'
    }
}


home.help = {
    title: 'We Help To GrowYour Business',
    description: 'Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.',
    items: [
        {
            number: '142+',
            description: 'New Features'
        },
        {
            number: '28k+',
            description: 'APP Download'
        },
        {
            number: '53M+',
            description: 'Active Users'
        },
        {
            number: '90%',
            description: 'Positive Rate'
        },
    ]
}


home.say = {
    title: 'What People Say',
    description: 'Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue mollis suscipit.',
    cards: [
        {
            img: {
                src: sayImg1,
                alt: 'Say Image 1'
            },
            speech: '“I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.”',
            name: 'Jenny Wilson',
            designation: 'Project Manager at Microsoft'
        },
        {
            img: {
                src: sayImg2,
                alt: 'Say Image 2'
            },
            speech: '“I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content”',
            name: 'Robert Fox',
            designation: 'Founder at Brain.co'
        },
        {
            img: {
                src: sayImg3,
                alt: 'Say Image 3'
            },
            speech: '“Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”',
            name: 'Kristin Watson',
            designation: 'UX Designer at Google'
        },
    ]
}

home.footer = {
    logo: Logo,
    description: 'Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.',
    phone: '+8801797972527',
    email: 'sobujhd@gmail.com',
    playIcon: playImg,
    appStore: appStoreImg,
    usefulLinks: [
        {
            name: 'Feature',
            url: '#'
        },
        {
            name: 'About',
            url: '#'
        },
        {
            name: 'Service',
            url: '#'
        },
        {
            name: 'Team',
            url: '#'
        },
    ],
    helpAndSupport: [
        {
            name: 'FAQ',
            url: '#'
        },
        {
            name: 'Blog',
            url: '#'
        },
        {
            name: 'Contact Us',
            url: '#'
        },
        {
            name: 'Support',
            url: '#'
        },
    ],
    resources: [
        {
            name: 'Guides & Resources',
            url: '#'
        },
        {
            name: 'Teams',
            url: '#'
        },
        {
            name: 'Tools',
            url: '#'
        },
        {
            name: 'Support',
            url: '#'
        },
    ],
    copyRight: '© All Right Reserved',
    socialIcon: [
        instagramIcon,
        twitterIcon,
        linkedinIcon
    ]
}

export default home;
