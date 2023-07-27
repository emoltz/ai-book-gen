<script lang="ts">
     let value:string = "";
</script>

<div class="p-3">
    <textarea 
    bind:value={value}
    class=" w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
    placeholder="Type your prompt here..."
  />
</div>
