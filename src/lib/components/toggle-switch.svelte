<script lang="ts">
  export let label : string = "";
  export let checked : boolean = false;
</script>

<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" bind:value={checked} class="sr-only peer">
  <div class="w-11 h-6 bg-purple rounded-full peer dark:bg-purple peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
</label>