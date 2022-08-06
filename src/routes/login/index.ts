import { auth } from '$lib/server/lucia';
import type { RequestHandler } from '@sveltejs/kit';
import type { Error } from 'lucia-sveltekit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const email = body.get('email') as string;
	const password = body.get('password') as string;
	if (!email || !password) {
		return {
			status: 400
		};
	}
	try {
		const authenticateUser = await auth.authenticateUser('email', email, password);
		return {
			status: 302,
			headers: {
				'set-cookie': authenticateUser.cookies,
				location: '/'
			}
		};
	} catch (e) {
		const error = e as Error;
		if (
			error.message === 'AUTH_INVALID_IDENTIFIER_TOKEN' ||
			error.message === 'AUTH_INVALID_PASSWORD'
		) {
			return {
				status: 400,
				body: {
					error: 'Incorrect email or password'
				}
			};
		}
		return {
			status: 500,
			body: {
				error: 'Unknown error occurred'
			}
		};
	}
};
