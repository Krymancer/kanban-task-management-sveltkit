<script>
  import Button from "$lib/components/button.svelte";
</script>

<div class="flex items-center justify-center w-screen h-screen overflow-hidden gap-2">
  <div class="flex gap-[30px] items-center">
    <Button large label="Button Primary (L)" />
    <Button label="Button Primary (S)"/>
    <Button secondary label="Button Secondary"/>
    <Button destructive label="Button Destructive"/>
  </div>
</div>