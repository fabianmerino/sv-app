import { writable } from 'svelte/store';
import CommonHelper from '../utils/CommonHelper';

export const errors = writable({});

export function setErrors(newErrors: object) {
	errors.set(newErrors || {});
}

export function addError(name: string, message: string) {
	errors.update((e) => {
		CommonHelper.setByPath(e, name, CommonHelper.sentenize(message));
		return e;
	});
}

export function removeError(name: string) {
	errors.update((e) => {
		CommonHelper.deleteByPath(e, name);
		return e;
	});
}
