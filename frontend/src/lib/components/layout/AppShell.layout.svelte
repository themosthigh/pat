<script lang="ts">
	import WindowControls from "../window/WindowControls.svelte";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="dark h-screen overflow-hidden flex flex-col bg-background text-foreground">
	<header class="bg-foreground/5 min-h-[35px] max-h-fit" style="--wails-draggable:drag">
		<div class="flex justify-between h-full min-h-fit">
			<div class="flex items-center px-2">
				<h3>Pat</h3>
			</div>
			<WindowControls />
		</div>
	</header>

	<main class="flex-1 bg-foreground/10 overflow-hidden">
		{@render children?.()}
	</main>

	<footer class="px-2 py-1 bg-foreground/5">---</footer>
</div>
