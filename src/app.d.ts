/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface PrivateEnv {
		APP_SECRET: string;
		MONGODB_URI: string;
	}
	interface PublicEnv {
		PUBLIC_MONGODB_URI: string;
		PUBLIC_MONGODB_DB: string;
	}
}
