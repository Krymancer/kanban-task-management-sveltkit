<script lang="ts">
  import Header from "$lib/components/header.svelte"
	import Navbar from "$lib/components/navbar.svelte";
  import BoardComponent from "$lib/components/board.svelte";

  let navbarOpen = false;

  const boards: Board[] = [];

  boards.push({
    name: 'Platform Launch',
    columns: []
  });

  boards.push({
    name: 'Marketing Plan',
    columns: []
  });

  boards.push({
    name: 'Road Map',
    columns: []
  });

  let selectedBoard = boards[0];
</script>

<main class="flex flex-col items-center w-screen h-screen overflow-hidden bg-light-gray dark:bg-very-dark-gray">
  <Header bind:navbarOpen={navbarOpen} selectedBoard={selectedBoard} />
  <Navbar bind:open={navbarOpen} boards={boards} bind:selectedBoard={selectedBoard}/>
  <BoardComponent bind:board={selectedBoard} />
</main>