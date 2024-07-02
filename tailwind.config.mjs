/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	
	theme: {
		extend: {
			fontFamily: { 
                "radio": ['Radio Canada Big', 'sans-serif'] 
            } 
		},
		screens: {
			'xs': '540px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'5xl': '150px',
			'8xl': '88rem',
		  },
	},
	plugins: [
		require('flowbite/plugin'),
	
	],
}
