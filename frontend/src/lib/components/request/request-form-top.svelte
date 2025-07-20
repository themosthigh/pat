<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { createEventDispatcher } from "svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Select from "$lib/components/ui/select";
	import { RequestMethods } from "$lib/types";

	import { IconPlayerPlay as IconRun } from "@tabler/icons-svelte";

	const dispatch = createEventDispatcher();

	let { options = $bindable({} as {
		url: string;
		method: string;
	}) } = $props();

	const handleSend = function () {
		dispatch("request");
	};
</script>

<form
	class="grid gap-1 p-1 border-b"
	style="grid-template-columns: auto 1fr auto;"
	onsubmit={preventDefault(handleSend)}
>
	<Select.Root
		selected={{ value: options.method, label: options.method }}
		onSelectedChange={(selected) => {
			options.method = selected.value;
		}}
	>
		<Select.Trigger class="w-fit gap-2">
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
	<Button type="submit" class="uppercase" variant="secondary">
		<IconRun size={16} />
	</Button>
</form>
