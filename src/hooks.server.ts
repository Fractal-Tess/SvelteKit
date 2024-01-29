import { env } from '$env/dynamic/public';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { themeValidator } from '$lib/validators/theme';

export const handle: Handle = async ({ event, resolve }) => {
  // Theme
  const theme = await themeValidator.safeParseAsync(event.cookies.get('theme'));
  if (theme.success) {
    event.locals.theme = theme.data;
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
