/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5'
				},
				aqua: '#1ABAD0',
				'dark-blue': '#364A5A'
			},
			spacing: {
				88: '22rem'
			},
			width: {
				100: '28rem'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#1ABAD0',
					'dark-blue': '#364A5A'
				}
			},
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#1ABAD0',
					'base-content': '#364A5A'
				}
			}
		],
		darkTheme: 'dark'
	}
};
