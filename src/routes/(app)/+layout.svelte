<script lang="ts">
	import { handleSilentRefresh } from 'lucia-sveltekit/client';
	import Drawer from '$lib/base/drawer.svelte';

	handleSilentRefresh();
</script>

<Drawer>
	<slot />
</Drawer>
