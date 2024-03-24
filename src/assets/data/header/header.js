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


export default header;
