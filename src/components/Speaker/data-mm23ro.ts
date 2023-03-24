import type { Speaker } from './speaker';
import { Track } from './speaker';

export const SpeakersData: Speaker[] = [
    {
        name: 'Ray Bogman',
        photo: 'assets/speakers/mm23ro/raybogman.png',
        company: 'Adobe',
        companyTitle: 'Head of Commerce, Customer Engineering EMEA',
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Marius Străjeru',
        photo: 'assets/speakers/mm23ro/mariusstrajeru.jpg',
        company: 'Arnia',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Răzvan Bradea',
        photo: 'assets/speakers/mm23ro/razvanbradea.jpg',
        company: 'Adobe',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Łukasz Bajsarowicz',
        photo: 'assets/speakers/mm23ro/lukaszbajsarowicz.png',
        company: undefined,
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Mathias Schreiber',
        photo: 'assets/speakers/mm23ro/mathiasschreiber.jpg',
        company: 'Meet Magento Asociation',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Ciprian Cazacu',
        photo: 'assets/speakers/mm23ro/cipriancazacu.png',
        company: 'easySales',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Alexandru Balaci',
        photo: 'assets/speakers/mm23ro/alexandrubalaci.jpg',
        company: 'Revo',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Vlad Marincaș',
        photo: 'assets/speakers/mm23ro/vladmarincas.png',
        company: 'Aqurate',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
];