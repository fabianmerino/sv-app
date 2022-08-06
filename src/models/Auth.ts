import { Schema, Types } from 'mongoose';

export const User = new Schema(
	{
		_id: String,
		identifier_token: {
			type: String,
			unique: true,
			required: true
		},
		hashed_password: String,
		name: {
			type: String,
			required: true,
			unique: true,
			minlength: 3,
			maxlength: 20
		},
		email: {
			type: String,
			required: true,
			unique: true
		}
		// organization: {
		// 	type: Types.ObjectId,
		// 	ref: 'Organization',
		// 	required: true
		// }
	},
	{ _id: false, timestamps: true }
);

export const RefreshToken = new Schema({
	refresh_token: String,
	user_id: String,
	user: {
		type: Types.ObjectId,
		ref: 'User'
	}
});
