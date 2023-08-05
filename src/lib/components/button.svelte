<script lang="ts">
  export let secondary: boolean = false;
  export let destructive: boolean = false;
  export let large: boolean = false;

  let primary = !secondary && !destructive;

  const primaryBaseClass = 'bg-purple rounded-3xl p-4 text-white font-bold hover:bg-purple-hover transition-all flex items-center justify-center';
  const secondaryBaseClass = 'bg-purple/10 rounded-3xl p-4 text-purple font-bold hover:bg-purple/30 transition-all flex items-center justify-center';
  const destructiveBaseClass = 'bg-red rounded-3xl p-4 text-white font-bold hover:bg-red-hover transition-all flex items-center justify-center';

  export let label: string = "Button";
</script>

{#if primary}
<button class={`${primaryBaseClass} ${large ? 'h-12' : 'h-10'}`} >
  <span class={large ? 'text-heading-m' : 'text-heading-s'}>{label}</span>
</button>
{/if}

{#if secondary}
<button class={`${secondaryBaseClass} ${large ? 'h-12' : 'h-10'}`} >
  <span class={large ? 'text-heading-m' : 'text-heading-s'}>{label}</span>
</button>
{/if}

{#if destructive}
<button class={`${destructiveBaseClass} ${large ? 'h-12' : 'h-10'}`}>
  <span class={large ? 'text-heading-m' : 'text-heading-s'}>{label}</span>
</button>
{/if}