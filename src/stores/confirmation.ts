import { writable } from 'svelte/store';

// eg.
// {
//   "text":        "Do you really want to delete the selectedItem",
//   "yesCallback": function() {...},
//   "noCallback":  function() {...},
// }
interface Confirmation {
	text?: string;
	yesCallback?: CallableFunction;
	noCallback?: CallableFunction;
}

export const confirmation = writable<Confirmation>({});

/**
 * @param {String}   text
 * @param {Function} [yesCallback]
 * @param {Function} [noCallback]
 */
export function confirm(text: string, yesCallback: CallableFunction, noCallback: CallableFunction) {
	confirmation.set({
		text: text,
		yesCallback: yesCallback,
		noCallback: noCallback
	});
}

export function resetConfirmation() {
	confirmation.set({});
}
