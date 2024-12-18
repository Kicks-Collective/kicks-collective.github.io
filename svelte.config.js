import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoImport from 'sveltekit-autoimport';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleMissingId: ({ event, resolve }) => {
				return;
			},

            handleHttpError: ({ event, error }) => {
                return;
            },
		}
	},

    extensions: ['.svelte', '.md', '.svx', '.mp4', '.mov'],
    preprocess: [
        vitePreprocess(),
        autoImport({
			include: ['**/*.(svelte)'],
			components: ['./src/lib/components/', { name: './src' }]
		})
    ],
};

export default config;