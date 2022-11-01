import { auth } from '$lib/server/lucia';
import { invalid, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const name = form.get('name') as string;
		const email = form.get('email') as string;
		const password = form.get('password') as string;
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
				error.message === 'AUTH_DUPLICATE_PROVIDER_ID' ||
				error.message === 'AUTH_DUPLICATE_USER_DATA'
			) {
				return invalid(400, { message: 'Invalid input' });
			}

			return invalid(500, { message: 'Unknown error occurred' });
		}
		throw redirect(303, '/login');
	}
};
