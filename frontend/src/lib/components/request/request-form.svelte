<script lang="ts">
	import Top from './request-form-top.svelte';
	import Preview from './request-form-preview.svelte';

	import { handleRequest } from '$lib/network';
	import type { RequestMethod } from '$lib/types';

	let response: any = {};
	let options = {
		url: 'https://dummyjson.com/products',
		method: 'GET' as RequestMethod
	};

	const handleOnRequest = async function () {
		response = await handleRequest(options);
	};
</script>

<div class="flex flex-col h-full w-screen max-w-screen overflow-hidden">
	<Top on:request={handleOnRequest} bind:options />
	<Preview data={response} />
</div>
