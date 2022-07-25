import { writable } from 'svelte/store';
import CommonHelper from '$utils/CommonHelper';
import type { Toast } from '$types/common';

export const toasts = writable<Toast[]>([]);

export function addInfoToast(message: string, duration = 4000) {
	return addToast(message, 'info', duration);
}

export function addSuccessToast(message: string, duration = 3000) {
	return addToast(message, 'success', duration);
}

export function addErrorToast(message: string, duration = 4500) {
	return addToast(message, 'error', duration);
}

export function addWarningToast(message: string, duration = 4500) {
	return addToast(message, 'warning', duration);
}

export function addToast(
	message: string,
	type: 'success' | 'error' | 'warning' | 'info',
	duration = 4000
) {
	duration = duration || 4000;
	const toast: Toast = {
		message: message,
		type: type,
		duration: duration,
		timeout: setTimeout(() => {
			removeToast(toast);
		}, duration)
	};

	toasts.update((t) => {
		removeToastFromArray(t, toast.message);

		CommonHelper.pushOrReplaceByKey(t, toast, 'message');

		return t;
	});
}

export function removeToast(messageOrToast: string | Toast) {
	toasts.update((t) => {
		removeToastFromArray(t, messageOrToast);

		return t;
	});
}

export function removeAll() {
	toasts.update((t) => {
		for (const toast of t) {
			removeToastFromArray(t, toast);
		}

		return [];
	});
}

// Internal toast removal method (usually used to delete previous duplicated toasts).
// NB! This doesn't update the store value! Use `removeToast()` instead.
function removeToastFromArray(arr: Toast[], messageOrToast: string | Toast) {
	let toast: Toast | null;
	if (typeof messageOrToast == 'string') {
		toast = CommonHelper.findByKey(arr, 'message', messageOrToast);
	} else {
		toast = messageOrToast;
	}

	if (!toast) {
		return;
	}

	clearTimeout(toast.timeout);
	CommonHelper.removeByKey(arr, 'message', toast.message);
}
