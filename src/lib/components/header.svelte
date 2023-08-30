<script lang="ts">
	import LogoDark from '$lib/assets/logo-dark.svg';
	import LogoLight from '$lib/assets/logo-light.svg';
	import LogoMobile from '$lib/assets/logo-Mobile.svg';
	import AddTaskMobile from '$lib/assets/icon-add-task-mobile.svg';
	import ChevronDown from '$lib/assets/icon-chevron-down.svg';
	import VerticalEllipsis from '$lib/assets/icon-vertical-ellipsis.svg';

	import { boardStore } from '$lib/store/boardstore';

	import Button from '$lib/components/button.svelte';
	import AddTask from './add-task.svelte';

	export let navbarOpen = false;
	let newTaskOpen = false;
	
	$: selectedBoard = $boardStore.find((board) => board.selected);

	boardStore.subscribe((boards) => {
		selectedBoard = boards.find((board) => board.selected);
	});

	function toggleSidebar() {
		navbarOpen = !navbarOpen;
	}

	function creaetNewTask() {
		newTaskOpen = true;
	}
</script>

<header class="flex w-full items-center justify-between bg-white dark:bg-dark-gray">
	<button class="flex cursor-pointer" on:click={toggleSidebar}>
		<div class="p-4 md:h-full md:border-r md:border-lines-light dark:md:border-lines-dark md:p-8 md:pr-[74px]">
			<img src={LogoMobile} class="flex md:hidden" alt="Logo" />
			<img src={LogoLight} class="hidden dark:md:flex" alt="Logo" />
			<img src={LogoDark} class="hidden md:flex dark:md:hidden" alt="Logo" />
		</div>
		<div class="p-4 py-5 md:py-5 pl-0 md:p-6">
			<div class="flex h-full items-center gap-2">
				<div class="text-heading-l md:text-heading-lg font-heading-l text-black dark:text-white">{selectedBoard?.title}</div>
				<div class="flex h-full items-center transition-all md:hidden">
					<img src={ChevronDown} alt="chevron down" class={`${navbarOpen ? '':'rotate-180'} mt-[2px] h-2 w-3 transition-all`} />
				</div>
			</div>
		</div></button
	>
	<div class="flex items-center gap-4 pr-6">
		<div>
			<div class="flex md:hidden">
				<Button label="" icon={AddTaskMobile} />
			</div>
			<div class="hidden md:flex">
				<Button label="+ Add New Task" onClick={creaetNewTask} />
			</div>
		</div>
		<div>
			<img src={VerticalEllipsis} alt="More options" />
		</div>
	</div>
</header>

<AddTask bind:open={newTaskOpen} />
