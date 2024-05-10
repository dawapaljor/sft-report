/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textUnderlineOffset: {
				3: '3px',
				10: '20px'
			  },
			UnderlineColor: {
				orange: 'orange'
			}
		},
	},
	plugins: [],
}
