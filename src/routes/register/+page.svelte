<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	export const token: string | null = null;
	export const user: any | null = null;

	export let form: { [key: string]: string };
</script>

<svelte:head>
	<title>Sginup</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
	<div class="card w-96 bg-base-100 shadow-xl card-bordered">
		<form
			method="post"
			class="card-body gap-4"
			use:enhance={({ data, cancel }) => {
				form = {};
				const email = data.get('email')?.toString() || '';
				const password = data.get('password')?.toString() || '';
				if (!email || !password) {
					form.message = 'Invalid input';
					cancel();
				}
				return async ({ result }) => {
					if (result.type === 'redirect') {
						window.location.href = result.location; // invalidateAll() + goto() will not work
						return;
					}
					applyAction(result);
				};
			}}
		>
			<h2 class="card-title">Registrar nuevo usuario</h2>
			<div class="form-control w-full max-w-xs">
				<label for="email" class="label">
					<span class="label-text">Email</span>
				</label>
				<input
					type="email"
					name="email"
					placeholder="Ingrese su email"
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div class="form-control w-full max-w-xs">
				<label for="password" class="label">
					<span class="label-text">Password</span>
				</label>
				<input
					type="password"
					name="password"
					placeholder="Ingrese su contraseña"
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div class="form-control mt-6">
				<button type="submit" class="btn btn-primary w-full max-w-xs"> Ingresar </button>
			</div>
		</form>
	</div>
	{#if form?.message}
		<div class="toast toast-center min-w-max">
			<div class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>{form.message}</span>
			</div>
		</div>
	{/if}
</div>
