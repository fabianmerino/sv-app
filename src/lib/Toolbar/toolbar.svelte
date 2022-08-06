<script>
	import MenuAlt from '$lib/Icons/menu-alt.svelte';
	import ThemeChange from '$lib/base/theme-change.svelte';
	import { toggleSidebarMini } from '../../stores/views';
	import { signOut } from 'lucia-sveltekit/client';

	const logout = async () => {
		try {
			await signOut();
			window.location.href = '/login';
		} catch (error) {
			console.log(error);
		}
	};

	let value = '';
</script>

<section class="toolbar dark:bg-gray-900 h-16">
	<div class="flex items-center gap-2">
		<button type="button" class="p-2 text-aqua" on:click={toggleSidebarMini}>
			<MenuAlt />
		</button>
	</div>
	<div class="flex items-center gap-2">
		<ThemeChange class="text-primary" />
		<div class="dropdown dropdown-end">
			<!-- <label tabindex="0" for="dropdown" class="btn btn-ghost"> -->
			<div tabindex="0" class="avatar placeholder m-1 btn btn-circle btn-ghost">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
					<span class="text-xs">FM</span>
				</div>
			</div>
			<!-- </label> -->
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<div class="btn btn-ghost" on:click={logout}>Cerrar sesión</div>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		gap: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		min-width: 100%;
	}
</style>
