<script lang="ts">
	export let text = '';
</script>

<div class="sidebar-icon">
	<div class="flex items-center justify-center h-5 w-5">
		<slot />
	</div>
	{#if text}
		<span class="sidebar-icon-text">
			{text}
		</span>
	{/if}
</div>
