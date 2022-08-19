import { auth } from '$lib/server/lucia';
import type { Action } from '@sveltejs/kit';

export const POST: Action = async ({ request, setHeaders }) => {
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

		console.log(createdUser);

		setHeaders({ 'Set-Cookie': createdUser.cookies });
		return {
			location: '/'
		};
	} catch (e) {
		const error = e as Error;
		if (
			error.message === 'AUTH_DUPLICATE_IDENTIFIER_TOKEN' ||
			error.message === 'AUTH_DUPLICATE_USER_DATA'
		) {
			return { errors: { message: 'Username already taken' } };
		}

		return {
			status: 500,
			errors: { message: 'Unknown error occurred' }
		};
	}
};
