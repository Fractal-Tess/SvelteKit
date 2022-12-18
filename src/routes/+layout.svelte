<script lang="ts">
  import '$styles';

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

<div class="h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>

<style>
  div {
    background-image: url('/bg.avif');
    background-size: cover;
  }
</style>
