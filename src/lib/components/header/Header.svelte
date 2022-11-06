<script lang="ts">
  import ThemeToggle from '$components/theme/ThemeToggle.svelte';
  import { theme } from '$stores/theme';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
  import HorizontalNav from '$components/nav/HorizontalNav.svelte';
  import { navLinks } from '$data/NavLinks';
</script>

<div class="bg-base-100 h-12 flex justify-between items-center px-4 shadow-md">
  <a href="/" class="h-full px-2">
    <img src="/svelte.svg" alt="" class="h-full py-2" />
  </a>
  <HorizontalNav {navLinks} />
  <div
    class="flex items-center space-x-4 [&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-all"
  >
    <a
      href="https://github.com/Fractal-Tess/SvelteKit"
      rel="noreferrer"
      target="_blank"
    >
      <Fa icon={faGithub} class="text-2xl" />
    </a>
    <button on:click={theme.toggleTheme}>
      <ThemeToggle />
    </button>
  </div>
</div>
