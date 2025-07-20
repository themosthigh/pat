<script>
	import RequestForm from "$lib/components/request/request-form.svelte";
	import ResponsePreview from "$lib/components/response/response-preview.svelte";

	import { document } from "$lib/store/index";
</script>

<div
	class="max-w-screen h-full overflow-hidden grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-background"
>
	<RequestForm class="border-b md:border-r md:border-b-0" />
	<ResponsePreview data={$document.response.body} />
</div>
