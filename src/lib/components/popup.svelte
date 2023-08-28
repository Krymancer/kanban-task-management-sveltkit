<script lang="ts">
  export let open = true;
</script>

<button class={`${open ? 'flex' : 'hidden'} absolute h-screen w-screen top-0 left-0 overflow-hidden bg-[rgba(0,0,0,0.5)] items-center justify-center cursor-default`} on:click={() => {open = false}}>
<button class="bg-white dark:bg-dark-gray p-8 rounded-md dark:text-medium-gray cursor-default" on:click|stopPropagation={() => {}}>THIS IS A DIALOG</button>
</button>