<script lang="ts">
	import { onMount } from 'svelte';

	export const token: string | null = null;
	export const user: any | null = null;

	export let error = '';
	onMount(() => {
		console.log('onMount', error);
	});
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen dark:bg-gray-800">
	<div class="w-full max-w-sm">
		<div class="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="flex flex-col items-center dark:text-white">
				<!-- <img src="../../../assets/logo.png" alt="logo" class="w-24" /> -->
				<h1 class="text-center text-2xl font-bold mb-4">Inicio de sesión</h1>
				<form class="w-full" method="POST">
					<label class="text-gray-700 dark:text-white text-sm font-bold mb-2" for="email">
						Email
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
						placeholder="Email"
					/>
					<label class="text-gray-700 dark:text-white text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						placeholder="******************"
					/>
					<div class="flex flex-col items-center">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
