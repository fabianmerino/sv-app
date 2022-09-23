import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true, sass: true }),

	kit: {
		adapter: vercel(),
		alias: {
			utils: 'src/utils',
			'utils/*': 'src/utils/*',
			models: 'src/models',
			'models/*': 'src/models/*',
			stores: 'src/stores',
			'stores/*': 'src/stores/*'
		}
	}
};

export default config;
