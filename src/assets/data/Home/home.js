import brandImg1 from '@/assets/images/home/brands/img-1.png';
import brandImg2 from '@/assets/images/home/brands/img-2.png';
import brandImg3 from '@/assets/images/home/brands/img-3.png';
import brandImg4 from '@/assets/images/home/brands/img-4.png';
import growIcon1 from '@/assets/images/home/grow/icon1.svg';
import growIcon2 from '@/assets/images/home/grow/icon2.svg';
import growIcon3 from '@/assets/images/home/grow/icon3.svg';
import heroImg1 from '@/assets/images/home/hero/hero-img-1.png';
import heroImg2 from '@/assets/images/home/hero/hero-img-2.png';
import heroImg3 from '@/assets/images/home/hero/hero-img-3.png';
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

export default home;
