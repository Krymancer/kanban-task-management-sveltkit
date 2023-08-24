<script>
  import Header from "$lib/components/header.svelte"
	import Navbar from "$lib/components/navbar.svelte";

  let navbarOpen = false;
  const boards = ['Platform Launch', 'Marketing Plan', 'Road Map'];
  let selectedBoard = boards[0];
</script>

<main class="flex flex-col items-center w-screen h-screen overflow-hidden bg-light-gray dark:bg-very-dark-gray">
  <Header bind:navbarOpen={navbarOpen} selectedBoard={selectedBoard} />
  <Navbar bind:open={navbarOpen} boards={boards} bind:selectedBoard={selectedBoard}/>
</main>