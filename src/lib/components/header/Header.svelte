<script lang="ts">
  import ThemeToggle from '$components/theme/ThemeToggle.svelte';
  import { theme } from '$stores/theme';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
  import HorizontalNav from '$components/nav/HorizontalNav.svelte';
  import { navLinks } from '$data/NavLinks';
</script>

<div class="h-20 flex justify-between items-center px-4">
  <a href="/" class="h-3/4">
    <img src="/svelte.svg" alt="" class="object-contain h-full py-2" />
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
      <Fa icon={faGithub} class="text-3xl" />
    </a>
    <button on:click={theme.toggleTheme} class="grid">
      <ThemeToggle theme={$theme} class="h-9" />
    </button>
  </div>
</div>
