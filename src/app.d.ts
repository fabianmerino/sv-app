/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		getSession: import('lucia-sveltekit/types').GetSession;
		setSession: import('lucia-sveltekit/types').SetSession;
		clearSession: import('lucia-sveltekit/types').ClearSession;
	}
	// interface PageData {}
	// interface Platform {}
}

declare module '$env/static/private' {
	export const APP_SECRET: string;
	export const MONGODB_URI: string;
}

/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('$lib/server/lucia').Auth;
	type UserAttributes = {
		name: string;
		email?: string;
		username: string;
		createdAt?: Date;
		updatedAt?: Date;
	};
}
