module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}", //
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        corePlugins: {
            container: false,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
        },
        fontFamily: {},
        extend: {},
    },
    variants: {
        extend: {
            screens: {
                "3xl": "1920px",
            },
        },
    },
    plugins: [],
};
