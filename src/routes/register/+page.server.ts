import { auth } from '$lib/server/lucia';
import { invalid, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const body = await request.formData();
		const name = body.get('name') as string;
		const email = body.get('email') as string;
		const password = body.get('password') as string;
		if (!name || !email || !password) {
			return { errors: { message: 'Invalid name, email or password' } };
		}
		try {
			const user = await auth.createUser('email', email, {
				password,
				attributes: {
					name,
					email,
					username: email
				}
			});
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (e) {
			const error = e as Error;
			if (
				error.message === 'AUTH_DUPLICATE_IDENTIFIER_TOKEN' ||
				error.message === 'AUTH_DUPLICATE_USER_DATA'
			) {
				return invalid(400, { message: 'Invalid input' });
			}

			return invalid(500, { message: 'Unknown error occurred' });
		}
		throw redirect(303, '/login');
	}
};
