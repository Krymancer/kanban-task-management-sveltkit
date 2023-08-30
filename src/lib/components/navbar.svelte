<script lang="ts">
	import BoardIcon from './board-icon.svelte';
	import ToggleSwitch from './toggle-switch.svelte';

	import HideSidebar from '$lib/assets/icon-hide-sidebar.svg';
	import ShowSidebar from '$lib/assets/icon-show-sidebar.svg';
	import IconDarkTheme from '$lib/assets/icon-dark-theme.svg';
	import IconLightTheme from '$lib/assets/icon-light-theme.svg';
	import AddBoard from './add-board.svelte';

  import { boardStore } from "$lib/store/boardstore";

	$: boards = $boardStore;
	$: selectedBoard = $boardStore.find((board) => board.selected);

	export let open = true;

	let addBoardOpen = false;

	$: totalBoards = boards.length;
	
	function toggleSidebar() {
		open = !open;
	}

	function changeBoard(board: Board) {
		if(selectedBoard) {
			selectedBoard.selected = false;
		}

		board.selected = true;
		selectedBoard = board;
		boardStore.update((boards) => [...boards]);
		open = false;
	}
</script>

<nav class={`
	${open ? 'flex' : 'hidden'}
	transition-all
	absolute top-0 left-0 w-screen h-full bg-[rgba(0,0,0,0.5)] items-start pt-20 justify-center z-10  
	md:bg-transparent dark:md:bg-trasparent md:static md:pt-0 md:w-[260px] self-start md:border-r md:border-lines-light dark:md:border-lines-dark
	`}
	>
	<button class="
	bg-light-gray dark:bg-dark-gray z-20 rounded-lg py-4 w-[264px] flex flex-col opacity-1
		md:w-[260px] md:h-full md:rounded-none md:justify-between
	">
		<div>
			<div class="flex items-start text-medium-gray font-heading-l text-heading-s px-8">
				ALL BOARDS ({totalBoards})
			</div>
			<div class="py-4">
				{#each boards as board}
					{#if board.title === selectedBoard?.title}
						<button class="flex items-start text-white dark:text-white font-heading-m text-heading-m cursor-pointer pr-6 w-full" on:click|stopPropagation={() => changeBoard(board)}>
							<div class="flex gap-3 items-start bg-purple rounded-r-full py-4 pl-8 w-full">
								<BoardIcon />
								{board.title}
							</div>
						</button>
					{:else}
						<button class="flex items-start text-white dark:text-white font-heading-m text-heading-m cursor-pointer pr-6 w-full" on:click|stopPropagation={() => changeBoard(board)}>
							<div class="flex items-star gap-3 rounded-r-full py-4 pl-8 w-full hover:bg-purple-hover hover:text-purple dark:hover:bg-white">
								<BoardIcon />
								{board.title}
							</div>
						</button>
					{/if}
				{/each}

				<button class="flex gap-3 items-start text-purple font-heading-m text-heading-m py-4 px-8 cursor-pointer hover:text-medium-gray transition-all" on:click={() => {addBoardOpen = true}}>
					<BoardIcon />
					+ Create new board
				</button>
			</div>
		</div>

		<div>
			<div class="p-4">
				<div class="dark:bg-very-dark-gray flex items-center justify-center w-full h-[48px] rounded-[7px] gap-2">
					<img src={IconLightTheme} alt="light theme" />
					<ToggleSwitch />
					<img src={IconDarkTheme} alt="dark theme" />
				</div>
			</div>
			<button class="flex items-start text-white dark:text-white font-heading-m text-heading-m cursor-pointer pr-6 w-full" on:click|stopPropagation={toggleSidebar}>
				<div class="flex items-star gap-3 rounded-r-full py-4 pl-8 w-full hover:bg-purple-hover hover:text-purple dark:hover:bg-white">
					<img src={HideSidebar} alt="hide sidebar" class="w-[17px] h-4" />
					Hide sidebar
				</div>
			</button>
		</div>
	</button>
</nav>

<button on:click={toggleSidebar} class="hidden md:flex rounded-r-full h-12 w-14 bg-purple items-center pl-4 md:absolute bottom-0 left-0 mb-8 transition-all">
  <img src={ShowSidebar} alt="show sidebar" />
</button>

<AddBoard bind:open={addBoardOpen} />
