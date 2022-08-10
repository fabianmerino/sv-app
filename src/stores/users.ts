import type { IUser } from 'models/User';
import { writable } from 'svelte/store';

export const users = writable<IUser[]>([]);
