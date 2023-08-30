<script lang="ts">
  import Card from "./card.svelte";
  export let column : Column;
</script>

<div class="text-white w-[280px] flex flex-col gap-6">
  <div class="flex flex-row items-center gap-3 text-heading-s font-bold text-medium-gray uppercase">
    <div class="rounded-full h-[15px] w-[15px] bg-purple-hover"></div>
      {column?.title} ({column?.cards.length})
  </div>
  <div class="flex flex-col gap-5">
    {#each column?.cards as card}
      <Card card={card}/>
    {/each}
  </div>
</div>