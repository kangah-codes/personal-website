module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				"gradient-x": "gradient-x 5s ease infinite",
				"gradient-y": "gradient-y 5s ease infinite",
				"gradient-xy": "gradient-xy 5s ease infinite",
				blob: "blob 7s linear infinite",
				widen: "widen 7s linear infinite",
			},
			keyframes: {
				"gradient-y": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "center top",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "center center",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"gradient-xy": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": { transform: "translate(30px, -50px) scale(1.2)" },
					"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
					"100%": { transform: "translate(0px, 0px) scale(1)" },
				},
				widen: {
					"0%": {
						transform: "scale(1)",
					},
					"33%": { transform: "scale(1.1)" },
					"66%": { transform: "scale(0.9)" },
					"100%": { transform: "scale(1)" },
				},
			},
			colors: {
				orange: {
					50: "#faf7ed",
					100: "#faf3d0",
					200: "#f6e895",
					300: "#f1d54f",
					400: "#e7b51b",
					500: "#df930a",
					600: "#c96e06",
					700: "#a2520a",
					800: "#7f4010",
					900: "#643311",
					light: "#ff9d2f",
					DEFAULT: "#ff6126",
				},
				baseColour: {
					DEFAULT: "#F6EC2C",
				},
				borderColour: {
					DEFAULT: "#8989894d",
					light: "#0c0c0cb8",
				},
			},
		},
		fontFamily: {
			sans: ["Gilroy Medium"],
			serif: ["Gilroy Medium"],
			mono: ["Gilroy Medium"],
			display: ["Gilroy Medium"],
			body: ["Gilroy Medium"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
