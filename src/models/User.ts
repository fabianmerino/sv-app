// Path: src\models\User.ts
import crypto from 'crypto';
import { Schema, Types, Document } from 'mongoose';
// import connection from '$lib/server/mongo';

export declare interface IUser {
	name: string;
	email: string;
	salt: string;
	hashed_password: string;
	organization: Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

declare interface IUserModel extends IUser, Document {
	_password: string;
	makeSalt: () => string;
	authenticate: (plainText: string) => boolean;
	encryptPassword: (password: string) => string;
}

export const UserSchema = new Schema<IUserModel>(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			minlength: 3,
			maxlength: 20
		},
		hashed_password: {
			type: String,
			required: true,
			minlength: 8,
			maxlength: 20
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		organization: {
			type: Types.ObjectId,
			ref: 'Organization',
			required: true
		},
		salt: String
	},
	{ timestamps: true }
);

UserSchema.virtual('password')
	.get(function () {
		return this._password;
	})
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashed_password = this.encryptPassword(password);
	});

UserSchema.methods = {
	authenticate: function (plainText: string) {
		return this.encryptPassword(plainText) === this.hashed_password;
	},
	encryptPassword: async function (password: string) {
		if (!password) return '';
		try {
			return crypto.createHmac('sha256', this.salt).update(password).digest('hex');
		} catch (err) {
			return '';
		}
	},
	makeSalt: function () {
		return crypto.randomBytes(16).toString('base64');
	}
};

// export default connection.model<IUserModel>('User', UserSchema, 'users');
