<script>
	import ResponseJson from '../response/response-json.svelte';

	export let data = {
		msg: 'Empty body for example'
	};
</script>

<ResponseJson data={JSON.stringify(data)} />
