export type Speaker = {
    name: string;
    photo: any;
    company?: string;
    companyTitle?: string;
    featured?: boolean;
    track: Track;
};

export enum Track { 
    'Technical',
    'Business',
};