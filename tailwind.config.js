/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#030412",
				midnight: "#06091F",
				navy: "#161A31",
				indigo: "#1F1E39",
				storm: "#282B4B",
				royal: "#5C33CC",
				lavender: "#7A57DB",
				sand: "#D6995C",
			},
		},
	},
	plugins: [],
};
