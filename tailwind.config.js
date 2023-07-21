// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        fontFamily: {
            inter: ["var(--font-inter)", ...fontFamily.sans],
        },
        screens: {
            xs: "360px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1440px",
        },
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(({ addBase }) => {
            addBase({
                "html, body": {
                    "@apply scroll-smooth scroll-pt-12": {},
                },
            });
        }),
    ],
});
