/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface Session {
		lucia: import('lucia-sveltekit/types').SvelteKitSession<{ name: string; email: string }>;
	}
	// interface Stuff {}
	interface PrivateEnv {
		APP_SECRET: string;
		MONGODB_URI: string;
		MONGODB_DB: string;
	}
}
