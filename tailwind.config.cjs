/** @type {import('tailwindcss').Config} */
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
                'sm': '767px',
                // => @media (min-width: 767px) { ... }
                'md': '1024px',
                // => @media (min-width: 1024px) { ... }
                'lg': '1368px',
                // => @media (min-width: 1368px) { ... }
                'xl': '1368px',
                // => @media (min-width: 1368px) { ... }
                '2xl': '1920px',
                // => @media (min-width: 1920px) { ... }
            },

            // Used as leading-{object-key}. *Note: same as default. Added here for easier use
            // lineHeight: {
            //     none: '1',
            //     tight: '1.25',
            //     snug: '1.375',
            //     normal: '1.5',
            //     relaxed: '1.625',
            //     loose: '2',
            //     3: '.75rem',
            //     4: '1rem',
            //     5: '1.25rem',
            //     6: '1.5rem',
            //     7: '1.75rem',
            //     8: '2rem',
            //     9: '2.25rem',
            //     10: '2.5rem',
            // },

            // Used as tracking-{object-key}. *Note: same as default. Added here for easier use
            // letterSpacing: {
            //     tighter: '-0.05em',
            //     tight: '-0.025em',
            //     normal: '0em',
            //     wide: '0.025em',
            //     wider: '0.05em',
            //     widest: '0.1em',
            // },

            // Used as text-{object-key}. *Note: same as default. Added here for easier use
            // fontSize: {
            //     '2xs': ['0.625rem', { lineHeight: '1rem' }],
            //     xs: ['0.75rem', { lineHeight: '1rem' }],
            //     sm: ['0.875rem', { lineHeight: '1.25rem' }],
            //     base: ['1rem', { lineHeight: '1.5rem' }],
            //     lg: ['1.125rem', { lineHeight: '1.75rem' }],
            //     xl: ['1.25rem', { lineHeight: '1.75rem' }],
            //     '2xl': ['1.5rem', { lineHeight: '2rem' }],
            //     '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            //     '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            //     '5xl': ['3rem', { lineHeight: '1' }],
            //     '6xl': ['3.75rem', { lineHeight: '1' }],
            //     '7xl': ['4.5rem', { lineHeight: '1' }],
            //     '8xl': ['6rem', { lineHeight: '1' }],
            //     '9xl': ['8rem', { lineHeight: '1' }],
            // },

            // *Note: same as default. Added here for easier use
            // 'text-decoration': [
            //     'underline', // Used as underline
            //     'line-through', // Used as line-through
            //     'no-underline' // Used as no-underline
            // ],

            // *Note: same as default. Added here for easier use
            // 'text-transform': [
            //     'none', // Used as none
            //     'lowercase', // Used as lowercase
            //     'capitalize', // Used as capitalize
            //     'uppercase' // Used as uppercase
            // ],

            // Used as font-{object-key}. *Note: same as default. Added here for easier use
            // fontWeight: {
            //     thin: '100',
            //     extralight: '200',
            //     light: '300',
            //     normal: '400',
            //     medium: '500',
            //     semibold: '600',
            //     bold: '700',
            //     extrabold: '800',
            //     black: '900',
            // },

            // Used as p-{object-key}, py-{object-key}, px-{object-key}, m-{object-key}, etc. *Note: same as default. Added here for easier use
            spacing: {
                // px: '1px',
                // 0: '0px',
                // 0.5: '0.125rem',
                // 1: '0.25rem',
                // 1.5: '0.375rem',
                // 2: '0.5rem',
                // 2.5: '0.625rem',
                // 3: '0.75rem',
                // 3.5: '0.875rem',
                // 4: '1rem',
                // 5: '1.25rem',
                // 6: '1.5rem',
                // 7: '1.75rem',
                // 8: '2rem',
                // 9: '2.25rem',
                // 10: '2.5rem',
                // 11: '2.75rem',
                // 12: '3rem',
                // 14: '3.5rem',
                // 16: '4rem',
                18: '4.5rem',
                // 20: '5rem',
                // 24: '6rem',
                26: '6.5rem',
                // 28: '7rem',
                // 32: '8rem',
                // 36: '9rem',
                // 40: '10rem',
                // 44: '11rem',
                // 48: '12rem',
                // 52: '13rem',
                // 56: '14rem',
                // 60: '15rem',
                // 64: '16rem',
                // 72: '18rem',
                // 80: '20rem',
                // 96: '24rem',
            },

            // Used as rounded-{object-key}. For "DEFAULT" is not necessary. *Note: same as default. Added here for easier use
            // borderRadius: {
            //     none: '0px',
            //     sm: '0.125rem',
            //     DEFAULT: '0.25rem',
            //     md: '0.375rem',
            //     lg: '0.5rem',
            //     xl: '0.75rem',
            //     '2xl': '1rem',
            //     '3xl': '1.5rem',
            //     full: '50%',
            // },

            // Used as border-{object-key}. For "DEFAULT" is not necessary. *Note: same as default. Added here for easier use
            // borderWidth: {
            //     0: '0px',
            //     DEFAULT: '1px',
            //     2: '2px',
            //     4: '4px',
            //     8: '8px',
            // },

            // Used as opacity-{object-key}. *Note: same as default. Added here for easier use
            // opacity: {
            //     0: '0',
            //     5: '0.05',
            //     10: '0.1',
            //     20: '0.2',
            //     25: '0.25',
            //     30: '0.3',
            //     40: '0.4',
            //     50: '0.5',
            //     60: '0.6',
            //     70: '0.7',
            //     75: '0.75',
            //     80: '0.8',
            //     90: '0.9',
            //     95: '0.95',
            //     100: '1',
            // },

            // Used as shadow-{object-key}. For "DEFAULT" is not necessary. *Note: same as default. Added here for easier use
            // boxShadow: {
            //     sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            //     DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            //     md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            //     lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            //     xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            //     '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            //     inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            //     none: 'none',
            // },

			colors: {
                transparent: '#00000000',
                black: '#000',
                white: '#fff',
                orange: {
                    50: '#fef4f2',
                    100: '#fde8e5',
                    200: '#fbd1cc',
                    300: '#f9b3aa',
                    400: '#f58577',
                    500: '#f26655',
                    600: '#ef402a',
                    700: '#bf3322',
                    800: '#99291b',
                    900: '#601a11'
                },
                purple: {
                    50: '#f1f0f3',
                    100: '#e3e0e6',
                    200: '#c7c2ce',
                    300: '#b4adbc',
                    400: '#90859c',
                    500: '#453359',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#291440',
                    900: '#170030'
                },
                gray: {
                    50: '#f6f5f6',
                    100: '#ececed',
                    200: '#e2e1e3',
                    300: '#c6c4c8',
                    400: '#a9a6ac',
                    500: '#827e86',
                    600: '#5d5762',
                    700: '#36303d',
                    800: '#231b2a',
                    900: '#100818'
                },
                'white-opacity': {
                    100: '#ffffff0f',
                    200: '#ffffff1f',
                    300: '#ffffff29',
                    400: '#ffffff3d',
                    500: '#ffffff66',
                    600: '#ffffff85',
                    700: '#ffffffad',
                    800: '#ffffffcc',
                    900: '#ffffffeb'
                },
                'black-opacity': {
                    50: '#000000eb',
                    100: '#2424240a',
                    200: '#2424241f',
                    300: '#2424241f',
                    400: '#24242433',
                    500: '#2424245c',
                    600: '#2424247a',
                    700: '#242424a3',
                    800: '#242424cc',
                    900: '#242424eb'
                },
            },

            // Used as text-{object-key} or text-{object-key}-{object-key}
            textColor: ({ theme }) => ({
                ...theme('colors'),
            }),

            // Used as bg-{object-key} or bg-{object-key}-{object-key}
            backgroundColor: ({ theme }) => ({
                ...theme('colors'),
            }),

            backgroundImage: {
                'logo': "url('/src/assets/logos/logo.svg')",
                'logo-footer': "url('/src/assets/logos/logo-footer.svg')",
                'logo-magento': "url('/src/assets/logos/magento-association.png')",
                'newsletter': "url('/src/assets/banners/newsletter.png')",
                'hamburger': "url('/src/assets/icons/hamburger.svg')",
                'close': "url('/src/assets/icons/close.svg')",
                'facebook': "url('/src/assets/icons/facebook.svg')",
                'linkedin': "url('/src/assets/icons/linkedin.svg')",
                'twitter': "url('/src/assets/icons/twitter.svg')",
                'youtube': "url('/src/assets/icons/youtube.svg')",
                'mail': "url('/src/assets/icons/mail.svg')",
                'phone': "url('/src/assets/icons/phone.svg')",
                'z-logo': "url('/src/assets/banners/z_logo.png')",
            },

            // Used as border-{object-key} or border-{object-key}-{object-key}
            borderColor: ({ theme }) => ({
                ...theme('colors'),
            }),

            container: {
                center: true,
                padding: '1.5rem'
            },

            maxWidth: {
                32: spacing['32'],
                48: spacing['48'],
            },
		},
	},
    plugins: [],
}
