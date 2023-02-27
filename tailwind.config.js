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
                Higher: ["Higher"],
                AldotheApache: ["AldotheApache"],
            },
            height: {
                '432': '108rem',
            },
        },
    },
    plugins: [],
};