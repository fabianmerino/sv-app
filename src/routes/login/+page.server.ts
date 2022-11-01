import { auth } from '$lib/server/lucia';
import { invalid, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (
			!email ||
			!password ||
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			!validateEmail(email)
		) {
			return invalid(400, { message: 'Invalid email or password' });
		}
		try {
			const user = await auth.authenticateUser('email', email, password);
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (e) {
			const err = e as Error;
			if (
				err.message === 'AUTH_INVALID_PROVIDER_TOKEN' ||
				err.message === 'AUTH_INVALID_PASSWORD'
			) {
				return invalid(400, { message: 'Invalid email or password' });
			}
			console.error(e);
			return invalid(500, { message: 'Internal server error' });
		}
	}
};

// Regex to validate email addresses
const EMAIL_REGEX = new RegExp(
	'^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
);

function validateEmail(email: string) {
	return EMAIL_REGEX.test(email);
}
