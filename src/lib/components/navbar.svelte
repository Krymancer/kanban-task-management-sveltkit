<script lang="ts">
import HideSidebar from "$lib/assets/icon-hide-sidebar.svg";
import ShowSidebar from "$lib/assets/icon-show-sidebar.svg";
import IconBoard from "$lib/assets/icon-board.svg";
import IconDarkTheme from "$lib/assets/icon-dark-theme.svg";
import IconLightTheme from "$lib/assets/icon-light-theme.svg";
import ToggleSwitch from "./toggle-switch.svelte";


const boards = ["Platform Launch", "Marketing Plan", "Road Map"];

$: totalBoards = boards.length;

</script>

<nav class="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-start pt-20 justify-center z-10">
  <div class="bg-light-gray dark:bg-dark-gray z-20 rounded-lg p-4 w-[264px] flex flex-col opacity-1">
    <div class="text-medium-gray font-heading-l text-heading-s px-2">ALL BOARDS ({totalBoards})</div>
    <div class="dark:bg-very-dark-gray flex items-center justify-center w-full h-[48px] rounded-[7px] gap-2">
      <img src={IconLightTheme} alt="light theme" />
      <ToggleSwitch />
      <img src={IconDarkTheme} alt="dark theme" />
    </div>
  </div>
</nav>