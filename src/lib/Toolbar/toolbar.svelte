<script>
	import Input from '$lib/base/input.svelte';
	import MenuAlt from '$lib/Icons/menu-alt.svelte';
	import { toggleSidebarMini } from '../../stores/views';
	let value = '';
</script>

<section class="toolbar">
	<button class="p-2 text-aqua" on:click={toggleSidebarMini}>
		<MenuAlt />
	</button>
	<Input bind:value placeholder="Buscar">
		<!-- SVG search icon -->
		<svg slot="icon" class="h-6 w-6 fill-current" viewBox="0 0 24 24">
			<path
				d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
			/>
		</svg>
	</Input>
</section>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		gap: 0.5rem;
		background-color: #fafafa;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		min-width: 100%;
	}
</style>
