import type { Speaker } from './speaker';
import { Track } from './speaker';

export const SpeakersData: Speaker[] = [
    {
        name: 'Marius Străjeru',
        photo: '/assets/speakers/mm24ro/mariusstrajeru.jpg',
        company: 'Arnia',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Ivan Chepurnyi',
        photo: '/assets/speakers/mm24ro/ivanchepurnyi.jpg',
        company: 'EcomDev',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Mathias Schreiber',
        photo: '/assets/speakers/mm24ro/mathiasschreiber.jpg',
        company: 'Magento Asociation',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Denisa Constantinoiu',
        photo: '/assets/speakers/mm24ro/denisaconstantinoiu.jpg',
        company: 'Kollab',
        companyTitle: undefined,
        track: Track.Business,
        featured: true,
    },
    {
        name: 'Alin Alexandru',
        photo: '/assets/speakers/mm24ro/alinalexandru.jpg',
        company: 'Innobyte',
        companyTitle: 'CTO',
        track: Track.Technical,
        featured: false,
    },
];