module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'about-us': 'url("/src/assets/img/about-us.png")',
                'home-project': 'url("/src/assets/img/lastest-project.png")'
            },
            fontFamily: {
                'brand': ['Raleway'],
                'brand2': ['Open Sans']
            },
            colors: {
                "brand-color": "#fdce16",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}