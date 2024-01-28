import { env } from '$env/dynamic/public';
import z from 'zod';
import type { Handle } from '@sveltejs/kit';
import type { Theme } from './lib/types';
import PocketBase from 'pocketbase';

const themeValidator = z.enum(['dark', 'light']);

const validateTheme = (theme: unknown): theme is Theme => {
  const vr = themeValidator.safeParse(theme);
  return vr.success;
};

export const handle: Handle = async ({ event, resolve }) => {
  // Theme
  const theme = event.cookies.get('theme');
  if (validateTheme(theme)) {
    event.locals.theme = theme;
  } else event.locals.theme = null;

  // User
  const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL);
  pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  if (pb.authStore.isValid && pb.authStore.model) {
    // Set event.locals.user from model
  } else event.locals.user = null;
  event.locals.pb = pb;

  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replaceAll('$theme$', event.locals.theme || '')
  });

  response.headers.set(
    'set-cookie',
    pb.authStore.exportToCookie({ httpOnly: false })
  );

  return response;
};
