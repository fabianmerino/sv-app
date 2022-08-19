import lucia from 'lucia-sveltekit';
import mongooseAdapter from '@lucia-sveltekit/adapter-mongoose';
import mongoose from 'mongoose';
import { dev } from '$app/env';
import { RefreshToken, User } from 'models/Auth';

mongoose.model('user', User);
mongoose.model('refresh_token', RefreshToken);

export const auth = lucia({
	adapter: mongooseAdapter(mongoose, import.meta.env.VITE_MONGODB_URI),
	secret: import.meta.env.VITE_APP_SECRET,
	env: dev ? 'DEV' : 'PROD'
});
