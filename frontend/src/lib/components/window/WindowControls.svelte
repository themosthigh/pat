<script>
	import { IconX, IconMinus, IconSquare } from '@tabler/icons-svelte';

	import { Quit, WindowMinimise, WindowToggleMaximise } from '$lib/wailsjs/runtime';

	const windowButtons = [
		{
			Icon: IconMinus,
			handler: WindowMinimise,
			size: 16
		},
		{
			Icon: IconSquare,
			handler: WindowToggleMaximise,
			size: 12
		},
		{
			Icon: IconX,
			handler: Quit,
			type: 'destructive',
			size: 18
		}
	];
</script>

<div class="flex">
	{#each windowButtons as { Icon, handler, type, size }}
		<button
			on:click={handler}
			class="py-auto px-3 {type === 'destructive'
				? 'hover:bg-destructive'
				: 'hover:bg-foreground/10'}
				"
		>
			<Icon {size} />
		</button>
	{/each}
</div>
