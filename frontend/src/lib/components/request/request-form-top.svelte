<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';

	const dispatch = createEventDispatcher();

	export let options = {} as {
		url: string;
	};

	const handleSend = function () {
		console.log('Sending this function');
		dispatch('request');
	};
</script>

<div class="flex gap-1">
	<Input bind:value={options.url} />
	<Button on:click={handleSend}>Send</Button>
</div>
