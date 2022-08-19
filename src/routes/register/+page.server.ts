import { auth } from '$lib/server/lucia';
import type { Action } from '@sveltejs/kit';
import type { Error } from 'lucia-sveltekit';

export const POST: Action = async ({ request }) => {
	const body = await request.formData();
	const name = body.get('name') as string;
	const email = body.get('email') as string;
	const password = body.get('password') as string;
	if (!name || !email || !password) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
		return {
			status: 400
		};
	}
	try {
		const createUser = await auth.createUser('email', email, {
			password,
			user_data: {
				name,
				email
			}
		});

		console.log(createUser);

		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
		return {
			status: 200,
			headers: {
				'set-cookie': createUser.cookies
			}
		};
	} catch (e) {
		const error = e as Error;
		if (
			error.message === 'AUTH_DUPLICATE_IDENTIFIER_TOKEN' ||
			error.message === 'AUTH_DUPLICATE_USER_DATA'
		) {
			throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
			return {
				status: 400,
				body: {
					error: 'Username already taken'
				}
			};
		}
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
		return {
			status: 500,
			body: {
				error: 'Unknown error occurred'
			}
		};
	}
};
