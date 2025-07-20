<script lang="ts">
	// if you want to get themes, feel free to import exportedThemes, nativeThemes, or themeNames.
	import Monaco from "svelte-monaco";

	import type IMonaco from "monaco-editor";

	// this is fully reactive! setting value to another string will change the editor accordingly
	export let value = "";

	export let options: IMonaco.editor.IStandaloneEditorConstructionOptions;

	const defaultOptions: IMonaco.editor.IStandaloneEditorConstructionOptions = {
		language: "json",
		automaticLayout: true,
		fontSize: 12,
		fontLigatures: true,
		useShadowDOM: true
	};
</script>

<!-- event.detail is the monaco instance. All options are reactive! -->
<div class="h-full w-full overflow-hidden border rounded-sm">
	<Monaco
		options={{ ...defaultOptions, ...options }}
		theme="twilight"
		on:ready={(event) => console.log(event.detail)}
		bind:value
	/>
</div>
