<script lang="ts">
	import TextArea from "../components/TextArea.svelte";
	let value: string = ""

</script>

<TextArea 
	value={value}
	placeholder="Type your prompt here..."
/>