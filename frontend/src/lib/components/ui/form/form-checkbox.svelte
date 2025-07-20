<script lang="ts">
	import { getFormField } from "formsnap";
	import type { Checkbox as CheckboxPrimitive } from "bits-ui";
	import { Checkbox } from "$lib/components/ui/checkbox";
	type $$Props = CheckboxPrimitive.Props;
	type $$Events = CheckboxPrimitive.Events;

	interface Props {
		onCheckedChange?: $$Props["onCheckedChange"];
		[key: string]: any
	}

	let { onCheckedChange = undefined, ...rest_1 }: Props = $props();

	const { name, setValue, attrStore, value } = getFormField();
	const { name: nameAttr, value: valueAttr, ...rest } = $attrStore;
</script>

<Checkbox
	{...rest}
	checked={typeof $value === "boolean" ? $value : false}
	onCheckedChange={(v) => {
		onCheckedChange?.(v);
		setValue(v);
	}}
	{...rest_1}
	on:click
	on:keydown
/>
<input hidden {name} value={$value} />
