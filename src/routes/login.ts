import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { env } from '$env/dynamic/private';

export async function POST({ request }: RequestEvent): Promise<RequestHandlerOutput> {
	const body = await request.formData();
	const email = body.get('email') as string;
	const password = body.get('password') as string;

	const user = await User.findOne({ email });
	if (!user) {
		return {
			status: 401,
			body: {
				error: 'User not found'
			}
		};
	}
	if (!user.authenticate(password)) {
		return {
			status: 401,
			body: {
				error: 'Invalid credentials'
			}
		};
	}
	const token = jwt.sign({ id: user._id }, env.APP_SECRET);
	return {
		status: 200,
		body: {
			// token: 'token'
			token,
			user
		}
	};
}
