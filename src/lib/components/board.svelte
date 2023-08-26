<script lang="ts">
	import Button from "./button.svelte";

  export let board: Board;
</script>

{#if board.columns.length}
<div>
  hahahah colunas
</div>
{:else}
<div class="flex flex-col gap-6 px-4 text-center flex-1 justify-center items-center">
  <span class="text-medium-gray text-heading-l font-heading-l">This board is empty. Create a new column to get started.</span>
  <div class="flex items-center">
    <Button label="+ Add New Column" />
  </div>
</div>
{/if}
```