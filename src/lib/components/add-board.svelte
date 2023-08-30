<script lang="ts">
  import Popup from "./popup.svelte";
  import Input from "./input.svelte";
  import Button from "./button.svelte";
	import { boardStore } from "$lib/store/boardstore";

  export let open = false;

  let boardName = "";
  let boardColumns: string[] = [""];

  function addColumn() {
    boardColumns = [...boardColumns, ""];
  }

  function createBoard() {
    const board : Board = {
      title: boardName,
      columns: boardColumns.map(x => ({title: x, cards: []})),
      selected: false,
    };

    boardStore.update((boards) => [...boards, board]);
    open = false;
  }
</script>

<Popup bind:open={open}>
  <div class="flex flex-col items-start gap-6 text-heading-l font-heading-l dark:text-white">
    <span>Add new board</span>
    <div class="flex flex-col items-start gap-2 text-body-m font-body-m">
      <span>Board name</span>
      <Input placeholder="e.g. Web Design" bind:value={boardName}/>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-2 items-start">
        <span class="text-body-m font-body-m">Board Columns</span>
        {#each boardColumns as column}
          <Input placeholder="e.g. To Do" bind:value={column}/>
        {/each}
      </div>
      <Button label="+ Add new column" secondary onClick={addColumn} />
    </div>
    <div class="w-full">
      <Button label="Create board" onClick={createBoard}/>
    </div>
  </div>
</Popup>
