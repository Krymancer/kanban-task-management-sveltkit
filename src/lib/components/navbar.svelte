<script lang="ts">
	import HideSidebar from '$lib/assets/icon-hide-sidebar.svg';
	import ShowSidebar from '$lib/assets/icon-show-sidebar.svg';
	import IconBoard from '$lib/assets/icon-board.svg';
	import IconBoardPurple from '$lib/assets/icon-board-purple.svg';
	import IconBoardWhite from '$lib/assets/icon-board-white.svg';
	import IconDarkTheme from '$lib/assets/icon-dark-theme.svg';
	import IconLightTheme from '$lib/assets/icon-light-theme.svg';
	import ToggleSwitch from './toggle-switch.svelte';

	export let boards: string[] = [];
	$: totalBoards = boards.length;
	export let selectedBoard = boards[0];

	export let open = false;

	function toggleSidebar() {
		open = !open;
	}

	function changeBoard(board: string) {
		selectedBoard = board;
		open = false;
	}
</script>

{#if open}
	<nav class="
    transition-all
    absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-start pt-20 justify-center z-10  
    md:bg-transparent dark:md:bg-trasparent md:static md:pt-0 md:w-[260px] self-start md:border-r md:border-lines-light dark:md:border-lines-dark
    "
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
						{#if board === selectedBoard}
							<button class="flex items-start text-white dark:text-white font-heading-m text-heading-m cursor-pointer pr-6 w-full" on:click|stopPropagation={() => changeBoard(board)}>
								<div class="flex items-start bg-purple rounded-r-full py-4 pl-8 w-full">
									<img src={IconBoardWhite} alt="board-icon" class="inline-block mr-2" />
									{board}
								</div>
							</button>
						{:else}
							<button class="flex items-start text-medium-gray dark:text-medium-gray font-heading-m text-heading-m py-4 px-8 cursor-pointer" on:click|stopPropagation={() => changeBoard(board)}>
								<img src={IconBoard} alt="board-icon" class="inline-block mr-2" />
								{board}
							</button>
						{/if}
					{/each}

					<div class="flex items-start text-purple font-heading-m text-heading-m py-4 px-8 cursor-pointer">
						<img src={IconBoardPurple} alt="board-icon" class="inline-block mr-2 fill-purple" />
						+ Create new board
					</div>
				</div>
			</div>

			<div class="px-4">
				<div class="dark:bg-very-dark-gray flex items-center justify-center w-full h-[48px] rounded-[7px] gap-2">
					<img src={IconLightTheme} alt="light theme" />
					<ToggleSwitch />
					<img src={IconDarkTheme} alt="dark theme" />
				</div>
        <button on:click={toggleSidebar} class="hidden md:flex gap-[10px] text-heading-m font-heading-m text-medium-gray mt-[30px] pl-6">
          <img src={HideSidebar} alt="hide sidebar" class="w-[17px] h-4" />
          Hide sidebar
        </button>
			</div>
		</button>
	</nav>
{:else}
<button on:click={toggleSidebar} class="hidden md:flex rounded-r-full h-12 w-14 bg-purple items-center pl-4 md:absolute bottom-0 left-0 mb-8">
  <img src={ShowSidebar} alt="show sidebar" />
</button>
{/if}
