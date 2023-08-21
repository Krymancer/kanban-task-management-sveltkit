<script>
  export let value = "";
  export let placeholder = "Enter text...";

  let firstInteraction = true;

  $: error = value.length == 0 && !firstInteraction;

  const baseClass = 'rounded-[4px] border bg-white dark:bg-very-dark-gray text-back dark:text-white px-4 py-2 flex justify-between relative';
  const normalClass = 'border-lines-light dark:border-lines-dark';
  const errorClass = 'border-red dark:border-red';

  function interact() {
    firstInteraction = false;
  }
</script>

<div class={`${baseClass} ${error ? errorClass : normalClass}`}>
  <input class="outline-none text-body-l w-full bg-trasparent" bind:value={value} placeholder={placeholder} on:blur={interact}/>
  {#if error}<div class="text-red text-body-l whitespace-nowrap z-10 absolute right-0 px-4 select-none">Can't be empty</div>{/if}
</div>