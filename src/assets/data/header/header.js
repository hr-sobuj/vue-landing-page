import Logo from '@/assets/images/logo.png';

const header = {};

header.content = {
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
            url: '#',
            name: 'Pages'
        },
        {
            url: '#',
            name: 'Pricing'
        },
        {
            url: '#',
            name: 'Portfolio'
        },
        {
            url: '#',
            name: 'Blog'
        },
    ],
    btnTxt: 'Get Started'
};


export default header;

