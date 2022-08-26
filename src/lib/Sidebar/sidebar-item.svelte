<script lang="ts">
	import { sidebarMini } from 'stores/views';
	import { page } from '$app/stores';
	export let text = '';
	export let to = '';
</script>

<li class={$$props.class}>
	<a
		href={to}
		class="flex"
		class:active={$page.url.pathname === to}
		class:lg:justify-center={$sidebarMini}
	>
		<slot />
		<span class="sidebar-icon-text" class:lg:hidden={$sidebarMini}>
			{text}
		</span>
	</a>
</li>
