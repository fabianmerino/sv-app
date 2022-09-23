import { auth } from '$lib/server/lucia';
import { invalid, redirect, type Actions } from '@sveltejs/kit';
import { setCookie } from 'lucia-sveltekit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (
			!email ||
			!password ||
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			!email.includes('@') ||
			!email.includes('.')
		) {
			return invalid(400, { message: 'Invalid email or password' });
		}
		try {
			const authenticateUser = await auth.authenticateUser('email', email, password);
			setCookie(cookies, ...authenticateUser.cookies);
		} catch (e) {
			const err = e as Error;
			if (
				err.message === 'AUTH_INVALID_IDENTIFIER_TOKEN' ||
				err.message === 'AUTH_INVALID_PASSWORD'
			) {
				return invalid(400, { message: 'Invalid email or password' });
			}
			console.error(e);
			return invalid(500, { message: 'Internal server error' });
		}
		throw redirect(307, '/login');
	}
};
