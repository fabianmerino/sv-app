<script lang="ts">
	import '../app.scss';
	import { Lucia } from 'lucia-sveltekit/client';
	import { session } from '$app/stores';
	import Drawer from '$lib/base/drawer.svelte';
</script>

<Lucia {session}>
	<Drawer>
		<slot />
	</Drawer>
</Lucia>
