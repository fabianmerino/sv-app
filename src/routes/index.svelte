<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (session.lucia) return {};

		return { status: 302, redirect: '/login' };
	};
</script>

<script lang="ts">
	import { sidebarMini } from 'stores/views';
	import Sidebar from '$lib/Sidebar/sidebar.svelte';
	import Toolbar from '$lib/Toolbar/toolbar.svelte';
</script>

<svelte:head>
	<title>Gráficos | Culqui</title>
</svelte:head>

<div class="flex">
	<!-- <Sidebar /> -->
	<!-- <main class="flex justify-start p-4 w-full">
		<Toolbar />
	</main> -->
</div>
