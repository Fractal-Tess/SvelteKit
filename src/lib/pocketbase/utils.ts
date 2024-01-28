import { env } from '$env/dynamic/public';
import type { RecordModel } from 'pocketbase';

type ImageThumb = {
  x: number;
  y: number;
};

export const pocketbaseImageToUrl = (
  record: RecordModel,
  image: string,
  thumb?: ImageThumb
) => {
  let url = `${env.PUBLIC_POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${image}`;
  url += thumb ? `?${thumb.x}x${thumb.y}` : '';
  return url;
};

export type PBRecord<T, E = Record<string, unknown>> = RecordModel &
  T &
  (E extends Record<string, unknown>
    ? {
        expand: { [Key in keyof E]: E[Key] };
      }
    : unknown);
