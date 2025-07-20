<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import Top from "./response-preview-top.svelte";
	import JsonPreview from "./response-preview-json.svelte";
	import Skeleton from "../ui/skeleton/skeleton.svelte";


	interface Props {
		data?: string;
		isLoading?: boolean;
		class?: string;
	}

	let { data = "", isLoading = false, class: className = "" }: Props = $props();
	
</script>

<div class={twMerge("flex flex-col overflow-hidden", className)}>
	<Top />
	{#if isLoading}
		<Skeleton class="h-full w-full rounded-none"/>
	{:else}
		<JsonPreview {data} />
	{/if}
</div>
