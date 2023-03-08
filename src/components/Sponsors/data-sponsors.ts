import type { Sponsor } from './sponsor';
import { SponsorPackage } from './sponsor';

export const SponsorsData: Sponsor[] = [
    {
        name: 'cyber_Folks',
        logo: 'assets/sponsors/cyberfolks.svg',
        url: 'https://cyberfolks.ro/',
        package: SponsorPackage.Platinum,
        description: '',
    },
    {
        name: 'Apsis',
        logo: 'assets/sponsors/apsisai.svg',
        url: 'https://apsis.ai/',
        package: SponsorPackage.Gold,
        description: 'Apsis AI is an AI-powered Visual Search to remove slow and inaccurate textual searches and promote product discovery across domains, from real world images to shops',
    },
    {
        name: 'Aqurate',
        logo: 'assets/sponsors/aqurate.svg',
        url: 'https://hubs.li/Q01FPxL10',
        package: SponsorPackage.Gold,
        description: 'Aqurate is an AI-powered tool that helps merchants boost conversion rates, AOV, and customer retention through personalization.',
    },
    {
        name: 'EasySales',
        logo: 'assets/sponsors/easysales.svg',
        url: 'https://easysales.ro/',
        package: SponsorPackage.Gold,
        description: 'EasySales is a SaaS platform that helps brands and retailers to list their products on relevant marketplaces, with no technical knowledge!',
    },
    {
        name: 'eBay',
        logo: 'assets/sponsors/ebay.svg',
        url: 'https://www.ebay.com',
        package: SponsorPackage.Silver,
        description: 'eBay offers Romanian small and medium businesses members of Meet Magento a unique Personal Program to grow their business globally and sell to 134 million buyers all over the world - completely for free.',
    },
    {
        name: 'Clever++',
        logo: 'assets/sponsors/clever.svg',
        url: 'https://cleverplusplus.com/',
        package: SponsorPackage.Silver,
        description: "Clever++ is a Magento provider and solution specialist.",
    },
    {
        name: 'ZentoShop',
        logo: 'assets/sponsors/zentoshop.svg',
        url: 'https://www.zentoshop.com',
        package: SponsorPackage.Organizer,
        description: 'Zento is a Software-as-a-Service (SaaS) solution built on top of Magento 2 and offers fully managed eCommerce solutions with state-of-the-art Cloud hosting to medium and large merchants.',
    },
];