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
		class:justify-center={$sidebarMini}
	>
		<slot />
		{#if !$sidebarMini}
			<span class="sidebar-icon-text">
				{text}
			</span>
		{/if}
	</a>
</li>
