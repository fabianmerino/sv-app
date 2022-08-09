<script lang="ts">
	import Dashboard from '$lib/Icons/dashboard.svelte';
	import Graphics from '$lib/Icons/graphics.svelte';
	import Divider from '$lib/base/divider.svelte';
	import SidebarIcon from './sidebar-item.svelte';
	import Reports from '$lib/Icons/reports.svelte';
	import Companies from '$lib/Icons/companies.svelte';
	import BranchOffices from '$lib/Icons/branch-offices.svelte';
	import Settings from '$lib/Icons/settings.svelte';
	import About from '$lib/Icons/about.svelte';
	import Zones from '$lib/Icons/zones.svelte';
	import Users from '$lib/Icons/users.svelte';
	import LogoCulqui from '$lib/Icons/logo-culqui.svelte';
	import LogoCulquiComplete from '$lib/Icons/logo-culqui-complete.svelte';
	import { sidebarMini } from 'stores/views';
</script>

<aside
	class={`fixed top-0 left-0 h-screen m-0
	flex flex-col bg-aqua dark:bg-gray-900 text-white shadow-lg
	transition-all duration-300 ease-in-out sidebar-${$sidebarMini ? 'mini' : 'full'}`}
	class:overflow-hidden={!$sidebarMini}
>
	<div class="my-12 flex justify-center ">
		<a href="/" class="dark:text-aqua text-dark-blue">
			{#if $sidebarMini}
				<LogoCulqui />
			{:else}
				<LogoCulquiComplete />
			{/if}
		</a>
	</div>
	<nav class="flex flex-col pt-20 h-full w-full">
		<SidebarIcon text="Gráficos" to="/graphics">
			<Graphics />
		</SidebarIcon>
		<SidebarIcon text="Dashboard" to="/dashboard">
			<Dashboard />
		</SidebarIcon>
		<SidebarIcon text="Reportes">
			<Reports />
		</SidebarIcon>
		<SidebarIcon text="Empresas">
			<Companies />
		</SidebarIcon>
		<SidebarIcon text="Sucursales">
			<BranchOffices />
		</SidebarIcon>
		<SidebarIcon text="Zonas">
			<Zones />
		</SidebarIcon>
		<SidebarIcon text="Usuarios">
			<Users />
		</SidebarIcon>
	</nav>
	<div class="absolute bottom-0 left-0 w-full">
		<div class="flex flex-col">
			<Divider />
			<SidebarIcon text="Acerca de">
				<About />
			</SidebarIcon>
			<SidebarIcon text="Ajustes">
				<Settings />
			</SidebarIcon>
		</div>
	</div>
</aside>
