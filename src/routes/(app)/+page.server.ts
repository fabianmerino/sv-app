import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	try {
		const session = await auth.validateRequestByCookie(request);
		if (!session) throw redirect(307, '/login');
		return {};
	} catch (error) {
		console.error(error);
		throw redirect(307, '/login');
	}
};
