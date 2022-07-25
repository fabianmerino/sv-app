import { writable } from 'svelte/store';

export const sidebarMini = writable(true);

export function toggleSidebarMini() {
	sidebarMini.update((n) => !n);
}
