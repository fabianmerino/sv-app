/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		getSession: import('@lucia-auth/sveltekit').GetSession;
		setSession: import('@lucia-auth/sveltekit').SetSession;
		clearSession: import('@lucia-auth/sveltekit').ClearSession;
		validate: import('@lucia-auth/sveltekit').Validate;
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
		username: string;
		createdAt?: Date;
		updatedAt?: Date;
	};
}
