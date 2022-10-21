import { auth } from '$lib/server/lucia';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = auth.handleServerSession();
