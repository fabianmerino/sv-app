<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (!session.lucia) return;

		return {
			status: 302,
			redirect: '/'
		};
	};
</script>

<script lang="ts">
	import ThemeChange from '$lib/base/theme-change.svelte';
	import LoginImage from '$lib/Images/login.svelte';
	import LogoCulquiComplete from '$lib/Icons/logo-culqui-complete.svelte';

	export let error = '';
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex flex-row items-center justify-around h-screen">
	<div class="md:w-1/3 flex justify-center">
		<div class="card w-100 max-w-md">
			<form method="post" class="card-body gap-6">
				<LogoCulquiComplete
					class="flex justify-center w-full h-max text-dark-blue dark:text-aqua"
				/>
				<div class="form-control w-full">
					<label for="email" class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						type="email"
						name="email"
						placeholder="Ingrese su email"
						class="input input-bordered w-full"
					/>
					{#if error}
						<label for="password" class="label">
							<span class="label-text text-error">{error}</span>
						</label>
					{/if}
				</div>
				<div class="form-control w-full">
					<label for="password" class="label">
						<span class="label-text">Contraseña</span>
					</label>
					<input
						type="password"
						name="password"
						placeholder="Ingrese su contraseña"
						class="input input-bordered w-full"
					/>
				</div>

				<div class="flex items-center justify-between">
					<div class="form-control">
						<label class="label cursor-pointer gap-2">
							<input type="checkbox" checked class="checkbox checkbox-primary" />
							<span class="label-text">Recuérdame</span>
						</label>
					</div>
					<a href="/reset-password" class="link-primary"> Olvidé la contraseña </a>
				</div>

				<div class="card-actions w-full">
					<button type="submit" class="btn btn-primary text-white w-full"> Entrar </button>
				</div>
				<div class="card-actions items-center justify-center gap-4">
					<span>¿Aún no tienes una cuenta?</span>
					<a href="/register" class="link-primary"> Crear cuenta </a>
					<ThemeChange class="text-primary" />
				</div>
			</form>
		</div>
	</div>
	<LoginImage class="items-center justify-center w-full h-full py-4 hidden md:flex" />
</div>
