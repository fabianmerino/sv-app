<script lang="ts">
	import Sidebar from '$lib/Sidebar/sidebar.svelte';
	import Toolbar from '$lib/Toolbar/toolbar.svelte';
	import { sidebarMini } from '../stores/views';
</script>

<svelte:head>
	<title>Culqui</title>
</svelte:head>

<div class="flex">
	<Sidebar />
	<main
		class="flex justify-start ml-16 p-4 transition-all duration-500 ease-in-out w-full"
		class:ml-56={!$sidebarMini}
	>
		<Toolbar />
	</main>
</div>
