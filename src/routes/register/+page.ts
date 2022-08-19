import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ session }) => {
	if (!session.lucia) return {};

	throw redirect(302, '/');
};
