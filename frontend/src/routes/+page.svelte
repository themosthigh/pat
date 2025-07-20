<script>
	import { Greet } from '$lib/wailsjs/go/main/App';
</script>

{#await Greet('from JS') then msg}
	<h4>{msg}</h4>
{/await}
