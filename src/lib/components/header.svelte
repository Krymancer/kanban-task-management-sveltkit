<script lang="ts">
	import LogoDark from '$lib/assets/logo-dark.svg';
	import LogoLight from '$lib/assets/logo-light.svg';
	import LogoMobile from '$lib/assets/logo-Mobile.svg';
	import AddTaskMobile from '$lib/assets/icon-add-task-mobile.svg';
	import ChevronDown from '$lib/assets/icon-chevron-down.svg';
	import ChevronUp from '$lib/assets/icon-chevron-up.svg';
	import VerticalEllipsis from '$lib/assets/icon-vertical-ellipsis.svg';

	import Button from '$lib/components/button.svelte';
</script>

<div class="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-gray">
	<div class="flex gap-4">
		<img src={LogoMobile} class="flex md:hidden" alt="Logo" />
		<img src={LogoLight} class="hidden dark:md:flex" alt="Logo" />
		<img src={LogoDark} class="hidden md:flex dark:md:hidden" alt="Logo" />
		<div class="flex gap-2 items-center">
			<div class="text-heading-l font-heading-l text-black dark:text-white">Platform Launch</div>
			<div class="flex items-center h-full">
				<img src={ChevronDown} alt="chevron down" class="w-3 h-2 mt-[2px]" />
			</div>
		</div>
	</div>
	<div class="flex gap-4 items-center">
		<div>
			<Button label="" icon={AddTaskMobile} />
		</div>
		<div>
			<img src={VerticalEllipsis} alt="More options" />
		</div>
	</div>
</div>
