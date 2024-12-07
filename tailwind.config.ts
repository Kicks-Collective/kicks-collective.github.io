import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			primary: '#f04f39',
			altalt: '#434c65',
			alt: '#49F5FF',
			white: 'white'
		},
		extend: {
			fontFamily: {
                valera: ['VarelaRound', 'sans-serif']
            },
			animation: {
				cross: 'cross 1s'
			}
		}
	},

	plugins: []
} satisfies Config;
