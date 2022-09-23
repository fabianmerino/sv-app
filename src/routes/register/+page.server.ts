import { auth } from '$lib/server/lucia';
import { invalid, redirect, type Actions } from '@sveltejs/kit';
import { setCookie } from 'lucia-sveltekit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const body = await request.formData();
		const name = body.get('name') as string;
		const email = body.get('email') as string;
		const password = body.get('password') as string;
		if (!name || !email || !password) {
			return { errors: { message: 'Invalid name, email or password' } };
		}
		try {
			const createdUser = await auth.createUser('email', email, {
				password,
				user_data: {
					name,
					email
				}
			});
			setCookie(cookies, ...createdUser.cookies);
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
