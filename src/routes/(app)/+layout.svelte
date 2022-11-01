<script lang="ts">
	import { page } from '$app/stores';
	import Drawer from '$lib/base/drawer.svelte';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page, () => {
		console.log('Session change');
	});
</script>

<Drawer>
	<slot />
</Drawer>
