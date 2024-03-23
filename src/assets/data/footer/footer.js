import appStoreImg from '@/assets/images/footer/app-store.png';
import playImg from '@/assets/images/footer/google-play.png';
import instagramIcon from '@/assets/images/footer/instagram.svg';
import linkedinIcon from '@/assets/images/footer/linkedin.svg';
import twitterIcon from '@/assets/images/footer/twitter.svg';
import Logo from '@/assets/images/logo.png';

const footer = {};

footer.content = {
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

export default footer;