<script>
	import { twMerge } from "tailwind-merge";
	import Top from "./response-preview-top.svelte";
	import JsonPreview from "./response-preview-json.svelte";
	export let data = "";

	let className = "";
	export { className as class };
</script>

<div class={twMerge("flex flex-col overflow-hidden", className)}>
	<Top />
	<JsonPreview {data} />
</div>
