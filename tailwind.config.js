/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#91776D',
                sec: '#C4A484',
                third: '#C4A484',
                primaryDark: '#8b4513'
            },
            backgroundImage: {
                'main-bg': "url('/src/assets/image/background.jpeg')"
            },
            fontSize: {
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.75rem',
                h4: '1.5rem',
                h5: '1.25rem',
                h6: '1rem'
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '992px',
                xl: '1140px',
                xxl: '1320px'
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '992px',
                    xl: '1140px',
                    xxl: '1320px'
                }
            }
        }
    },
    plugins: []
};

