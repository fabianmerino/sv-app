<script lang="ts">
	import '../app.scss';
	import { handleSilentRefresh } from 'lucia-sveltekit/client';

	handleSilentRefresh();
</script>

<slot />
