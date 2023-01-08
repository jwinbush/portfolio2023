/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                extraOld: "extraOld",
                poppins: ["Poppins", "sans-serif"],
            },
            height: {
                '432': '108rem',
            },
        },
    },
    plugins: [],
};