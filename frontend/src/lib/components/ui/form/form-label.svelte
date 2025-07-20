<script lang="ts">
	import type { Label as LabelPrimitive } from "bits-ui";
	import { getFormField } from "formsnap";
	import { cn } from "$lib/utils";
	import { Label } from "$lib/components/ui/label";

	type $$Props = LabelPrimitive.Props;

	interface Props {
		class?: $$Props["class"];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
	

	const { errors, ids } = getFormField();
</script>

<Label
	for={ids.input}
	class={cn($errors && "text-destructive", className)}
	{...rest}
>
	{@render children?.()}
</Label>
