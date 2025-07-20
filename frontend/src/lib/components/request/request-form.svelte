<script lang="ts">
	import Top from "./request-form-top.svelte";
	import Body from "./request-form-body-editor.svelte";

	import { document } from "$lib/store/index";

	import { handleRequest } from "$lib/network";
	import { twMerge } from "tailwind-merge";

	const handleOnRequest = async function () {
		try {
			document.set({
				...$document,
				response: {
					body: "",
					responseType: "",
				},
				state: {
					isLoading: true,
				},
			});

			const response = await handleRequest($document.request);

			document.set({
				...$document,
				response: {
					body: response,
					responseType: "json",
				},
			});
		} catch (e) {
			document.set({
				...$document,
				response: {
					body: `// Error
${JSON.stringify(e, null, 2)}`,
					responseType: "json",
				},
			});
		} finally {
			document.set({
				...$document,
				state: {
					isLoading: false,
				},
			});
		}
	};

	let className = "";
	export { className as class };
</script>

<div class={twMerge("flex flex-col overflow-hidden", className)}>
	<Top on:request={handleOnRequest} bind:options={$document.request} />
	<Body bind:body={$document.request.body} />
</div>
