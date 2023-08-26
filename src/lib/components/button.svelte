<script lang="ts">
  export let secondary: boolean = false;
  export let destructive: boolean = false;
  export let large: boolean = false;

  let primary = !secondary && !destructive;

  const baseClass = 'rounded-3xl p-4 font-bold flex items-center justify-center transition-all text-heading-m';

  const primaryClass = 'bg-purple text-white hover:bg-purple-hover';
  const secondaryClass = 'bg-purple/10 text-purple hover:bg-purple/30 dark:bg-white dark:text-purple dark:hover:bg-white';
  const destructiveClass = 'bg-red text-white hover:bg-red-hover';

  const size = large ? 'h-12 text-heading-m' : 'h-10 text-heading-s';

  const style = `${baseClass} ${primary ? primaryClass : ''} ${secondary ? secondaryClass : ''} ${destructive ? destructiveClass : ''} ${size}`;

  export let label: string = "Button";
  export let icon: string | undefined = undefined;
</script>

<button class={style} >
  {#if icon}
    <img src={icon} alt="icon"/>
  {/if}
  {label}
</button>