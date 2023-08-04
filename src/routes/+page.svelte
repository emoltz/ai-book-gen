<script lang="ts">
	import {testConnection} from "$lib/firebase"
	import TextArea from "../components/TextArea.svelte";
	let value: string = ""

	testConnection();


</script>

<TextArea 
	value={value}
	placeholder="Type your prompt here..."
/>