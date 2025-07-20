<script lang="ts">
	import MonacoEditor from "../editor/Editor.svelte";

	interface Props {
		data?: string;
	}

	let { data = "" }: Props = $props();
</script>

<MonacoEditor value={data} options={{ readOnly: true }} />
