<script lang="ts">
  export let card : Card;

  $: doneSubtasks = card.subtasks.filter((subtask) => subtask.done).length;
  $: totalSubtasks = card.subtasks.length;
</script>

<div class="flex flex-col rounded-lg h-[88px] bg:white dark:bg-dark-gray px-4 py-6 gap-2 select-none">
  <div class="text-black dark:text-white text-heading-m font-heading-m">{card.title}</div>
  <div class="text-medium-gray text-body-m font-body-m">{doneSubtasks} of {totalSubtasks} subtaks</div>
</div>