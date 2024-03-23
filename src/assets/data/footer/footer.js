import appStoreImg from '@/assets/images/footer/app-store.png';
import playImg from '@/assets/images/footer/google-play.png';
import instagramIcon from '@/assets/images/footer/instagram.svg';
import linkedinIcon from '@/assets/images/footer/linkedin.svg';
import Logo from '@/assets/images/footer/logo.png';
import twitterIcon from '@/assets/images/footer/twitter.svg';

const footer = {};

footer.content = {
    logo: {
        src: Logo,
        alt: 'Logo'
    },
    description: 'Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.',
    phone: '+8801797972527',
    email: 'sobujhd@gmail.com',
    playIcon: {
        src: playImg,
        alt: 'Google Play Image'
    },
    appStore: {
        src: appStoreImg,
        alt: 'App Store Image'
    },
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
    socialIcons: [
        {
            src: instagramIcon,
            alt: 'Instagram',
            url: '#',
        },
        {
            src: twitterIcon,
            alt: 'Twitter',
            url: '#',
        },
        {
            src: linkedinIcon,
            alt: 'LinkedIn',
            url: '#',
        }
    ]
}

export default footer;