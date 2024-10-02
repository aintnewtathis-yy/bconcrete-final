/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
        aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
            14: "14",
            15: "15",
            16: "16",
		},
		extend: {
			colors: {
                gray: {
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
    plugins: [require("@tailwindcss/aspect-ratio")],
};
