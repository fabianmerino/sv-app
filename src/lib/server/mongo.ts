import mongoose, { Connection } from 'mongoose';
import { env } from '$env/dynamic/private';

const connection: Connection = mongoose.createConnection(env.MONGODB_URI);
connection.useDb(env.MONGODB_DB);

export default connection;
