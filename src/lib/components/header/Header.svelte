<script lang="ts">
  import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
  import { theme } from '$lib/stores/theme';
</script>

<div
  class="bg-base-100 h-12 flex justify-between items-center px-4 shadow-md shadow-primary"
>
  <div />
  <div>
    <button on:click={theme.toggleTheme}>
      <ThemeToggle cssClass={'w-8'} />
    </button>
  </div>
</div>
