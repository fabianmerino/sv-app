import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { validateEmail } from 'utils/helpers';
import type { PageServerLoad, Actions } from './$types';

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		if (
			!username ||
			!password ||
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!validateEmail(username)
		) {
			return fail(400, { message: 'Invalid email or password' });
		}
		try {
			const user = await auth.authenticateUser('username', username, password);
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (e) {
			const err = e as Error;
			if (err.message === 'AUTH_INVALID_PROVIDER_ID' || err.message === 'AUTH_INVALID_PASSWORD') {
				return fail(400, { message: 'Invalid email or password' });
			}
			console.error(err);
			return fail(500, { message: 'Internal server error' });
		}
	}
};
