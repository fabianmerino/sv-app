<script lang="ts">
	import Sidebar from '$lib/Sidebar/sidebar.svelte';
	let mini = true;
</script>

<div class="flex">
	<Sidebar bind:mini />
	<div
		class="flex justify-start ml-16 p-4 transition-all duration-500 ease-in-out"
		class:ml-56={!mini}
	>
		<button class="p-2 rounded-full border-aqua border-2 text-aqua" on:click={() => (mini = !mini)}>
			<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
				<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
			</svg>
		</button>
	</div>
</div>
