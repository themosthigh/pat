<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Select from "$lib/components/ui/select";
	import { RequestMethods } from "$lib/types";

	const dispatch = createEventDispatcher();

	export let options = {} as {
		url: string;
		method: string;
	};

	const handleSend = function () {
		console.log("Sending this function");
		dispatch("request");
	};
</script>

<div class="grid gap-1 p-1 border-b" style="grid-template-columns: auto 1fr auto;">
	<Select.Root
		selected={{ value: options.method, label: options.method }}
		onSelectedChange={(selected) => {
			options.method = selected.value;
		}}
	>
		<Select.Trigger class="w-fit gap-4">
			<Select.Value placeholder="Method" />
		</Select.Trigger>
		<Select.Content>
			{#each RequestMethods as method}
				<Select.Item value={method}>{method}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<!-- URL -->
	<Input bind:value={options.url} class="bg-transparent" placeholder="https://..." />
	<Button on:click={handleSend} class="uppercase">Send</Button>
</div>
