<script lang="ts">
	import { Form as FormPrimitive } from "formsnap";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<HTMLSpanElement>;
	interface Props {
		class?: string | undefined | null;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<FormPrimitive.Description
	class={cn("text-[0.8rem] text-muted-foreground", className)}
	{...rest}
>
	{@render children?.()}
</FormPrimitive.Description>
