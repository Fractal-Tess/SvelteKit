<script lang="ts">
  import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
  import { theme } from '$lib/stores/theme';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
</script>

<div class="bg-base-100 h-12 flex justify-between items-center px-4 shadow-md">
  <div />
  <div class="flex items-center space-x-4 [&>*:hover]:text-primary ">
    <a
      href="https://github.com/Fractal-Tess/SvelteKit"
      rel="noreferrer"
      target="_blank"
    >
      <Fa icon={faGithub} size="lg" />
    </a>
    <button on:click={theme.toggleTheme}>
      <ThemeToggle />
    </button>
  </div>
</div>
