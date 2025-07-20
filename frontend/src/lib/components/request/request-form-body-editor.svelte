<script lang="ts">
	import Editor from "$lib/components/editor/Editor.svelte";

	export let body: string;
</script>

<div class="p-2 flex-1 flex flex-col gap-2 overflow-hidden">
	<h3>Body</h3>
	<Editor bind:value={body} options={{}} />
</div>
