<script lang="ts">
  import Header from "$lib/components/header.svelte"
	import Navbar from "$lib/components/navbar.svelte";
  import BoardComponent from "$lib/components/board.svelte";
  let navbarOpen = false;
</script>

<svelte:head>
  <title>Kanban</title>
</svelte:head>

<main class="flex flex-col items-center w-screen h-screen overflow-hidden bg-light-gray dark:bg-very-dark-gray">
  <Header bind:navbarOpen={navbarOpen} />
  <div class="w-full flex flex-row flex-1">
    <Navbar bind:open={navbarOpen} />
    <BoardComponent />
  </div>
</main>