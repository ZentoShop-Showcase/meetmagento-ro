export type Sponsor = {
    name: string;
    logo: string;
    url: string;
    package: SponsorPackage;
    description?: string;
};

export enum SponsorPackage { 
    'Platinum',
    'Gold',
    'Silver',
    'Organizer',
};