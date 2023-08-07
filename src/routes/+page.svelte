<script>
  import Button from "$lib/components/button.svelte";
	import Checkbox from "$lib/components/checkbox.svelte";
	import Dropdown from "$lib/components/dropdown.svelte";
	import Input from "$lib/components/input.svelte";

  let checked = false;
</script>

<main class="flex flex-col items-center justify-center w-screen h-screen overflow-hidden gap-10 dark:bg-dark-gray">
  <div class="flex gap-[30px] items-center">
    <Button large label="Button Primary (L)" />
    <Button label="Button Primary (S)"/>
    <Button secondary label="Button Secondary"/>
    <Button destructive label="Button Destructive"/>
  </div>
  <div class="flex items-center">
    <Checkbox label="Checkbox" bind:checked={checked}/>
  </div>
  <div>
    <Input />
  </div>
  <div class="">
    <Dropdown items={['Todo', 'Doing', 'Done']}/>
  </div>
</main>