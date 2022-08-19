<script lang="ts">
	import '../app.scss';
	import { Lucia } from 'lucia-sveltekit/client';
	import Drawer from '$lib/base/drawer.svelte';
</script>

<Lucia on:error={(e) => console.error(e)}>
	<Drawer>
		<slot />
	</Drawer>
</Lucia>
