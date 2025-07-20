<script>
	import { twMerge } from "tailwind-merge";
	import JsonPreview from "./response-preview-json.svelte";
	export let data = "";

	let className = "";
	export { className as class };
</script>

<div class={twMerge("flex flex-col gap-2 p-2 overflow-hidden", className)}>
	<h3>Preview</h3>
	<JsonPreview {data} />
</div>
