import lucia from 'lucia-sveltekit';
import mongooseAdapter from '@lucia-sveltekit/adapter-mongoose';
import mongoose from 'mongoose';
import { dev } from '$app/env';
import { env } from '$env/dynamic/private';
import { RefreshToken, User } from '../../models/Auth';

mongoose.model('user', User);
mongoose.model('refresh_token', RefreshToken);

export const auth = lucia<{ name: string; email: string }>({
	adapter: mongooseAdapter(mongoose, env.MONGODB_URI),
	secret: env.APP_SECRET,
	env: dev ? 'DEV' : 'PROD'
});
