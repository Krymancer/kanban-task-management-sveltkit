<script>
  import Check from '$lib/assets/icon-check.svg';

  export let label = "Checkbox";
  export let checked = false;

  const baseCheckClass = 'h-4 w-4 border border-lines-light rounded-sm cursor-pointer flex items-center justify-center transition-all dark:border-lines-dark dark:bg-dark-gray'
  const checkedClass = 'bg-purple';
  const uncheckedClass = 'bg-white';

  const baseLabelClass = 'cursor-pointer text-black dark:text-white font-bold';
  const checkedLabelClass = 'opacity-50 line-through';

  function toggle() {
    checked = !checked;
  }
</script>

<button class="bg-light-gray font-bold text-body-m rounded-[4px] h-10 flex items-center gap-4 p-3 select-none hover:bg-purple/25 transition-all dark:bg-very-dark-gray dark:hover:bg-purple/25" on:click={toggle}>
  <div class={`${baseCheckClass} ${checked ? checkedClass : uncheckedClass}`}>
    {#if checked}<img src={Check} alt="Check" />{/if}
  </div>
  <div class={`${baseLabelClass} ${checked ? checkedLabelClass : ''}`}>{label}</div>
</button>