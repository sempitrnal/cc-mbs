/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "450px",
				lsm: "550px",
				"3xl": "1700px",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
