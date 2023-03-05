<script lang="ts">
  import ThemeToggle from '$components/theme/ThemeToggle.svelte';
  import { theme } from '$stores/theme';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
  import HorizontalNav from '$components/nav/HorizontalNav.svelte';
  import { navLinks } from '$data/NavLinks';
</script>

<div class="flex h-20 items-center justify-between px-4">
  <a href="/" class="h-3/4">
    <img src="/svelte.svg" alt="" class="h-full object-contain py-2" />
  </a>
  <HorizontalNav {navLinks} />
  <div
    class="flex items-center space-x-4 [&>*:hover]:text-primary [&>*]:transition-all [&>*]:duration-300">
    <a
      href="https://github.com/Fractal-Tess/SvelteKit"
      rel="noreferrer"
      target="_blank">
      <Fa icon={faGithub} class="text-3xl" />
    </a>
    <ThemeToggle theme={$theme} onClick={theme.toggleTheme} />
  </div>
</div>
