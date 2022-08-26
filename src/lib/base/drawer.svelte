<script>
	import About from '$lib/Icons/about.svelte';
	import BranchOffices from '$lib/Icons/branch-offices.svelte';
	import Companies from '$lib/Icons/companies.svelte';
	import Dashboard from '$lib/Icons/dashboard.svelte';
	import Graphics from '$lib/Icons/graphics.svelte';
	import LogoCulquiComplete from '$lib/Icons/logo-culqui-complete.svelte';
	import LogoCulqui from '$lib/Icons/logo-culqui.svelte';
	import Reports from '$lib/Icons/reports.svelte';
	import Settings from '$lib/Icons/settings.svelte';
	import Users from '$lib/Icons/users.svelte';
	import Zones from '$lib/Icons/zones.svelte';

	import SidebarItem from '$lib/Sidebar/sidebar-item.svelte';
	import Toolbar from '$lib/Toolbar/toolbar.svelte';
	import { sidebarMini } from 'stores/views';
</script>

<div class="drawer drawer-mobile bg-base-300 ">
	<input id="sidebar" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Toolbar />
		<slot />
	</div>
	<aside class="drawer-side shadow-lg">
		<label for="sidebar" class="drawer-overlay" />
		<ul
			class="menu overflow-y-auto p-2 w-60 lg:w-20 overflow-x-visible gap-4 bg-base-100 text-base-content transition-all duration-300 ease-linear {$sidebarMini
				? 'lg:items-center'
				: 'lg:w-60'}"
		>
			<!--  -->
			<li class="my-12">
				<a href="/" class="text-primary p-0">
					{#if $sidebarMini}
						<LogoCulqui />
					{:else}
						<LogoCulquiComplete />
					{/if}
				</a>
			</li>

			<SidebarItem text="Gráficos" to="/" class="mt-20">
				<Graphics class="w-6" />
			</SidebarItem>

			<SidebarItem text="Dashboard" to="/dashboard">
				<Dashboard class="w-6" />
			</SidebarItem>

			<SidebarItem text="Reportes" to="/reports">
				<Reports class="w-6" />
			</SidebarItem>

			<SidebarItem text="Empresas" to="/companies">
				<Companies class="w-6" />
			</SidebarItem>

			<SidebarItem text="Sucursales" to="/branch-offices">
				<BranchOffices class="w-6" />
			</SidebarItem>

			<SidebarItem text="Zonas" to="/zones">
				<Zones class="w-6" />
			</SidebarItem>

			<SidebarItem text="Usuarios" to="/users">
				<Users class="w-6" />
			</SidebarItem>
			<div class="absolute bottom-0 left-0 w-full">
				<div class="divider" />
				<div class="menu p-2 gap-4">
					<SidebarItem text="Acerca de" to="/about">
						<About class="w-6" />
					</SidebarItem>

					<SidebarItem text="Ajustes" to="/settings">
						<Settings class="w-6" />
					</SidebarItem>
				</div>
			</div>
		</ul>
	</aside>
</div>
