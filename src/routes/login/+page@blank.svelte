<script lang="ts">
	import ThemeChange from '$lib/base/theme-change.svelte';
	import LoginImage from '$lib/Images/login.svelte';
	import LogoCulquiComplete from '$lib/Icons/logo-culqui-complete.svelte';

	export let errors: { 'message': string };
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex flex-col lg:flex-row items-center justify-center min-h-screen">
	<div class="lg:w-1/3 flex justify-center">
		<div class="card w-100 max-w-md">
			<form method="post" class="card-body gap-4">
				<LogoCulquiComplete
					class="flex justify-center w-full h-max py-4 text-dark-blue dark:text-aqua"
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
					{#if errors}
						<label for="email" class="label">
							<span class="label-text text-error">{errors.message}</span>
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

				<div class="form-control">
					<button type="submit" class="btn btn-primary"> Entrar </button>
				</div>
				<div class="card-actions items-center justify-center gap-4">
					<span>¿Aún no tienes una cuenta?</span>
					<a href="/register" class="link-primary"> Crear cuenta </a>
					<ThemeChange class="text-primary" />
				</div>
			</form>
		</div>
	</div>
	<LoginImage class="items-center justify-center w-full h-full py-4 lg:flex" />
</div>
