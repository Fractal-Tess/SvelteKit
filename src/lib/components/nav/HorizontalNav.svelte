<script lang="ts">
  import { page } from '$app/stores';
  import type { NavLink } from '$types';
  import Fa from 'svelte-fa';

  export let navLinks: NavLink[];
</script>

<nav>
  <ul class="flex space-x-4">
    {#each navLinks as navLink, i (i)}
      <li>
        <a
          href={navLink.target.href}
          target={navLink.target.newTab ? '_blank' : ''}
          class={'text-2xl font-bold ' +
            ($page.url.pathname === navLink.target.href
              ? 'border-b-2 border-primary text-primary'
              : '')}>
          {#if navLink.content.icon}
            <Fa icon={navLink.content.icon} />
          {/if}
          {navLink.content.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>
