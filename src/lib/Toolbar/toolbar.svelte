<script>
	import ThemeChange from '$lib/base/theme-change.svelte';
	import { toggleSidebarMini } from 'stores/views';
	import { signOut } from 'lucia-sveltekit/client';
	import { goto } from '$app/navigation';

	const logout = async () => {
		try {
			await signOut().then(() => console.log('Sesión cerrada'));
		} catch (err) {
			console.error(err);
		} finally {
			// await goto('/login');
			window.location.replace('/login');
		}
	};

	// let value = '';
</script>

<div class="flex justify-center p-4 w-full">
	<div class="navbar bg-base-100 shadow-lg h-16 gap-2 rounded-box">
		<div class="flex-none">
			<label
				for="sidebar"
				class="btn btn-square btn-ghost drawer-button"
				on:click={toggleSidebarMini}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</label>
		</div>
		<div class="flex-1">
			<span class="text-xl text-primary">Culqui IOT</span>
		</div>
		<div class="flex-none gap-2">
			<ThemeChange class="text-primary" />
			<div class="dropdown dropdown-end">
				<div tabindex="0" class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span class="badge badge-sm indicator-item">8</span>
					</div>
				</div>
				<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
					<div class="card-body">
						<span class="font-bold text-lg">8 Items</span>
						<span class="text-info">Subtotal: $999</span>
						<div class="card-actions">
							<button class="btn btn-primary btn-block">View cart</button>
						</div>
					</div>
				</div>
			</div>
			<div class="dropdown dropdown-end">
				<div tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people" alt="user avatar" />
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="/profile" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href="/settings">Settings</a></li>
					<li><div on:click|preventDefault={logout}>Logout</div></li>
				</ul>
			</div>
		</div>
	</div>
</div>
