/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {
    extend: {
        colors: {
           "blue1": "#3061af",
           "blue2": "#3b71ca",
           "dark1": "#262626",
           "dark2": "#4b5563",
           "light1": "#d9e4f3",
           "light2": "#e4ebf6",
           "light3": "#f1f2f4",
           "light4": "#f5f8fc"
        }
    },
},
darkMode: "class",
plugins: [require("tw-elements/dist/plugin.cjs")]
}
