import { themes } from '$lib/types';
import z from 'zod';

export const themeValidator = z.enum(themes);
