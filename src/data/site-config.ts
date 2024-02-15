export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Conan Moriarty',
    subtitle: 'CTO, Tech Lead, and Full-Stack Developer. Passionate about AI, ML, and product-led growth.',
    description: 'CTO, Tech Lead, and Full-Stack Developer. Passionate about AI, ML, and product-led growth.',
    image: {
        src: '/conan-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    // footerNavLinks: [
    //     {
    //         text: 'Contact',
    //         href: '/contact'
    //     }
    // ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/conan-moriarty-11046534/'
        }
    ],
    hero: {
        text: "Hey! I'm **Conan Moriarty**, a tech enthusiast who's navigated the seas of startup adventures, worn the CTO cape and wrote code in almost all the popular modern languages for most cloud services. From leading tech teams on quests for digital excellence to crafting mobile and web wonders, I've been there, coded that. My journey's been about making tech not just work, but work wonders. Curious about my coding escapades or up for a tech talk? Find me on <a href='https://www.github.com/conanm'>GitHub</a> or <a href='https://www.linkedin.com/in/conan-moriarty-11046534/'>Linkedin</a>. Let's make the digital world a tad more fun, shall we?.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8
};

export default siteConfig;
