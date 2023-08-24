<script lang="ts">
	import LogoDark from '$lib/assets/logo-dark.svg';
	import LogoLight from '$lib/assets/logo-light.svg';
	import LogoMobile from '$lib/assets/logo-Mobile.svg';
	import AddTaskMobile from '$lib/assets/icon-add-task-mobile.svg';
	import ChevronDown from '$lib/assets/icon-chevron-down.svg';
	import ChevronUp from '$lib/assets/icon-chevron-up.svg';
	import VerticalEllipsis from '$lib/assets/icon-vertical-ellipsis.svg';

	import Button from '$lib/components/button.svelte';

	export let navbarOpen = false;
	export let selectedBoard = '';

	function toggleSidebar() {
		navbarOpen = !navbarOpen;
	}
</script>

<header class="flex items-center justify-between w-full bg-white dark:bg-dark-gray">
	<button class="flex gap-4 cursor-pointer" on:click={toggleSidebar}>
		<div class="md:border-r md:h-full md:border-lines-light dark:md:border-lines-dark p-8 pr-[74px]">
			<img src={LogoMobile} class="flex md:hidden" alt="Logo" />
			<img src={LogoLight} class="hidden dark:md:flex" alt="Logo" />
			<img src={LogoDark} class="hidden md:flex dark:md:hidden" alt="Logo" />
		</div>
		<div class="p-4">
		<div class="flex h-full gap-2 items-center">
			<div class="text-heading-lg font-heading-l text-black dark:text-white">{selectedBoard}</div>
			<div class="flex items-center h-full transition-all md:hidden">
				{#if navbarOpen}
				<img src={ChevronDown} alt="chevron down" class="w-3 h-2 mt-[2px]" />
				{:else}
				<img src={ChevronUp} alt="chevron up" class="w-3 h-2 mt-[2px]" />
				{/if}
			</div>
		</div>
	</button>
	<div class="flex gap-4 items-center pr-6">
		<div>
			<div class="flex md:hidden">
				<Button label="" icon={AddTaskMobile} />
			</div>
			<div class="hidden md:flex">
				<Button label="+ Add New Task" />
			</div>
		</div>
		<div>
			<img src={VerticalEllipsis} alt="More options" />
		</div>
	</div>
</header>
