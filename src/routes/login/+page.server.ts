import { auth } from '$lib/server/lucia';
import type { Action } from '@sveltejs/kit';

export const POST: Action = async ({ request, setHeaders }) => {
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
		return {
			errors: {
				message: 'Invalid email or password'
			}
		};
	}
	try {
		const authenticateUser = await auth.authenticateUser('email', email, password);
		setHeaders({
			'Set-Cookie': authenticateUser.cookies
		});
		return {
			location: '/'
		};
	} catch (e) {
		const err = e as Error;
		if (
			err.message === 'AUTH_INVALID_IDENTIFIER_TOKEN' ||
			err.message === 'AUTH_INVALID_PASSWORD'
		) {
			return {
				errors: {
					message: 'Invalid email or password'
				}
			};
		}
		return {
			status: 500,
			errors: {
				message: 'Internal server error'
			}
		};
	}
};
