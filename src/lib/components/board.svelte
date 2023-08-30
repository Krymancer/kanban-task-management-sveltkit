<script lang="ts">
	import Button from "./button.svelte";
	import Popup from "./popup.svelte";

  import { boardStore } from "$lib/store/boardstore";
	import Column from "./column.svelte";

  $: board = $boardStore.find((board) => board.selected);

  boardStore.subscribe((boards) => {
		board = boards.find((board) => board.selected);
	});

  let addPopUp = false;

  function openAddColumnPopup() {
    addPopUp = true;
  }

</script>

{#if board?.columns.length}
<div class="flex p-6 gap-6">
  {#each board?.columns as column}
    <Column column={column}/>
  {/each}
</div>
{:else}
<div class="flex flex-col gap-6 px-4 text-center flex-1 justify-center items-center">
  <span class="text-medium-gray text-heading-l font-heading-l">This board is empty. Create a new column to get started.</span>
  <div class="flex items-center">
    <Button label="+ Add New Column" onClick={openAddColumnPopup}/>
  </div>
</div>
{/if}


<div id="popups">
  <Popup bind:open={addPopUp}>
    testing
  </Popup>
</div>