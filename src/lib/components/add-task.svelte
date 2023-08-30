<script lang="ts">
	import Popup from "./popup.svelte";
  import Input from "./input.svelte";
  import Button from "./button.svelte";
	import Dropdown from "./dropdown.svelte";

  import { boardStore } from "$lib/store/boardstore";

  let cardName = "";
  let cardDescription = "";

  let subtasks: string[] = [""];

  function addSubtask() {
    subtasks = [...subtasks, ""];
  }

  function createCard() {

  }

  $: selectedBoard = $boardStore.find((board) => board.selected);
  $: status = selectedBoard?.columns.map(x => x.title);

  export let open = false;
</script>

<Popup bind:open={open}>
  <div class="flex flex-col items-start gap-6 text-heading-l font-heading-l dark:text-white">
    <span>Add new task</span>
    <div class="flex flex-col items-start gap-2 text-body-m font-body-m">
      <span>Title</span>
      <Input placeholder="e.g. Web Design" bind:value={cardName}/>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-2 items-start">
        <span class="text-body-m font-body-m">Board Columns</span>
        {#each subtasks as subtaks}
          <Input placeholder="e.g. Make Cofee" bind:value={subtaks}/>
        {/each}
      </div>
      <Button label="+ Add new column" secondary onClick={addSubtask} />
      <div class="flex flex-col items-start gap-2 text-body-m font-body-m">
        <span>Status</span>
        <Dropdown items={status} bind:selected={column} />
      </div>
    </div>
    <div class="w-full">
      <Button label="Create board" onClick={createCard}/>
    </div>
  </div>
</Popup>