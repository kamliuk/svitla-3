/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            screens: {
                '3xl': '1800px'
            },
            flexGrow: {
                '2': '2',
                '3': '3',
                '10': '10',
                '26': '26'
            },
            spacing: {
                '0.75': '0.1875rem',
                '1.25': '0.3125rem',
                '4.5': '1.125rem',
                '5.5': '1.375rem',
                '9.5': '2.375rem',
                '12.25': '3.0625rem',
                '15': '3.75rem',
                '15.75': '3.9375rem',
                '16.75': '4.1875rem',
                '18.75': '4.6875rem',
                '20.5': '5.125rem',
                '21': '5.25rem',
                '23': '5.75rem',
                '26.5': '6.625rem',
                '32.25': '8.0625rem',
                '38': '9.5rem',
                '46': '11.5rem',
                '62.25': '15.5625rem',
                '68': '17rem',
                '75': '18.75rem',
                '83': '20.75rem',
                '100': '25rem',
                '1/2': '50%',
                '1/3': '33.333%',
                '2/3': '66.667%',
                '92/100': '92%'
            },
            aspectRatio: {
                '3/4': '3 / 4'
            },
            colors: {
                'neutral-400': '#B5B6B1',
                'orange-100': '#F7EFE4',
                'stone-700': '#524940',
                'stone-900': '#241B15'
            },
            fontFamily: {
                'sans': ['"Libre Franklin", sans-serif'],
                'serif': ['"Literata", serif']
            },
            fontWeight: {
                'light': '275'
            },
            fontSize: {
                '1.5sm': '0.9375rem',
                '1.5lg': '1.1875rem',
                '10xl': '12rem'
            },
            lineHeight: {
                'compact': '0.8',
                '5.5': '22px'
            }
        },
    },
    plugins: [],
}

