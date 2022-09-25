<script lang="ts">
  import '../app.postcss';

  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  import Header from '$lib/components/header/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  onMount(() => {
    theme.init(data.theme);
  });

  $: {
    if (browser) {
      document.documentElement.setAttribute('data-theme', $theme);
      document.documentElement.classList.value = $theme;
    }
  }
</script>

<div
  class="flex flex-col min-h-screen bg-gradient-to-t from-base-300 to-base-100"
>
  <Header />
  <main class="flex-1 grid px-4 md:px-0">
    <slot />
  </main>
  <Footer />
</div>
