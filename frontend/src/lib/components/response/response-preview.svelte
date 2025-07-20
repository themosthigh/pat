<script>
	import { twMerge } from "tailwind-merge";
	import Top from "./response-preview-top.svelte";
	import JsonPreview from "./response-preview-json.svelte";
	import Skeleton from "../ui/skeleton/skeleton.svelte";

	export let data = "";
	export let isLoading = false;

	let className = "";
	export { className as class };
</script>

<div class={twMerge("flex flex-col overflow-hidden", className)}>
	<Top />
	{#if isLoading}
		<Skeleton class="h-full w-full rounded-none"/>
	{:else}
		<JsonPreview {data} />
	{/if}
</div>
