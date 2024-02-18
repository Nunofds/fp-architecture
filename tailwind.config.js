/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            primaryColor: "",
            secondaryColor: "#f2994a",
            bgColor: "#181818",
            textColor: "#bbc4c4",
            colorWhite: "#ffffff",
            borderColor: "#424242",
        },
    },
    plugins: [],
};
