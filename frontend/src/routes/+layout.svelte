<script lang="ts">
	import AppShell from '$lib/components/layout/AppShell.layout.svelte';
	import '../app.postcss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<AppShell>
	{@render children?.()}
</AppShell>
