<script lang="ts">
	// if you want to get themes, feel free to import exportedThemes, nativeThemes, or themeNames.
	import Monaco from 'svelte-monaco';

	import type IMonaco from 'monaco-editor';

	// this is fully reactive! setting value to another string will change the editor accordingly
	export let value = '';

	export let options: IMonaco.editor.IStandaloneEditorConstructionOptions = {
		language: 'json',
		readOnly: true,
		automaticLayout: true
	};
</script>

<!-- event.detail is the monaco instance. All options are reactive! -->
<Monaco
	{options}
	theme="tomorrow-night"
	on:ready={(event) => console.log(event.detail)}
	bind:value
/>
