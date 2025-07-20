<script lang="ts">
	import MonacoEditor from '../editor/monaco.svelte';

	export let data: string = '';

	let formatted = '';

	$: {
		formatted = JSON.stringify(JSON.parse(data), null, 2);
	}
</script>

<MonacoEditor value={formatted} />
