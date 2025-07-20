<script lang="ts">
	import Editor from "$lib/components/editor/Editor.svelte";
	import { IconJson } from "@tabler/icons-svelte";
	import Button from "$lib/components/ui/button/button.svelte";

	interface Props {
		body: string;
	}

	let { body = $bindable() }: Props = $props();
</script>

<div class="flex-1 flex flex-col overflow-hidden">
	<div class="p-1">
		<Button disabled>
			<IconJson />
		</Button>
	</div>

	<Editor bind:value={body} options={{}} />
</div>
