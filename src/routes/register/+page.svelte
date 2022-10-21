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
	<div class="card w-96 bg-base-100 shadow-xl">
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
					<span class="label-text">Nombre</span>
				</label>
				<input
					type="text"
					name="name"
					placeholder="Ingrese su nombre"
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
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
			<div class="card-actions">
				<button type="submit" class="btn btn-primary w-full max-w-xs" disabled={!!form?.message}>
					Ingresar
				</button>
			</div>
		</form>
	</div>
</div>
