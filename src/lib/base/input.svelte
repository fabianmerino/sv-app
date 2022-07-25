<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<!-- Create an input text win rounded borders and icon slot -->
<div class="relative text-aqua focus-within:text-gray-700">
	{#if $$slots.icon}
		<span class="absolute inset-y-0 left-0 flex items-center pl-2">
			<div class="p-1">
				<slot name="icon" />
			</div>
		</span>
	{/if}
	<input
		class="w-full p-2 rounded-lg border-aqua border-2"
		class:pl-10={$$slots.icon}
		{placeholder}
		bind:value
		autocomplete="off"
	/>
</div>
