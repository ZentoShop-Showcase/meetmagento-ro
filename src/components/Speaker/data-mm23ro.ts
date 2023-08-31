import type { Speaker } from './speaker';
import { Track } from './speaker';

import RayBogman from '../../assets/speakers/mm23ro/raybogman.jpg';
import MariusStrajeru from '../../assets/speakers/mm23ro/mariusstrajeru.jpg';
import RazvanBradea from '../../assets/speakers/mm23ro/razvanbradea.jpg';
import IvanChepurnyi from '../../assets/speakers/mm23ro/ivanchepurnyi.jpg';
import LukaszBajsarowicz from '../../assets/speakers/mm23ro/lukaszbajsarowicz.jpg';
import MathiasSchreiber from '../../assets/speakers/mm23ro/mathiasschreiber.jpg';
import RomanBalteanu from '../../assets/speakers/mm23ro/romanbalteanu.jpg';
import CiprianCazacu from '../../assets/speakers/mm23ro/cipriancazacu.jpg';
import AlexandruBalaci from '../../assets/speakers/mm23ro/alexandrubalaci.jpg';
import VladMarincas from '../../assets/speakers/mm23ro/vladmarincas.jpg';
import ArturPajkert from '../../assets/speakers/mm23ro/arturpajkert.jpg';
import CosminCostea from '../../assets/speakers/mm23ro/cosmincostea.jpg';
import CalinPetrar from '../../assets/speakers/mm23ro/calinpetrar.jpg';
import SorinTrifu from '../../assets/speakers/mm23ro/sorintrifu.jpg';
import CristianGlavan from '../../assets/speakers/mm23ro/cristianglavan.jpg';
import GeorgeMusat from '../../assets/speakers/mm23ro/georgemusat.jpg';
import PaulApostu from '../../assets/speakers/mm23ro/paulapostu.jpg';
import ValentineSandu from '../../assets/speakers/mm23ro/valentinsandu.jpg';
import SorinDumitrescu from '../../assets/speakers/mm23ro/sorindumitrescu.jpg';
import AlinAlexandru from '../../assets/speakers/mm23ro/alinalexandru.jpg';
import AttillaKiraly from '../../assets/speakers/mm23ro/attilakiraly.jpg';

export const SpeakersData: Speaker[] = [
    {
        name: 'Ray Bogman',
        photo: RayBogman,
        company: 'Adobe',
        companyTitle: 'Head of Commerce, Customer Engineering EMEA',
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Marius Străjeru',
        photo: MariusStrajeru,
        company: 'Arnia',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Răzvan Bradea',
        photo: RazvanBradea,
        company: 'Adobe',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Ivan Chepurnyi',
        photo: IvanChepurnyi,
        company: 'EcomDev',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Łukasz Bajsarowicz',
        photo: LukaszBajsarowicz,
        company: 'SwiftOtter',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Mathias Schreiber',
        photo: MathiasSchreiber,
        company: 'Magento Asociation',
        companyTitle: undefined,
        track: Track.Technical,
        featured: true,
    },
    {
        name: 'Roman Bălțeanu',
        photo: RomanBalteanu,
        company: 'Google',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Ciprian Cazacu',
        photo: CiprianCazacu,
        company: 'easySales',
        companyTitle: 'CEO and co-founder',
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Alexandru Balaci',
        photo: AlexandruBalaci,
        company: 'Mokka',
        companyTitle: 'CEO',
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Vlad Marincaș',
        photo: VladMarincas,
        company: 'Aqurate',
        companyTitle: 'CEO and co-founder',
        track: Track.Business,
        featured: true,
    },
    {
        name: 'Artur Pajkert',
        photo: ArturPajkert,
        company: 'cyber_Folks',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Cosmin Costea',
        photo: CosminCostea,
        company: 'theMarketer',
        companyTitle: 'VP of Sales CEE',
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Călin Petrar',
        photo: CalinPetrar,
        company: 'Times New Roman',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Sorin Trifu',
        photo: SorinTrifu,
        company: 'HOLD Marketing',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Cristian Glăvan',
        photo: CristianGlavan,
        company: 'Zitec',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'George Mușat',
        photo: GeorgeMusat,
        company: 'Zitec',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Paul Apostu',
        photo: PaulApostu,
        company: 'Ecommerce-Today',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
    {
        name: 'Valentin Sandu',
        photo: ValentineSandu,
        company: 'R7 Digital Commerce',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Sorin Dumitrescu',
        photo: SorinDumitrescu,
        company: 'Bunnyshell',
        companyTitle: undefined,
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Alin Alexandru',
        photo: AlinAlexandru,
        company: 'Innobyte',
        companyTitle: 'CTO',
        track: Track.Technical,
        featured: false,
    },
    {
        name: 'Attila Kiraly',
        photo: AttillaKiraly,
        company: 'SEO 365',
        companyTitle: undefined,
        track: Track.Business,
        featured: false,
    },
];