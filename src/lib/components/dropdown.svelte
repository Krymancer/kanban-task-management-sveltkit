<script lang="ts">
  import ChevronDown from '$lib/assets/icon-chevron-down.svg';
  export let items : string[] = [];
  export let selected = items[0];
  
  let open = false;

  function toggle() {
    open = !open;
  }

  function select(item: string) {
    selected = item;
    open = false;
  }

  const baseClass = 'rounded-[4px] bg-white dark:bg-very-dark-gray text-back dark:text-white px-4 py-2 flex justify-between items-center relative outline-none text-body-l min-w-[240px] border';
  const deactiveClass = 'border-lines-light dark:border-lines-dark';
  const activeClass = 'border-purple dark:border-purple';
</script>

<button on:click={toggle} 
  class={`${baseClass} ${open ? activeClass : deactiveClass}`}  >
  <div>{selected}</div>
  <img src={ChevronDown} alt="chevron down" class="h-2"/>
  {#if open}
    <button class="dark:bg-very-dark-gray rounded-lg p-4 flex flex-col gap-2 mt-[7px] dark:text-white text-body-l absolute z-10 left-0 top-full w-full">
      {#each items as item}
      <button class="cursor-pointer select-none text-medium-gray hover:font-bold" on:click|stopPropagation={() => select(item)}>{item}</button>
      {/each}
    </button>
  {/if}
</button>
