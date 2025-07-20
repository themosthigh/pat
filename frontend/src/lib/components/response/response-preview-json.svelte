<script lang="ts">
	import MonacoEditor from "../editor/Editor.svelte";

	export let data: string = "";
</script>

<MonacoEditor value={data} options={{ readOnly: true }} />
