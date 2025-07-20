<script>
	import WindowControls from '../window/WindowControls.svelte';
</script>

<div class="dark h-screen overflow-hidden flex flex-col bg-background text-foreground">
	<header class="bg-foreground/5 min-h-[35px] max-h-fit" style="--wails-draggable:drag">
		<div class="flex justify-between h-full min-h-fit">
			<div class="flex items-center">
				<h3>pat</h3>
			</div>
			<WindowControls />
		</div>
	</header>

	<main class="flex-1 bg-foreground/10 overflow-auto">
		<slot />
	</main>

	<footer class="bg-foreground/5">Footer</footer>
</div>
