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
		const username = form.get('email') as string;
		const password = form.get('password') as string;
		if (
			!username ||
			!password ||
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!validateEmail(username)
		) {
			return fail(400, { message: 'Invalid params' });
		}
		try {
			const user = await auth.createUser('username', username, {
				password,
				attributes: {
					username
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
				return fail(400, { message: 'Invalid input' });
			}
			console.log(error);

			return fail(500, { message: 'Unknown error occurred' });
		}
	}
};
