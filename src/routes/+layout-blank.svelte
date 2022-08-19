<script lang="ts">
	import '../app.scss';
	import { Lucia } from 'lucia-sveltekit/client';
	import { session } from '$app/stores';
</script>

<Lucia {session}>
	<slot />
</Lucia>
