<script lang="ts">
  import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
  import { cn } from '$lib/utils';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { page } from '$app/stores';
  import Fa from 'svelte-fa';

  type Route = { href: string; label: string };
  const routes: Route[] = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about',
      label: 'About'
    },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<div class="flex h-20 items-center justify-between px-4">
  <a href="/" class="block h-full">
    <img
      src="/svelte.svg"
      alt="svelte logo"
      class="aspect-square h-full py-4" />
  </a>
  <nav class="flex gap-x-8 text-3xl font-bold">
    {#each routes as route}
      <a
        href={route.href}
        class={cn(
          'transition-colors hover:opacity-80',
          route.href === $page.url.pathname ? '' : 'opacity-50'
        )}>{route.label}</a>
    {/each}
  </nav>
  <div
    class="flex items-center space-x-4 [&>*:hover]:text-primary [&>*]:transition-all [&>*]:duration-300">
    <a
      href="https://github.com/Fractal-Tess/SvelteKit"
      rel="noreferrer"
      target="_blank">
      <Fa icon={faGithub} class="text-3xl" />
    </a>
    <ThemeToggle />
  </div>
</div>
