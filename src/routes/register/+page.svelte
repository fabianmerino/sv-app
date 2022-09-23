<script lang="ts">
	export const token: string | null = null;
	export const user: any | null = null;

	export let errors: { [key: string]: string };
</script>

<svelte:head>
	<title>Sginup</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
	<div class="card w-96 bg-base-100 shadow-xl">
		<form method="post" action="/login" class="card-body gap-4">
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
				<button type="submit" class="btn btn-primary w-full max-w-xs" disabled={!!errors}>
					Ingresar
				</button>
			</div>
		</form>
	</div>
</div>
