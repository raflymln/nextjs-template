// @ts-check

module.exports = /** @satisfies {import('tailwindcss').Config} */ ({
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", //
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000",
            white: "#fff",
        },
        fontFamily: {},
        screens: {
            xs: "360px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1440px",
        },
        extend: {},
    },
    plugins: [],
});
