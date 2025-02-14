/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
    theme: {
        extend: {
            colors: {
                main: {
                    900: "#d0d0d0",
                    800: "#F7f7f7",
                    700: "#989898",
                    600: "#F9F9F9",
                },
                black: "#2C2C2C",
            },
            fontFamily: {
                sans: ["TT Fors"],
                serif: ["TT Fors"],
            },
            container: {
                center: true,
                padding: "1.25rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
