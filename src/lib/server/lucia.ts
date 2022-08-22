import lucia from 'lucia-sveltekit';
import mongooseAdapter from '@lucia-sveltekit/adapter-mongoose';
import mongoose from 'mongoose';
import { dev } from '$app/env';
import { APP_SECRET, MONGODB_URI } from '$env/static/private';
import { RefreshToken, User } from 'models/Auth';

mongoose.model('user', User);
mongoose.model('refresh_token', RefreshToken);

console.log({ APP_SECRET, MONGODB_URI });

export const auth = lucia({
	adapter: mongooseAdapter(mongoose, MONGODB_URI),
	secret: APP_SECRET,
	env: dev ? 'DEV' : 'PROD'
});
