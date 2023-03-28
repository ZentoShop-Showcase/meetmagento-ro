export type Speaker = {
    name: string;
    photo: string;
    company?: string;
    companyTitle?: string;
    featured?: boolean;
    track: Track;
};

export enum Track { 
    'Technical',
    'Business',
};