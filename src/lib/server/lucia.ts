import lucia from 'lucia-sveltekit';
import mongooseAdapter from '@lucia-sveltekit/adapter-mongoose';
import mongoose from 'mongoose';
import { dev } from '$app/env';
import { APP_SECRET, MONGODB_URI } from '$env/static/private';
import { RefreshToken, User } from 'models/Auth';

mongoose.model('user', User);
mongoose.model('refresh_token', RefreshToken);

export const auth = lucia<{ name: string; email: string }>({
	adapter: mongooseAdapter(mongoose, MONGODB_URI),
	secret: APP_SECRET,
	env: dev ? 'DEV' : 'PROD'
});
